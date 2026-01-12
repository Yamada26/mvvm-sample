import { computed } from "vue";
import { useMessageModel } from "../models/messageModel"

export function useMessageViewModel() {
    // Model
    const messageModel = useMessageModel()

    // View 用に加工
    const messageLength = computed(() => {
        return messageModel.message.value.length
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