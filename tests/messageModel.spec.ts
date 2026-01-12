import { describe, it, expect, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useMessageStore } from '../src/models/messageModel';

describe('Message Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it("初期状態が正しい", () => {
        const store = useMessageStore();

        expect(store.message).toBe('');
        expect(store.loading).toBe(false);
    })

    it("fetchMessage がメッセージを正しく取得する", async () => {
        const store = useMessageStore();

        const fetchPromise = store.fetchMessage();

        expect(store.loading).toBe(true);

        await fetchPromise;

        expect(store.message).toBe('Hello Pinia!');
        expect(store.loading).toBe(false);
    })

    it("clear がメッセージをクリアする", () => {
        const store = useMessageStore();
        store.message = 'Test Message';

        store.clear();

        expect(store.message).toBe('');
    }) 
})