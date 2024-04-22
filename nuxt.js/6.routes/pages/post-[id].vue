<script setup lang="ts">
const route=useRoute();
</script>

<template>
    <div>
       <h2> post</h2>
       <p>{{ route.params }}</p>
    </div>
</template>

<style lang="scss" scoped>

</style>