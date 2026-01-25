import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as { id: number; title: string }[],
  }),
  actions: {
    async fetchTodos() {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      this.todos = await res.json()
    },
    async addTodo(title: string) {
      const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title }),
      })
      const newTodo = await res.json()
      this.todos.push(newTodo)
    },
  },
  getters: {},
})

// export const useTodoStore = defineStore('todo', () => {
//   const todos = ref<{ id: number; title: string }[]>([])
//   const loading = ref<boolean>(false)

//   async function fetchTodos() {
//     loading.value = true

//     const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
//     todos.value = await res.json()

//     loading.value = false
//   }

//   async function addTodo(title: string) {
//     const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ title }),
//     })
//     const newTodo = await res.json()
//     todos.value.push(newTodo)
//   }

//   return {
//     todos,
//     loading,
//     fetchTodos,
//     addTodo,
//   }
// })
