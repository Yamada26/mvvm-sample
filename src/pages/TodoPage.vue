<script setup lang="ts">
import LoadingText from '@/components/LoadingText.vue'
import { NButton, NInput } from 'naive-ui'
import { useTodoStore } from '@/models/todoModel'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const loading = ref(true)

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)

const newTodoTitle = ref('')

const handleAddTodo = async () => {
  if (newTodoTitle.value.trim()) {
    await todoStore.addTodo(newTodoTitle.value)
    newTodoTitle.value = ''
  }
}

onMounted(async () => {
  loading.value = true
  await todoStore.fetchTodos()
  loading.value = false
})
</script>

<template>
  <div>
    <h1>Todo App</h1>

    <LoadingText :show="loading" />

    <table border="1">
      <tr>
        <th>ID</th>
        <th>Title</th>
      </tr>
      <tr v-for="todo in todos" :key="todo.id">
        <td>{{ todo.id }}</td>
        <td>{{ todo.title }}</td>
      </tr>
    </table>

    <n-input v-model:value="newTodoTitle" placeholder="New todo" />
    <n-button :disabled="!newTodoTitle" @click="handleAddTodo">Add</n-button>
  </div>
</template>
