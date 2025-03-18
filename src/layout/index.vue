<script setup lang = "ts">
import Sidebar from '@/layout/components/Sidebar/index.vue'
import Header from '@/layout/components/HeaderView.vue'
/*
import { onMounted, useTemplateRef } from 'vue'
const header = useTemplateRef('header')
onMounted(() => {
  console.log(header.value)
})
*/

</script>
<template>
  <el-container class = "app-wrapper">
    <div>
      <Sidebar />
    </div>
    <el-container>
      <el-header height = "64px">
        <Header ref="header" />
      </el-header>
      <el-main>
        <el-breadcrumb separator = "/" class="breadcrumb">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
        </el-breadcrumb>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped lang = "scss">
.app-wrapper {
  height: 100%;
  width: 100%;
  .breadcrumb{
    margin-bottom: 20px;
  }
}
</style>
