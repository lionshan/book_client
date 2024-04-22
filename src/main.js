import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router';

// import 'ant-design-vue/dist/reset.css';

const app = createApp(App);
app.config.productionTip = false;
app.use(Antd);
app.use(router)


app.mount('#app');
