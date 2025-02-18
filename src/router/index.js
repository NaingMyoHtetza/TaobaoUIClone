import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
import Categories from "@/pages/Categories.vue"
import Details from "@/pages/Details.vue"

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/categories',
        name: 'categoreis',
        component: Categories
    },
    {
        path: '/details',
        name: 'details',
        component: Details
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router