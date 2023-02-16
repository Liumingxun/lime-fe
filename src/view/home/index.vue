<template>
  <a-layout>
    <a-layout-sider style="width: 48px">
      <Group/>
    </a-layout-sider>
    <a-layout-sider>
      <Channel/>
    </a-layout-sider>
    <a-layout>
      <a-layout-header>Header</a-layout-header>
      <a-layout>
        <a-layout-content>
          <Message/>
        </a-layout-content>
        <a-layout-sider>
          <Main/>
        </a-layout-sider>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Group from './compontent/group.vue'
import Channel from './compontent/channel.vue'
import Message from './compontent/message.vue'
import Main from './compontent/main.vue'
</script>

<style scoped>

</style>
