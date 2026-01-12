<template>
  <p v-if="show">Loading...</p>
</template>

<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>
