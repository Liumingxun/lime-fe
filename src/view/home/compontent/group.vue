<script setup lang="ts">
import { IconUserGroup } from '@arco-design/web-vue/es/icon'
import { onBeforeMount, ref } from 'vue'
import { getMyChatRoomList } from '@/api/chatRoom'

const emit = defineEmits(['chooseChatRoom'])

const chatRoomList = ref([])

onBeforeMount(() => {
  getMyChatRoomList().then(({ data }) => {
    chatRoomList.value = data
  })
})
</script>

<template>
  <a-scrollbar style="height: 100vh; overflow: auto">
    <a-menu collapsed mode="vertical" :default-selected-keys="['1']" :collapsed-width="50">
      <a-menu-item v-for="(cr) in chatRoomList" :key="cr.id" @click="emit('chooseChatRoom', cr.id)">
        <template #icon>
          <IconUserGroup />
        </template>
        {{ cr.name }}
      </a-menu-item>
    </a-menu>
  </a-scrollbar>
</template>

<style lang="scss" scoped>
:deep(.arco-menu-inner) {
  &::-webkit-scrollbar {
    width: 0 !important
  }

  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
</style>
