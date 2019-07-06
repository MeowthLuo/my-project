<template>
    <div class="listview">
        <div class="list-view-top">
            <div class="list-menu">
                <ul class="listmenu">
                    <li v-for="(item,index) in listview" :key="index" @click="handToggle(index)" :class="active==index?'show':''">
                        {{item}}
                    </li>
                </ul>
            </div>
            <div class="list-submenu">
                <ul class="listsubmenu">
                    <li v-for="(item,index) in submenu" :key="index" @click="handTo(index)" :class="act==index?'bdg':''">
                        {{item}}
                    </li>
                </ul>
            </div>
             </div>
            <div  class="list-view">
                <ul class="shihuo-news">
                    <li>
                        <a class="link">
                            <div class="imgs">
                                <img src="http://shihuo.hupucdn.com/def/20181107/231ebb5cffc258f5e1933725f45316241541560448.jpg?imageView2/0/w/600/h/600/interlace/1"/>
                            </div>
                            <div class="details">
                                <h2>Air Jordan 3</h2>
                                <p class="details-list">
                                    <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" class="img01"/>
                                    OG配色之王，情怀满分
                                    <img src="//sh1.hoopchina.com.cn/images/trademobile/quote_right.png" class="img02"/>
                                </p>
                                <div class="money">
                                    <p class="from">淘宝</p>
                                    <span class="price">$433</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a class="link">
                            <div class="imgs">
                                <img src="http://shihuo.hupucdn.com/def/20181107/231ebb5cffc258f5e1933725f45316241541560448.jpg?imageView2/0/w/600/h/600/interlace/1"/>
                            </div>
                            <div class="details">
                                <h2>Air Jordan 3</h2>
                                <p class="details-list">
                                    <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" class="img01"/>
                                    OG配色之王，情怀满分
                                    <img src="//sh1.hoopchina.com.cn/images/trademobile/quote_right.png" class="img02"/>
                                </p>
                                <div class="money">
                                    <p class="from">淘宝</p>
                                    <span class="price">$433</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a class="link">
                            <div class="imgs">
                                <img src="http://shihuo.hupucdn.com/def/20181107/231ebb5cffc258f5e1933725f45316241541560448.jpg?imageView2/0/w/600/h/600/interlace/1"/>
                            </div>
                            <div class="details">
                                <h2>Air Jordan 3</h2>
                                <p class="details-list">
                                    <img src="http://sh1.hoopchina.com.cn/images/trademobile/quote_left.png" class="img01"/>
                                    OG配色之王，情怀满分
                                    <img src="//sh1.hoopchina.com.cn/images/trademobile/quote_right.png" class="img02"/>
                                </p>
                                <div class="money">
                                    <p class="from">淘宝</p>
                                    <span class="price">$433</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            listview:[
                "篮球",
                "跑步",
                "健身",
                "潮流",
                "推荐"
            ],
            submenu:[
                "全部",
                "单品推荐",
                "原创精品",
                "用户晒物"
            ],
            active:0,
            act:0
        }
    },
    methods:{
        handToggle(index){
            this.active=index
        },
        handTo(index){
            this.act=index
        }
    }
}
</script>

<style  scoped>
    .listview{
        margin-top: .15rem;
        height: 100%;
    }
    .show{
        color: #FF4338;
    }
    .bdg{
        color: #FF4338;
    }
   .listmenu{
        display: flex;
        justify-content: space-around
    }
   .listmenu>li{
        height: .8rem;
        font-size: .35rem;
        font-weight: 700;
        line-height: .8rem
    }
    .listsubmenu{
        display: flex;
        justify-content: space-around
    }
    .listsubmenu>li{
        height: .8rem;
        font-size: .35rem;
        font-weight: 700;
        line-height: .8rem
    }
    .list-view{
        background: #fff;
        padding-top: .26667rem;
        padding-left: .26667rem;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .link{
        width: 100%;
        height: 2.23rem;
        padding: .26667rem;
        padding-left: 0;
        border-bottom: 1px solid #e6e6e6;
        display: flex
    }
    .shihuo-news>li{
        height: 2.66rem;
    }
    .imgs{
        width: 30%;
        float: left;
        position: relative;
    }
    .imgs>img{
        width: 100%;
        height: 100%;
    }
    .details{
        margin-left: .26667rem;
    }
    .details>h2{
        font-size: .35rem;
        color: #333;
        font-weight: 400;
        max-height: 1.12rem;
        overflow: hidden;
        word-break: break-all;
        line-height: .56rem;
    }
    .details-list{
        width: 100%;
        font-size: .3rem;
        color: #666;
        height: .5rem;

    }
    .img01{
        width: .24rem;
        display: inline-block;
        margin: 0 .13333rem 0 0;
    }
    .img02{
        width: .24rem;
        display: inline-block;
        margin: 0 .13333rem;
    }
    .money{
        font-size: .3rem;
        color: #a4a4a4;
        width: 100%;
        height: .41rem;
        margin-top: .12rem
    }
    .from{
        float: left;
        color: #999;
    }
    .price{
        color: #FF4338
    }
</style>
