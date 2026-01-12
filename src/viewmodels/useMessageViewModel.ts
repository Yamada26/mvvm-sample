import { computed, onMounted, watch } from "vue";
import { useMessageStore } from "../models/messageModel"

const MAX_LENGTH = 20;

export function useMessageViewModel() {
    // Model
    const store = useMessageStore()

    // 初期化
    onMounted(() => {
        store.fetchMessage()
    })

    // View 用に加工
    const messageLength = computed(() => {
        return store.message.length
    })

    // 入力監視
    watch(() => store.message, (newMessage) => {
        if (newMessage.length > MAX_LENGTH) {
            store.message = newMessage.slice(0, MAX_LENGTH)
        }
    })

    return {
        message: store.message,
        messageLength,
        loading: store.loading,
        clearMessage: store.clear,
    }
}