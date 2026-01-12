import { computed, onMounted, watch } from "vue";
import { useMessageModel } from "../models/messageModel"

const MAX_LENGTH = 20;

export function useMessageViewModel() {
    // Model
    const messageModel = useMessageModel()

    // 初期化
    onMounted(() => {
        messageModel.fetchMessage()
    })

    // View 用に加工
    const messageLength = computed(() => {
        return messageModel.message.value.length
    })

    // 入力監視
    watch(messageModel.message, (newMessage) => {
        if (newMessage.length > MAX_LENGTH) {
            messageModel.message.value = newMessage.slice(0, MAX_LENGTH)
        }
    })

    return {
        message: messageModel.message,
        messageLength,
        loading: messageModel.loading,
        clearMessage: messageModel.clear,
    }
}