<template>
    
    <div id="tabBar">
    <ul>
        <router-link v-for="(item,index) in tabBars" :key="index" :to="item.path" tag="li">
            <div>
                <img :src="item.url"/>
            </div>
            <span>{{item.title}}</span>
        </router-link>
    </ul>
</div>
</template>

<script>
export default {
    name:"tabBar",
    data(){
        return{
            tabBars:[
                 {
                    url:"http://sh1.hoopchina.com.cn/images/trademobile/common/index-on.png?201903111600",
                    title:"首页",
                    path:"/home"
                },
                {
                    url:"http://sh1.hoopchina.com.cn/images/trademobile/common/youhui.png?201903111600",
                    title:"优惠",
                    path:"/"
                },
                {
                    url:"http://sh1.hoopchina.com.cn/images/trademobile/common/find.png?201903111600",
                    title:"发现",
                    path:"/discover"
                },
                {
                    url:"http://sh1.hoopchina.com.cn/images/trademobile/common/zhuangbei-on.png?201903111600",
                    title:"装备",
                    path:"/equip"
                },
                {
                    url:"http://sh1.hoopchina.com.cn/images/trademobile/common/more.png?201903111600",
                    title:"更多",
                    path:"/more"
                }
            ]
        }
    }
}
</script>
<style scoped>
*{
   
}
     #tabBar{
        width: 100%;
        height: .8rem;
        position: fixed;
        left: 0;
        bottom:0;
        border-top: 1px solid #ccc;
        background: #fff
    }

     #tabBar>ul{
        width: 100%;
        height: 100%;
        display: flex;
        /* justify-content: space-between; */
    } 
    #tabBar>ul>li{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        font-size:.2rem;
    }
     #tabBar>ul>li>div{
         width: .5rem;
         height: .5rem;
     }
      #tabBar>ul>li>div>img{
          width: 100%;
          height: 100%;
          display: block
      }
    #tabBar>ul>.router-link-active{
        color:#c33;
    } 
</style>


