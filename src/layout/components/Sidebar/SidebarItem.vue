<script setup lang = "ts">
import SvgIcon from '@/components/SvgIcon/index.vue'
</script>
<template>
  <el-sub-menu index = "1">
    <template #title>
      <el-icon>
        <SvgIcon name="数据"/>
      </el-icon>
      <span>Navigator One</span>
    </template>
      <el-menu-item index = "1-1">item one</el-menu-item>
      <el-menu-item index = "1-2">item two</el-menu-item>
      <el-menu-item index = "1-3">item three</el-menu-item>
    <el-sub-menu index = "1-4">
      <template #title>item four</template>
      <el-menu-item index = "1-4-1">item one</el-menu-item>
      <el-sub-menu index = "1-4-2">
        <template #title>item one</template>
        <el-menu-item index = "1-4-2-1">item one</el-menu-item>
        <el-menu-item index = "1-4-2-2">item two</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-sub-menu>
  <el-menu-item index = "2">
    <el-icon>

    </el-icon>
    <span>Navigator Two</span>
  </el-menu-item>
  <el-menu-item index = "3" disabled>
    <el-icon>

    </el-icon>
    <span>Navigator Three</span>
  </el-menu-item>
  <el-menu-item index = "4">
    <el-icon>

    </el-icon>
    <span>Navigator Four</span>
  </el-menu-item>
</template>
<style lang = "scss">
.el-menu .el-menu--inline {
  padding-left: 10px;
}
</style>
