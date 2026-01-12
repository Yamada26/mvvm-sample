import { computed, watch } from "vue";
import { useMessageModel } from "../models/messageModel"

const MAX_LENGTH = 10;

export function useMessageViewModel() {
    // Model
    const messageModel = useMessageModel()

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

    // View から呼ばれる操作
    const clearMessage = () => {
        messageModel.clear()
    }

    return {
        message: messageModel.message,
        messageLength,
        clearMessage
    }
}