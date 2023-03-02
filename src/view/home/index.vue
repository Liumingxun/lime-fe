<script setup lang="ts">
import { ref } from 'vue'
import LeftGroup from './compontent/group.vue'
import LeftChannel from './compontent/channel.vue'
import RightMessage from './compontent/message.vue'

const chatRoomId = ref('')

function chooseChatRoomHandler(id: string) {
  chatRoomId.value = id
  console.log(id)
}
</script>

<template>
  <a-layout>
    <a-layout-sider style="width: 50px; height: 100%">
      <LeftGroup @choose-chat-room="chooseChatRoomHandler" />
    </a-layout-sider>
    <a-layout-sider style="width: 200px; height: 100%">
      <LeftChannel :chat-room-id="chatRoomId" />
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="height: 45px">
        Header
      </a-layout-header>
      <a-layout-content>
        <RightMessage />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<style scoped>

</style>
