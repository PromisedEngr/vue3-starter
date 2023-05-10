import { createApp } from 'vue';
import './i18n/config';

// styles
import './index.css';
// import './assets/styles/app.scss';


// create Vue App
import App from './App.vue'
const app = createApp(App)

import router from './router/router';
app.use(router);
import store from './store/store'
app.use(store)
import api from './api'
app.provide('$api', api);
// window.api = api


// import Button from '@/components/Button.vue';
// import Input from '@/components/Input.vue';
// import Header from '@/components/Header.vue';
// import Footer from '@/components/Footer.vue';
// app.component('Button', Button);
import Loading from '@/components/Loading.vue';
app.component('Loading', Loading);
// app.component('Input', Input);
// app.component('Header', Header);
// app.component('Footer', Footer);

router.isReady().then(() => app.mount('#app'));