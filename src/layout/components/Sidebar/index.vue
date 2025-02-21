<script setup lang = "ts">

import SidebarItem from '@/layout/components/Sidebar/SidebarItem.vue'
import SidebarLogo from "@/layout/components/Sidebar/Logo.vue"
</script>
<template>
  <el-aside width="220px" class="sidebar-container">
    <sidebar-logo/>
    <el-menu
      router
      :default-active="$route.path"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <sidebar-item/>
    </el-menu>
  </el-aside>
</template>
<style scoped lang = "scss">
.sidebar-container{
  height: 100%;
}
</style>
