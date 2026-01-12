import { ref } from 'vue';

export function useMessageModel() {
    const message = ref<string>('');
    const loading = ref<boolean>(false);

    const fetchMessage = async () => {
        loading.value = true;

        await new Promise((resolve) => setTimeout(resolve, 1000));
        message.value = 'Hello, World!';
        
        loading.value = false;
    }

    const clear = () => {
        message.value = '';
    };

    return {
        message,
        loading,
        fetchMessage,
        clear
    };
}

