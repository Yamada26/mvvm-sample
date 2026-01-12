<template>
  <div>
    <h2>BaseButton</h2>
    <BaseButton>Click Me</BaseButton>

    <h2>BaseInput</h2>
    <BaseInput v-model="inputValue" placeholder="Enter text here" />

    <h2>Loading</h2>
    <LoadingText :show="true" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'
import LoadingText from '@/components/LoadingText.vue'

const inputValue = ref('')
</script>
