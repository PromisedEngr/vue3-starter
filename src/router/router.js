import { createRouter, createWebHistory } from 'vue-router';

const constantRoutes = [
    {
        path: '/',
        component: () => import('@/views/Home.vue'),
        hidden: true,
    },
    {
        path: '/in-play',
        component: () => import('@/views/InPlay.vue'),
        hidden: true,
    },
    {
        path: '/outright',
        component: () => import('@/views/OutRights.vue'),
        hidden: true,
    },
    {
        path: '/result',
        component: () => import('@/views/Results.vue'),
        hidden: true,
    },
]
const history = createWebHistory('/')
const router = createRouter({
    history: history,
    routes: constantRoutes,
})
export default router