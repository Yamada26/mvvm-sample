<template>
  <div class="container">
    <h1>MVVM Message Sample</h1>

    <LoadingText :show="loading" />
    <BaseInput v-model="message" placeholder="Type a message" />

    <p>入力内容: {{ message }}</p>
    <p>文字数: {{ messageLength }}</p>

    <BaseButton @click="clearMessage">Clear</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import { useMessageViewModel } from '../viewmodels/useMessageViewModel'
import BaseInput from '@/components/BaseInput.vue'
import LoadingText from '@/components/LoadingText.vue'

const { message, messageLength, clearMessage, loading } = useMessageViewModel()
</script>
