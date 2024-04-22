<script setup lang="ts">
definePageMeta({
    middleware:'auth'
})
</script>

<template>
    <div>
        <h2>admin</h2>
        <p>{{ $route.params }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>