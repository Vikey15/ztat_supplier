import { createSSRApp } from "vue";
import './style.css'
import App from './App.vue';
import i18n from './i18n';
import { createHead } from '@vueuse/head';
import store from './store';
import { createRouter } from "./router";


export function createApp() {
 const app = createSSRApp(App);
 const head = createHead();
 const router = createRouter();
 app.use(store);
app.use(head);
app.use(i18n);
app.use(router);
 return { app, router };

}
