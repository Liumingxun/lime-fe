import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Socket } from 'socket.io-client'
import { io } from 'socket.io-client'

const useSocketStore = defineStore('socket', () => {
  const socket = ref<Socket>(io('http://192.168.1.111:21380'))

  return {
    socket,
  }
})

export {
  useSocketStore,
}
