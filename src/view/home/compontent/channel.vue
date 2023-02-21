<script lang="ts">
import { IconDown } from '@arco-design/web-vue/es/icon'
export default {
  components: {
    IconDown,
  },
  setup() {
    const handleSelect = (v: any) => {
      console.log(v)
    }

    return {
      handleSelect,
    }
  },
}
</script>

<template>
  <a-layout>
    <a-layout-header>
      <a-dropdown :popup-max-height="false" style="width: 175px;" @select="handleSelect">
        <a-button style="width: 100%;position: relative;">
          No Max Height <IconDown />
        </a-button>
        <template #content>
          <a-doption>Option 1</a-doption>
          <a-doption disabled>
            Option 2
          </a-doption>
          <a-doption>Option 3</a-doption>
          <a-doption>Option 4</a-doption>
          <a-doption>Option 5</a-doption>
          <a-doption>Option 6</a-doption>
          <a-doption>Option 7</a-doption>
          <a-doption>Option 8</a-doption>
          <a-doption>Option 9</a-doption>
        </template>
      </a-dropdown>
    </a-layout-header>
    <a-layout-content>
      <a-scrollbar style="height:calc(100vh - 32px);overflow: auto;">
        <a-menu
          :style="{ width: '200px', height: '100%' }"
          :default-open-keys="['0']"
          :default-selected-keys="['0_1']"
        >
          <a-sub-menu key="0">
            <template #title>
              Navigation 1
            </template>
            <a-menu-item key="0_0">
              Menu 1
            </a-menu-item>
            <a-menu-item key="0_1">
              Menu 2
            </a-menu-item>
            <a-menu-item key="0_2" disabled>
              Menu 3
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="1">
            <template #title>
              Navigation 2
            </template>
            <a-menu-item key="1_0">
              Menu 1
            </a-menu-item>
            <a-menu-item key="1_1">
              Menu 2
            </a-menu-item>
            <a-menu-item key="1_2">
              Menu 3
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="2">
            <template #title>
              Navigation 3
            </template>
            <a-menu-item key="2_0">
              Menu 1
            </a-menu-item>
            <a-menu-item key="2_1">
              Menu 2
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-scrollbar>
    </a-layout-content>
  </a-layout>
</template>

<style lang="scss" scoped>
.arco-dropdown-open .arco-icon-down {
  transform: rotate(180deg);
}
</style>
