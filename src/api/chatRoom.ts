import axios from 'axios'
export function getMyChatRoomList() {
  return axios.get('/api/chatRoom/my')
}
