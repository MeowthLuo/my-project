


export default {
    path:"/home",
    //路由懒加载：const homeFn = () => import('views/home/index.vue')
    component:() => import('views/home/index.vue'),
    name:"home"

}