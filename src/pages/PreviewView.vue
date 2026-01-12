<template>
    <div>
        <h2>Preview</h2>
        <p>{{ message }}</p>
    </div>
</template>

<script setup lang="ts">
    import { useMessageViewModel } from "../viewmodels/useMessageViewModel"

    const { message } = useMessageViewModel()
</script>