import { createRouter, createWebHistory } from 'vue-router'

import Trendle from '@/views/Trendle.vue'

const routes = [
    {
        path: '/trendle',
        name: "trendle",
        component: Trendle,
        children: [
            {
                path: '',
                name: "trendle.home",
                component: ()=>import('@/views/trendle/HomeView.vue'),
                meta: {
                    enterClass: "animate__animated animate__fadeInUp animate__delay-1s",
                    leaveClass: "animate__animated animate__fadeOutLeft"
                }
            },
            {
                path: 'play',
                name: "trendle.play",
                component: ()=>import('@/views/trendle/PlayView.vue'),
                meta: {
                    enterClass: "animate__animated animate__fadeInRight",
                    leaveClass: "animate__animated animate__fadeOutLeft"
                }
            },
            {
                path: 'leaderboard',
                name: "trendle.leaderboard",
                component: ()=>import('@/views/trendle/LeaderboardView.vue'),
                meta: {
                    enterClass: "animate__animated animate__fadeInUp animate__delay-1s",
                    leaveClass: "animate__animated animate__fadeOutLeft"
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;