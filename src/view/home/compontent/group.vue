<template>
  <div class="menu-demo">
    <a-menu
        :style="{ width: '200px', height: '100%' }"
        :default-selected-keys="['1']"
        :collapsed="true"
    >
      <a-menu-item key="1" data-obj="1">
        <template #icon><icon-apps></icon-apps></template>
        Menu 1
      </a-menu-item>
      <a-menu-item key="2" data-obj="1"><template #icon><icon-apps></icon-apps></template>Menu 2</a-menu-item>
      <a-menu-item key="3" data-obj="1"><template #icon><icon-apps></icon-apps></template>Menu 3</a-menu-item>
      <a-menu-item key="4" data-obj="1"><template #icon><icon-apps></icon-apps></template>Menu 4</a-menu-item>
      <a-menu-item key="5" data-obj="1"><template #icon><icon-apps></icon-apps></template>Menu 5</a-menu-item>
      <a-menu-item key="5" data-obj="1"><template #icon><icon-apps></icon-apps></template>Menu 5</a-menu-item>
      <a-menu-item key="5" data-obj="1"><template #icon><icon-apps></icon-apps></template>Menu 5</a-menu-item>
      <a-menu-item key="5" data-obj="1"><template #icon><icon-apps></icon-apps></template>Menu 5</a-menu-item>
      <a-menu-item key="5" data-obj="1"><template #icon><icon-apps></icon-apps></template>Menu 5</a-menu-item>
      <a-menu-item key="5" data-obj="1"><template #icon><icon-apps></icon-apps></template>Menu 5</a-menu-item>
      <a-menu-item key="5" data-obj="1"><template #icon><icon-apps></icon-apps></template>Menu 5</a-menu-item>
      <a-menu-item key="5" data-obj="1"><template #icon><icon-apps></icon-apps></template>Menu 5</a-menu-item>
    </a-menu>
  </div>
</template>
<script>
import { IconApps } from '@arco-design/web-vue/es/icon';

export default {
  components: {
    IconApps,
  },
};
</script>
<style lang="scss" scoped>
.menu-demo {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: var(--color-neutral-2);
}
:deep(.arco-menu-inner) {
  &::-webkit-scrollbar { width: 0 !important }
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
</style>
