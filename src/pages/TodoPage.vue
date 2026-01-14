<template>
  <div>
    <h1>Todo App</h1>

    <LoadingText :show="vm.loading.value" />

    <ul>
      <li v-for="todo in vm.todos.value" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>

    <n-input v-model="vm.newTitle.value" placeholder="New todo" />
    <n-button :disabled="!vm.canAdd" @click="vm.addTodo">Add</n-button>
  </div>
</template>

<script setup lang="ts">
import LoadingText from '@/components/LoadingText.vue'
import { useTodoViewModel } from '@/viewmodels/useTodoViewModel'
import { NButton, NInput } from 'naive-ui'

const vm = useTodoViewModel()
</script>
