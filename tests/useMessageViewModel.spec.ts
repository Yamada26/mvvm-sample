import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useMessageStore } from "../src/models/messageModel";
import { useMessageViewModel } from "../src/viewmodels/useMessageViewModel";
import { nextTick } from "vue";
import MessageView from "@/views/MessageView.vue";
import { mount } from "@vue/test-utils";

describe("useMessageViewModel", () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

  it('初期表示時に fetchMessage が呼ばれる', async () => {
    const store = useMessageStore()
    const spy = vi.spyOn(store, 'fetchMessage')

    mount(MessageView)  // 疑似的にコンポーネントをマウントしてライフサイクルをトリガー

    expect(spy).toHaveBeenCalled()
  })

  it('messageLength が正しく計算される', async () => {
    const vm = useMessageViewModel()

    vm.message.value = 'abc'
    await nextTick()

    expect(vm.messageLength.value).toBe(3)
  })

  it('入力が最大文字数を超えるとカットされる', async () => {
    const vm = useMessageViewModel()

    vm.message.value = '1234567890123456789012345' // 25文字
    await nextTick()

    expect(vm.message.value.length).toBe(20)
  })
})

