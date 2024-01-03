<template>
    <div class="login">
        <div class="loginBox">
            <h2>登录用户</h2>
            <el-form ref="formRef" :model="loginFormData" status-icon :rules="rules" label-width="40px">
                <!-- 三个参数分别为该输入框的标题，对应变量 -->
                <el-form-item label="账号" prop="loginId">
                    <el-input v-model.number="loginFormData.loginId" />
                </el-form-item>
                <el-form-item label="密码" prop="loginPwd">
                    <el-input v-model="loginFormData.loginPwd" type="password" />
                </el-form-item>


                <el-form-item>
                    <!-- 这里是两个点击事件，要绑定的是表单ref而非表单数据 -->
                    <!-- <el-button type="primary" @click="submitForm(formRef)">登录</el-button> -->
                    <el-button type="primary" @click="loginTest(formRef)">登录</el-button>
                    <el-button @click="resetForm(formRef)">重新输入</el-button>
                </el-form-item>
            </el-form>



        </div>

    </div>
</template>

<script setup lang="ts">

import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
import axios from 'axios'


//这里对应el-form中第一个参数 ref，声明后就与表单绑定
const formRef = ref<FormInstance>()

//表单数据
const loginFormData = reactive({
    loginId: 0,
    loginPwd: ''
})
const testId= ref(12);



const validateUser = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入用户'))
    } else {
        callback()
    }
}
const validatePwd = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入密码'))
    } else {
        callback()
    }
}

//验证对象，在泛型里面检查表单数据，所以需要改成当前表单的对象类型
//对象中的变量是要被验证的属性，验证方法在validater里面
const rules = reactive<FormRules<typeof loginFormData>>({
    loginId: [{ validator: validateUser, trigger: 'blur' }],
    loginPwd: [{ validator: validatePwd, trigger: 'blur' }]
})


//登录方法
const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!')
            return false
        }
    })
}

//测试axios
const loginTest = (formEl: FormInstance | undefined)=>{
    console.log(testId.value);
    // axios.get(`http://localhost:7075/api/Calories/GetSingleFoodAndCaloriesById?id={loginFormData.loginId}`).then(res=>console.log(res));
    axios.get("https://localhost:7075/api/Calories/GetSingleFoodAndCaloriesById?id=1003").then(res=>console.log(res));
}



//重置表单
const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

</script>

<style scoped lang="scss">
.login {
    width: 100vw;
    height: 100vh;
    //background-color: #b73b3b;
    background: linear-gradient(to bottom, #47484c, #151515);
    display: flex;
    justify-content: center;
    align-items: center;

    .loginBox {
        width: 400px;
        height: 230px;
        border: 1px solid #fff;
        background-color: #DED0B6;
        padding: 20px;

        h2 {
            font-size: 25px;
            color: #7E4A25;
            padding-bottom: 25px;
            text-align: center;
        }

        ::v-deep .el-form-item__label {
            color: #7E4A25
        }
    }
}
</style>