import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useMessageStore = defineStore('message', () =>  {
    const message = ref<string>('');
    const loading = ref<boolean>(false);

    const fetchMessage = async () => {
        loading.value = true;

        await new Promise((resolve) => setTimeout(resolve, 1000));
        message.value = 'Hello Pinia!';
        
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
});
