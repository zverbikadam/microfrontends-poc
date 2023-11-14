<template>
  <div>
    <button @click="onClick">Click Me</button>
    <div>{{counter}}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';


const counter = ref(0);

function onClick(event: MouseEvent) {
  counter.value++;
  console.log("Hello");
}
</script>
