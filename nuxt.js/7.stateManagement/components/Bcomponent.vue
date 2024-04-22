<script setup lang="ts">
import { useCounterStore } from '~/store/counter';
const store=useCounterStore();
</script>

<template>
    <div>
        <hr>
        <h2>bcomponent</h2>
        <button @click="store.increment" >click me</button>
    </div>
</template>

<style lang="scss" scoped>

</style>