import { createApp } from 'vue'
import App from './App.vue'
import DEFINES from "./app/plugins/defines"

const app = createApp(App);

// Adding global variables
app.config.globalProperties.$defines = DEFINES;
app.mount('#app');
