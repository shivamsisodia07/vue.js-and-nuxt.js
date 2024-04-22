<template>
  <div>
    <h2>transitions</h2>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/contact" >Contact</NuxtLink>
    <nuxtPage></nuxtPage>
  </div>
</template>

<style scoped>
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>