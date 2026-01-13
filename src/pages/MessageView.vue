<template>
  <div class="container">
    <h1>MVVM Message Sample</h1>

    <LoadingText :show="vm.loading.value" />
    <n-input
      placeholder="Type a message"
      :value="vm.message.value"
      @update:value="vm.updateMessage"
    ></n-input>

    <p>入力内容: {{ vm.message.value }}</p>
    <p>文字数: {{ vm.messageLength }}</p>

    <BaseButton @click="vm.clearMessage">Clear</BaseButton>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/components/BaseButton.vue'
import { useMessageViewModel } from '../viewmodels/useMessageViewModel'
import LoadingText from '@/components/LoadingText.vue'
import { NInput } from 'naive-ui'

const vm = useMessageViewModel()
</script>
