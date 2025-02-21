<script setup lang = "ts">
import Sidebar from '@/layout/components/Sidebar/index.vue'
</script>
<template>
  <el-container class = "app-wrapper">
    <div><Sidebar /></div>

    <el-container>
      <el-header height = "64px">
        <Header />
      </el-header>
      <el-main>
        <el-breadcrumb separator = "/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped lang = "scss">
.app-wrapper{
  height: 100%;
  width: 100%;
}
</style>
