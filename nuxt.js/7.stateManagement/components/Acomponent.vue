<script setup lang="ts">
import { useCounterStore } from '~/store/counter';
const store=useCounterStore();
console.log(store);
</script>

<template>
    <div>
        <hr>
        <h2>acomponent</h2>
        <h2>count:{{ store.count }}</h2>
    </div>
</template>

<style lang="scss" scoped>

</style>