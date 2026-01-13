<template>
  <div>
    <h1>Todo App</h1>

    <LoadingText :show="vm.loading.value" />

    <ul>
      <li v-for="todo in vm.todos.value" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>

    <input v-model="vm.newTitle.value" placeholder="New todo" />
    <button :disabled="!vm.canAdd" @click="vm.addTodo">Add</button>
  </div>
</template>

<script setup lang="ts">
import LoadingText from '@/components/LoadingText.vue'
import { useTodoViewModel } from '@/viewmodels/useTodoViewModel'

const vm = useTodoViewModel()
</script>
