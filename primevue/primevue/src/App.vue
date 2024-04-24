<script setup>
import Button from "primevue/button"
import Calendar from 'primevue/calendar'
import InputSwitch from 'primevue/inputswitch'
import {ref} from 'vue'

const checked=ref(true);
const date=ref("");
</script>

<template>
<h2>hello</h2>
<Button unstyled :pt="{
  root:{
    class:'btn',
    id:'click'
  },
  label:{
    class:'label'
  }
}">click me</Button>
<Calendar v-model="date"/>
<InputSwitch v-model="checked"/>
<h2>{{ checked }}</h2>
<h2>{{ date }}</h2>

</template>

<style scope>

.label{
  color: rgb(255, 247, 0);
}
.btn{
  background-color: aqua;
}

</style>
