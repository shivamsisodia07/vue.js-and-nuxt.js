<script setup >
  const admin=ref("raj");

</script>

<template>
  <div>
  <h2>app</h2>
  <div>
    <li>
      <input type="string" v-model="admin"/>
      <h1>{{ admin }}</h1>
      <NuxtLink to="/about" >about</NuxtLink>
      <NuxtLink to="/contact" >Contact</NuxtLink>
      <NuxtLink :to="`/${admin}`">ADMIN</NuxtLink>
      <!-- dynamic route -->
      <NuxtLink to="/raj">raj</NuxtLink>
    </li>
  </div>
  <NuxtPage></NuxtPage>
  </div>
</template>
