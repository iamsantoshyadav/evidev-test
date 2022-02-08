import { createApp } from 'vue';
import App from './App.vue';
import {registerComponents} from "@/app/shared/components";
import DEFINES from "./app/plugins/defines";

const app = createApp(App);

registerComponents(app);
// Adding global variables
app.config.globalProperties.$defines = DEFINES;
app.mount('#app');
