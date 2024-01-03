<template>
    <div>
        <el-input v-model="dairyTitle" minlength="1" placeholder="Please input" show-word-limit type="text" />
        <div style="margin: 20px 0" />
        <el-input v-model="dairyContent" minlength="20" placeholder="Please input" show-word-limit type="textarea" />
        <el-row class="mb-4">

            <el-button @click="submitDairy" type="primary">提交</el-button>

        </el-row>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from 'axios'

const dairyTitle = ref('')
const dairyContent = ref('')
const submitDairy = ()=>{
    console.log(dairyContent);
    axios.post(`https://localhost:7075/api/Diary/AddNewDiary?diaryText=${dairyContent.value}`).then(res=>alert(res.status));
}

</script>

<style scoped></style>