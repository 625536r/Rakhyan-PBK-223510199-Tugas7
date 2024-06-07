
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/css";

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.mount('#app')
createApp(App).use(createVuestic()).mount("#app");

