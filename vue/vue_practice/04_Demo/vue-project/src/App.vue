<script setup>
  import {ref} from 'vue'
  const teamActiver = ref(0)

</script>


<template>
  <!-- 最外层的容器 -->
  <div class="top-wrapper">


    <header class="top-header">
      <div @click="teamActiver=0" class="header-button" :class="{ active: teamActiver === 0}">
        热门球员
        <!-- <button class="球队"></button>
        <button class="球员"></button> -->
      </div>
      <div @click="teamActiver=1" class="header-button" :class="{ active: teamActiver === 1}">
        热门球队
      </div>
    </header>

    <!-- 信息主体 -->
    <div class="main" style="color: #fff">
      <!-- 这里显示的内容应该和上面选项卡的选择一致 -->
      <div v-show="teamActiver === 0">球员</div>
      <div v-show="teamActiver === 1">球队</div>
    </div>
  </div>
</template>
<style scoped>
.top-wrapper{
  /* 固定大小 */
  box-sizing: border-box;
  background-color:#352ce0;
  width: 800px;
  padding:20px;
}

.top-header{
  display: flex;
  border-radius: 15px;
  overflow: hidden ;
}

.header-button{
  background-color: aquamarine;
  flex:auto;
  font-size: 30px;
  padding: 10px;
  width: 380px;
  cursor: pointer;
  transition: 0.2s;
}

.active{
  background-color: #9a2020;
  color:#fff;
}

.header-button:not(.active):hover {
  color: #9a2020;
}
</style>