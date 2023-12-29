<script setup>
  import { ref } from "vue"
  const toiletSrc=ref("/images/厕所对望.jpg")
  const changeTheToilet = ()=>{
    toiletSrc.value= "/images/再看一眼.jpg"
  }
  const vbindTest={
    id:"box1",
    class:"hello"
  }

</script>

<template>
  <!-- 想把标签里的东西设置为变量就只能用v-bind不能插值 -->
  <img v-bind:src=toiletSrc height = "800" alt="tokyo toilet"/>
  <button @click="changeTheToilet">点击换厕所</button>
  <div v-bind="vbindTest"></div>

</template>

