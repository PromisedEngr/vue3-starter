import { createApp } from 'vue';
// create Vue App
import App from './App.vue'
const app = createApp(App)

import router from './router/router';
app.use(router);
import store from './store/store'
app.use(store)

router.isReady().then(() => app.mount('#app'));