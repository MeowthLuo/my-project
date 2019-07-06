


export default {
    path:"/discover",
    //路由懒加载：const homeFn = () => import('views/discover/index.vue')
    component:() => import('views/discover/index.vue'),
    name:"discover"

}