<template>
  <a-form
    class="login-form"
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <a-form-item
      label="用户名"
      name="username"
      :rules="[{ required: true, message: '请输入用户名' }]"
    >
      <a-input v-model:value="formState.username" />
    </a-form-item>

    <a-form-item
      label="密码"
      name="password"
      :rules="[{ required: true, message: '请输入密码' }]"
    >
      <a-input-password v-model:value="formState.password" />
    </a-form-item>

    <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
      <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
    </a-form-item>

    <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">Submit</a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts" setup>
import { reactive } from 'vue';
import { message } from 'ant-design-vue';
import request from '../utils/request'
import {setToken} from '../utils/storageService'
import {useRouter, useRoute} from 'vue-router'
import {API} from '../utils/env'

const router = useRouter()
const route = useRoute()

interface FormState {
  username: string;
  password: string;
  remember: boolean;
}

const formState = reactive<FormState>({
  username: '',
  password: '',
  remember: true,
});
const onFinish = (values: any) => {
  const {password, username} = values; 
    request.post(`${API}/signIn`, { password, username}).then((res) => {
      setToken(res.token)
      router.push('/home')
    }).catch(res => {
      message.error(res.msg || '异常错误')
    })
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};
</script>
<style lang="scss" scoped>
.login-form{
  margin-top: 40vh;
  transform: translate(0, -50%);
}
</style>
