<script setup lang="ts">
import LoadingText from '@/components/LoadingText.vue'
import { NButton, NInput, NDataTable } from 'naive-ui'
import { useTodoStore } from '@/models/todoModel'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

const loading = ref(true)

const todoStore = useTodoStore()
const { todos } = storeToRefs(todoStore)

const newTodoTitle = ref('')

const columns = [
  {
    title: 'ID',
    key: 'id',
    width: 100,
  },
  {
    title: 'Title',
    key: 'title',
  },
]

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

    <n-data-table :columns="columns" :data="todos" />

    <n-input v-model:value="newTodoTitle" placeholder="New todo" />
    <n-button :disabled="!newTodoTitle" @click="handleAddTodo">Add</n-button>
  </div>
</template>
