import { computed, onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { useMessageStore } from "../models/messageModel"

const MAX_LENGTH = 20;

export function useMessageViewModel() {
    // Model
    const store = useMessageStore()
    const { message, loading } = storeToRefs(store)

    // API 呼び出し
    onMounted(() => {
        store.fetchMessage()
    })

    // View 用に加工
    const messageLength = computed(() => {
        return message.value.length
    })

    // 入力監視
    watch(message, (newMessage) => {
        if (newMessage.length > MAX_LENGTH) {
            store.message = newMessage.slice(0, MAX_LENGTH)
        }
    })

    return {
        message: message,
        loading: loading,
        messageLength,
        clearMessage: store.clear,
    }
}