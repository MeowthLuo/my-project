<template>
    <ul class="hot">
        <li>
            <a href="#" class="hotList">
                <h2>今日优惠</h2>
                <p class="hotContent">EQT 5折好价</p>
                <p class="hotImg">
                    <img src="http://shihuo.hupucdn.com/appHome/201807/1811/1d039f64648d5e33025c747ec6420060.jpg?imageView2/2/w/120/h/120/interlace/1"/>
                </p>
            </a>
        </li>
        <li>
            <a href="#" class="hotList">
                <h2>限时团购</h2>
                <p class="hotContent">春节不打烊</p>
                <p class="hotImg">
                    <img src="http://shihuo.hupucdn.com/appHome/201802/0716/5d0eea37252cd190ba0975b3e5e1f49e.png?imageView2/2/w/120/h/120/interlace/1"/>
                </p>
            </a>
        </li>
        <li>
            <a href="#" class="hotList">
                <h2>一键海淘</h2>
                <p class="hotContent">卡西欧黑金249元</p>
                <p class="hotImg">
                    <img src="http://shihuo.hupucdn.com/appHome/201807/1310/f975458f8da63b0769796aba49271e1c.jpg?imageView2/2/w/120/h/120/interlace/1"/>
                </p>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    ul{
        display: flex;
        justify-content:space-between;
        align-items: center;
        background: #f0f3f5;
        padding: .08rem
   
    }
    li{
        width: 32.5%;
        
    }
    .hotList{
        text-align: center;
        padding: .15rem 0;
        width: 100%;
        float: left;
        background: #fff;
    }
    .hotList>h2{
        font-size: .3rem;
        color: #333;
        font-weight: 400;
    }
    .hotContent{
        font-size: .23rem;
        color: #666;
        margin: .13333rem 0;
        margin-bottom: .26667rem;
        width: 100%;
    }
    .hotImg{
        display: flex;
        justify-content: center;
        align-items: center
    }
    .hotImg>img{
        width: 1rem
    }
</style>
