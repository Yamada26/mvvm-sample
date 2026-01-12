import { ref } from 'vue';

export function useMessageModel() {
    const message = ref<string>('');

    const clear = () => {
        message.value = '';
    };

    return {
        message,
        clear
    };
}

