<template>
  <router-view v-slot="{ Component, route }">
    <transition :name="route.meta.transition" mode="out-in">
      <component
          :is="Component"
          :key="route.meta.usePathKey ? route.path : undefined"
      />
    </transition>
  </router-view>
</template>

<script setup lang="ts">
import {getMyChatRoomList} from "./api/chatRoom";

getMyChatRoomList().then(console.log)
const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");

darkThemeMq.addListener(e => {
  if (e.matches) {
    document.body.setAttribute('arco-theme', 'dark');
  } else {
    document.body.removeAttribute('arco-theme');
  }
});
</script>

<style scoped>

</style>
