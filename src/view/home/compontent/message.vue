<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useMainStore, useSocketStore } from '@/store'

const msg = ref('')
const socketStore = useSocketStore()
const mainStore = useMainStore()

const { socket } = storeToRefs(socketStore)
const { selectedChannelId } = storeToRefs(mainStore)

onBeforeMount(() => {
  socket.value!.emit('ping', Date.now(), (response: unknown) => {
    const data = response as { spendTime: number; sendTime: number }
    console.log(`${Date.now() - data.sendTime + data.spendTime} ms`)
  })
})

// userid + message
function sendMessage() {
  socket.value!.send({
    userId: localStorage.getItem('userid'),
    to: selectedChannelId.value,
    message: msg.value,
  })
  msg.value = ''
}
</script>

<template>
  <a-layout>
    <a-layout-header class="h-45px">
      Header
    </a-layout-header>
    <a-layout-content>
      <a-scrollbar style="height: calc(100vh - 99px); overflow: auto;">
        <div style="height: 1200px" />
      </a-scrollbar>
      <a-textarea v-model="msg" @keyup.enter="sendMessage" />
    </a-layout-content>
  </a-layout>
</template>

<style scoped>

</style>
