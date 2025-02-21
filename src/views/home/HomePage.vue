<script setup lang="ts">
defineProps({
  icon: { type: [String, Object], required: true },
  title: { type: String, required: true },
  value: { type: [String, Number], required: true },
  iconColor: { type: String, default: '#409EFF' }
})
</script>

<template>
  <el-card shadow="hover">
    <div class="stats-content">
      <el-icon :size="36" :color="iconColor"><component :is="icon" /></el-icon>
      <div class="stats-text">
        <div class="title">{{ title }}</div>
        <div class="value">{{ value }}</div>
        <div>homepage</div>
      </div>
    </div>
  </el-card>
</template>

<style scoped lang="scss">
div{
  width: 100%;
  height: 100%;

}
</style>
