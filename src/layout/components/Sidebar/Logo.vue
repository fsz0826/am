<script setup lang = "ts">
import { ref } from 'vue'

const title = ref('管理系统')
</script>
<template>
  <div class="sidebar-logo-container">
    <router-link to="/">
      <h1 class="sidebar-title">{{ title }}</h1>
    </router-link>
  </div>
</template>
<style scoped lang = "scss">

</style>
