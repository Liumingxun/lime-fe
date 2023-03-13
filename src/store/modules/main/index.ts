import { defineStore } from 'pinia'
import { ref } from 'vue'
import { io } from 'socket.io-client'
import type { ChatRoomDetail } from '@/store/modules/main/types'
import * as chatRoomApi from '@/api/chatRoom'

export const useMainStore = defineStore('main', () => {
  const selectedChatRoomId = ref('')
  const selectedChatRoomDetail = ref<ChatRoomDetail>()
  const selectedChannelId = ref('')
  const chatRoomList = ref<ChatRoomDetail[]>([])
  const socket = io('http://localhost:21380')

  function getMyChatRoomList() {
    return chatRoomApi.getMyChatRoomList().then(({ data }) => {
      chatRoomList.value = data
    }).catch(err => console.error(err))
  }

  return {
    selectedChatRoomId,
    selectedChatRoomDetail,
    selectedChannelId,
    chatRoomList,
    getMyChatRoomList,
    socket,
  }
})
