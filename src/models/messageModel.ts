import { ref } from 'vue';

// Model を Singleton として実装。
// どの ViewModel からも同じインスタンスにアクセスできる。
// props や emits を使わずに状態を共有できる。
// ただし、
// - 初期化タイミングが曖昧
// - テストしづらい
// - 状態が増えると管理不能
const message = ref<string>('');


const loading = ref<boolean>(false);

export function useMessageModel() {
    const fetchMessage = async () => {
        loading.value = true;

        await new Promise((resolve) => setTimeout(resolve, 1000));
        message.value = 'Shared Message';
        
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

