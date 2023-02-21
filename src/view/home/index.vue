<script setup lang="ts">
import LeftGroup from './compontent/group.vue'
import LeftChannel from './compontent/channel.vue'
import RightMessage from './compontent/message.vue'
</script>

<template>
  <a-layout>
    <a-layout-sider style="width: 50px; height: 100%">
      <LeftGroup />
    </a-layout-sider>
    <a-layout-sider style="width: 200px; height: 100%">
      <LeftChannel />
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
