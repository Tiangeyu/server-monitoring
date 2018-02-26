import vueRouter from 'vue-router';
import Vue from 'vue';

const Index = resolve => require(['../views/index'], resolve)
const Login = resolve => require(['../views/login'], resolve)



Vue.use(vueRouter);
const router =  new vueRouter({
    routes:[
        {
            path: '/index',
            name: 'Index',
            component: Index
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/',
            redirect: "/login"
        }
    ]
})

router.beforeEach((to, from, next)=>{
    const jurisdiction = 'Index'
    if(jurisdiction.indexOf(to.name) >= 0){
        if(!window.sessionStorage.getItem("dataSign") || window.sessionStorage.getItem("dataSign") == 0){
            router.push({name: 'login'})
            return;
        }
    }   
    next(); 
})

export default router;