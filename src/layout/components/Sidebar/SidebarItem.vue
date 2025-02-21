<script setup lang = "ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>
<template>
  <el-menu-item index = "/dashboard">
    <el-icon size = "20">
      <SvgIcon name = "数据" color = "#fff" />
    </el-icon>
    <span>数据概览</span>
  </el-menu-item>
  <el-sub-menu index = "2">
    <template #title>
      <el-icon>
        <SvgIcon name = "内容" />
      </el-icon>
      <span>内容管理</span>
    </template>
    <el-menu-item index = "/content/articles">文章管理</el-menu-item>
    <el-menu-item index = "/content/comments">评论管理</el-menu-item>
  </el-sub-menu>
  <el-sub-menu index = "1">
    <template #title>
      <el-icon>
        <location />
      </el-icon>
      <span>Navigator One</span>
    </template>
    <el-menu-item-group title = "Group One">
      <el-menu-item index = "1-1">item one</el-menu-item>
      <el-menu-item index = "1-2">item two</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title = "Group Two">
      <el-menu-item index = "1-3">item three</el-menu-item>
    </el-menu-item-group>
    <el-sub-menu index = "1-4">
      <template #title>item four</template>
      <el-menu-item index = "1-4-1">item one</el-menu-item>
    </el-sub-menu>
  </el-sub-menu>
  <el-menu-item index = "2">
    <el-icon>
      <icon-menu />
    </el-icon>
    <span>Navigator Two</span>
  </el-menu-item>
  <el-menu-item index = "3" disabled>
    <el-icon>
      <document />
    </el-icon>
    <span>Navigator Three</span>
  </el-menu-item>
  <el-menu-item index = "4">
    <el-icon>
      <setting />
    </el-icon>
    <span>Navigator Four</span>
  </el-menu-item>
</template>
<style lang = "scss">
.el-menu .el-menu--inline {
  padding-left: 10px;
}
</style>
