<template>
  <button class="base-button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits(['click'])
</script>
