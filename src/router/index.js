import Vue from "vue"
import Router from "vue-router";
Vue.use(Router)


import home from "./home/index.js"
import discover from "./discover/index.js"
import equip from "./equip/index.js"


export default new Router({
    routes:[
       home,
       equip,
       discover
    ]
    })