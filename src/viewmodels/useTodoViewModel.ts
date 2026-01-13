import { computed, onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/models/todoModel'

export function useTodoViewModel() {
  // Model
  const store = useTodoStore()
  const { todos, loading } = storeToRefs(store)

  const newTitle = ref<string>('')

  // API 呼び出し
  onMounted(() => {
    store.fetchTodos()
  })

  // 入力処理
  const canAdd = computed(() => newTitle.value.length > 0)

  function addTodo() {
    store.addTodo(newTitle.value)
    newTitle.value = ''
  }

  return {
    todos: todos,
    loading: loading,
    newTitle,
    canAdd,
    addTodo,
  }
}
