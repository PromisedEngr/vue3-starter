import { createRouter, createWebHistory } from 'vue-router';

const constantRoutes = [
    {
        path: '/',
        component: () => import('@/views/Home.vue'),
        hidden: true,
    },

]
const history = createWebHistory('/')
const router = createRouter({
    history: history,
    routes: constantRoutes,
})
export default router