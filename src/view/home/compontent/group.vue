<template>
  <a-scrollbar style="height: 100vh; overflow: auto">
    <a-menu collapsed :mode="'vertical'" :default-selected-keys="['1']" :collapsed-width="50">
      <a-menu-item key="1">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu1
      </a-menu-item>
      <a-menu-item key="2">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu2
      </a-menu-item>
      <a-menu-item key="3">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu3
      </a-menu-item>
      <a-menu-item key="4">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu4
      </a-menu-item>
      <a-menu-item key="5">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu5
      </a-menu-item>
      <a-menu-item key="6">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu6
      </a-menu-item>
      <a-menu-item key="7">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu7
      </a-menu-item>
      <a-menu-item key="8">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu8
      </a-menu-item>
      <a-menu-item key="9">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu9
      </a-menu-item>
      <a-menu-item key="10">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu10
      </a-menu-item>
      <a-menu-item key="10">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu11
      </a-menu-item>
      <a-menu-item key="10">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu12
      </a-menu-item>
      <a-menu-item key="10">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu13
      </a-menu-item>
      <a-menu-item key="10">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu14
      </a-menu-item>
      <a-menu-item key="10">
        <template #icon>
          <icon-apps></icon-apps>
        </template>
        Menu15
      </a-menu-item>

    </a-menu>
  </a-scrollbar>
</template>
<script setup>
import {IconApps} from '@arco-design/web-vue/es/icon'
</script>
<style lang="scss" scoped>
:deep(.arco-menu-inner) {
  &::-webkit-scrollbar {
    width: 0 !important
  }

  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}
</style>
