<template>
  <a-scrollbar style="height:347px;overflow: auto;">
    <div style="height: 700px">

    </div>
  </a-scrollbar>
  <a-space direction="vertical" size="large" style="width: 100%">
    <a-mention v-model="value" :data="['Bytedance', 'Bytedesign', 'Bytenumner']" placeholder="enter something" />
  </a-space>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const value = ref('');
    const text = ref('');

    return {
      value,
      text
    }
  }
}
</script>

<style scoped>

</style>
