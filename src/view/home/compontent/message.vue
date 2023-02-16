<template>
  <a-scrollbar style="height: calc(100vh - 80px); overflow: auto;">
    <div style="height: 1200px">

    </div>
  </a-scrollbar>
  <a-mention v-model="value" :data="['Bytedance', 'Bytedesign', 'Bytenumner']" placeholder="enter something"/>
</template>

<script>
import {ref} from 'vue'

export default {
  setup() {
    const value = ref('')
    const text = ref('')

    return {
      value,
      text,
    }
  },
}
</script>

<style scoped>

</style>
