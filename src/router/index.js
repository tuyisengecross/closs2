
import aboutUs from "@/views/aboutUs.vue";
import HomePage from "@/views/HomePage.vue";
import profilePage from "@/views/profilePage.vue"
import { createRouter, createWebHistory } from "vue-router";
const routes = [
    {
        path:"/",
        name:"about",
        component:aboutUs
    },
   {
    path:"/home",
    name:"home",
    component:HomePage
   },
   {
    path:"/profile",
    name:"profile",
    component: profilePage
   } 
]
const router =createRouter(
    {
        history: createWebHistory(),
        routes
    }
    )
    export default router