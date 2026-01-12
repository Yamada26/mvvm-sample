<template>
    <div class="container">
        <h1>MVVM Message Sample</h1>
        <input type="text" v-model="message" placeholder="Type a message"/>

        <p>入力内容: {{ message }}</p>
        <p>文字数: {{ messageLength }}</p>

        <button @click="clearMessage">Clear</button>
    </div>
</template>

<script setup lang="ts">
    import { useMessageViewModel } from "../viewmodels/useMessageViewModel"

    const {
        message,
        messageLength,
        clearMessage
    } = useMessageViewModel()
</script>