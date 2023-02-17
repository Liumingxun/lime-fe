import axios from 'axios'
import type { AxiosRequestHeaders } from 'axios'
import { Message, Modal } from '@arco-design/web-vue'

axios.defaults.baseURL = 'http://localhost:21380'

export interface HttpResponse<T = unknown> {
  success: boolean
  message: string
  data?: T | Record<string, any>
  errors?: Record<string, any>
}

axios.interceptors.request.use(
  (config) => {
    // let each request carry token
    // this example using the JWT token
    // Authorization is a custom headers key
    // please modify it according to the actual situation
    const token = localStorage.getItem('token')
    if (token) {
      if (!config.headers)
        config.headers = {} as AxiosRequestHeaders

      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    // do something
    return Promise.reject(error)
  },
)
// add response interceptors
axios.interceptors.response.use(
  (response) => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (!res.success) {
      Message.error({
        content: res.message || 'Error',
        duration: 5 * 1000,
      })
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (
        [''].includes(res.message)
                && response.config.url !== '/api/user/info'
      ) {
        Modal.error({
          title: 'Confirm logout',
          content:
                        'You have been logged out, you can cancel to stay on this page, or log in again',
          okText: 'Re-Login',
          async onOk() {
            // @todo
            // const userStore = useUserStore();
            //
            // await userStore.logout();
            window.location.reload()
          },
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res
  },
  (error) => {
    Message.error({
      content: error.msg || 'Request Error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  },
)
