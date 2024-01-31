<script setup lang="ts">
import { RouterView } from "vue-router";
import request from "@/utils/request";
import { onMounted } from "vue";
const test  = async () => {
 const data  = await  request.get('/system/user');
 console.log(data);
}
onMounted(() => {
  test();
})
</script>
<template>
  <RouterView />
</template>

<style scoped></style>
