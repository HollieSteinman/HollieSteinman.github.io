import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=>import('@/views/HomeView.vue')
    },
    {
        path: '/projects/trendle',
        name: 'ProjectsTrendle',
        component: ()=>import('@/views/ProjectView.vue'),
        props: {project: 'trendle'}
    },
    {
        path: '/projects/ml',
        name: 'ProjectsML',
        component: ()=>import('@/views/ProjectView.vue'),
        props: {project: 'ml'}
    },
    {
        path: '/projects/butter',
        name: 'ProjectButter',
        component: ()=>import('@/views/ProjectView.vue'),
        props: {project: 'butter'}
    },
    {
        path: '/trendle',
        name: "trendle",
        component: ()=>import('@/views/TrendleView.vue'),
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
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
          return {
            el: to.hash,
            behavior: 'smooth',
          }
        }
        else if (savedPosition)
            return savedPosition
        else return { top: 0 }
      }
})

export default router;