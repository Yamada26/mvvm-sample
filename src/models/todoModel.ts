import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<{ id: number; title: string }[]>([])
  const loading = ref<boolean>(false)

  async function fetchTodos() {
    loading.value = true

    // const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    // todos.value = await res.json()
    // console.log(todos.value)

    await new Promise((resolve) => setTimeout(resolve, 1000))
    todos.value = [
      { id: 1, title: 'Learn Vue' },
      { id: 2, title: 'Learn Pinia' },
      { id: 3, title: 'Build something awesome' },
    ]

    loading.value = false
  }

  async function addTodo(title: string) {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    })
    const newTodo = await res.json()
    todos.value.push(newTodo)
  }

  return {
    todos,
    loading,
    fetchTodos,
    addTodo,
  }
})
