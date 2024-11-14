import { createApp } from 'vue';
import './style.css'
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import { createHead } from '@vueuse/head';
import store from './store';

const app = createApp(App);
const head = createHead();

app.use(store);
app.use(head);
app.use(i18n);
app.use(router);
app.mount('#app');

