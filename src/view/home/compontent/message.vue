<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useMainStore } from '@/store'

const value = ref('')
const socket = useMainStore().socket

onMounted(() => {
  socket.emit('ping', Date.now(), (response: unknown) => {
    const data = response as { spendTime: number; sendTime: number }
    console.log(`${Date.now() - data.sendTime + data.spendTime}ms`)
  })
})

// userid + message
function sendMessage() {
  socket.send({})
}
</script>

<template>
  <a-layout>
    <a-layout-header style="height: 45px">
      Header
    </a-layout-header>
    <a-layout-content>
      <a-scrollbar style="height: calc(100vh - 99px); overflow: auto;">
        <div style="height: 1200px" />
      </a-scrollbar>
      <a-mention v-model="value" type="textarea" :data="['Bytedance', 'Bytedesign', 'Bytenumner']" placeholder="enter something" @keydown.enter="sendMessage">
        <template #option="{ data }">
          {{ data }}
        </template>
      </a-mention>
    </a-layout-content>
  </a-layout>
</template>

<style scoped>

</style>
