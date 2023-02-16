<template>
  <div class="layout">
    <div class="header">
      <a-dropdown @select="handleSelect" :popup-max-height="false" style="width: 175px;">
        <a-button style="width: 100%;position: relative;">No Max Height <icon-down/></a-button>
        <template #content>
          <a-doption>Option 1</a-doption>
          <a-doption disabled>Option 2</a-doption>
          <a-doption>Option 3</a-doption>
          <a-doption>Option 4</a-doption>
          <a-doption>Option 5</a-doption>
          <a-doption>Option 6</a-doption>
          <a-doption>Option 7</a-doption>
          <a-doption>Option 8</a-doption>
          <a-doption>Option 9</a-doption>
        </template>
      </a-dropdown>
    </div>
    <div class="main">
      <a-scrollbar style="height:368px;overflow: auto;">
        <div>
          <a-menu
              :style="{ width: '200px', height: '100%' }"
              :default-open-keys="['0']"
              :default-selected-keys="['0_1']"
          >
            <a-sub-menu key="0">
              <template #title>Navigation 1</template>
              <a-menu-item key="0_0">Menu 1</a-menu-item>
              <a-menu-item key="0_1">Menu 2</a-menu-item>
              <a-menu-item key="0_2" disabled>Menu 3</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="1">
              <template #title>Navigation 2</template>
              <a-menu-item key="1_0">Menu 1</a-menu-item>
              <a-menu-item key="1_1">Menu 2</a-menu-item>
              <a-menu-item key="1_2">Menu 3</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="2">
              <template #title>Navigation 3</template>
              <a-menu-item key="2_0">Menu 1</a-menu-item>
              <a-menu-item key="2_1">Menu 2</a-menu-item>
            </a-sub-menu>
          </a-menu>
        </div>
      </a-scrollbar>
    </div>
  </div>
</template>

<script>
import { IconDown } from '@arco-design/web-vue/es/icon';
export default {
  components:{
    IconDown,
  },
  setup() {
    const handleSelect = (v) => {
      console.log(v)
    };

    return {
      handleSelect
    }
  },
}
</script>

<style lang="scss" scoped>
.arco-dropdown-open .arco-icon-down {
  transform: rotate(180deg);
}
.layout{
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .main{
    flex-shrink: 0;
  }
}
</style>
