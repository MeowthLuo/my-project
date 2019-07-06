<template>
    <ul>
        <li class="zone0">
            <a href="#">
                <div class="tit">
                    <h2>篮球</h2>
                    <P class="subtit">纯白系列秒杀</P>
                </div>
                <div class="pic">
                    <img src="http://shihuo.hupucdn.com/def/20181105/2355ddafee2bdc0963e346192576c3631541383761.jpg?imageView2/0/w/160/h/160/interlace/1"/>
                </div>
            </a>
        </li>
        <li class="zone0">
            <a href="#">
                <div class="tit">
                    <h2>跑步</h2>
                    <P class="subtit">女王节秒杀</P>
                </div>
                <div class="pic">
                    <img src="http://shihuo.hupucdn.com/def/20180801/a580ec1affbbf4a344974bc92969c7671533133549.jpg?imageView2/0/w/160/h/160/interlace/1"/>
                </div>
            </a>
        </li>
        <li class="zone0">
            <a href="#">
                <div class="tit">
                    <h2>健身</h2>
                    <P class="subtit">步瑞特装备秒杀</P>
                </div>
                <div class="pic">
                    <img src="http://shihuo.hupucdn.com/def/20170915/0446a5d97bf800d5322341aab554035d1505460763.jpg?imageView2/0/w/160/h/160/interlace/1"/>
                </div>
            </a>
        </li>
        <li class="zone0">
            <a href="#">
                <div class="tit">
                    <h2>数码</h2>
                    <P class="subtit">满足我你所有想象</P>
                </div>
                <div class="pic">
                    <img src="http://shihuo.hupucdn.com/def/20180108/d46c35eb43ed513783e8db72e97e06a71515391268.jpg?imageView2/0/w/160/h/160/interlace/1"/>
                </div>
            </a>
        </li>
         <li class="zone0">
            <a href="#">
                <div class="tit">
                    <h2>足球</h2>
                    <P class="subtit">其实在吹总裁</P>
                </div>
                <div class="pic">
                    <img src="http://shihuo.hupucdn.com/def/20170913/5dc29f834528ddfaaf2c6e85769aa5451505294878.jpg?imageView2/0/w/160/h/160/interlace/1"/>
                </div>
            </a>
        </li>
         <li class="zone0">
            <a href="#">
                <div class="tit">
                    <h2>潮流</h2>
                    <P class="subtit">78元短袖秒杀</P>
                </div>
                <div class="pic">
                    <img src="http://shihuoproxy.hupucdn.com/aHR0cDovL2ltZy5hbGljZG4uY29tL2ltZ2V4dHJhL2kzL1RCMVVoVUtSVlhYWFhhTVhwWFhYWFhYWFhYWF8hITItaXRlbV9waWMucG5n?imageView2/0/w/160/h/160/interlace/1"/>
                </div>
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
        width: 100%;
        height: 3.79rem;
        display: flex;
        flex-flow: wrap;
        align-content: flex-start;
        justify-content:space-between;
        margin-top: .26667rem;
        border-bottom: 1px solid #e6e6e6;
        
    }
    li{ 
        width: 50%;
        height: 1.27rem;
        border-bottom: 1px solid #f0f3f5;
        border-left: 1px solid #f0f3f5;
        padding: .06667rem .4rem;
    }
    a{
        display: block;
        overflow: hidden;
        width: 3.14rem;
        height: 1.15rem;
    }
    .tit{
        width: 1.9rem;
        height: .8rem;
        float: left;
        margin-top: .2rem;
    }
    .tit>h2{
        font-size: .31rem;
        color: #333;
        font-weight: 600;
        margin-bottom: .1rem
        
        
    }
    .tit>p{
        font-size: .27rem;
        color: #666;
        width: 2.56rem;
        white-space: nowrap;
        overflow: hidden;
    }
    .pic{
        float: right;
    }
    .pic>img{
        width: 1rem;
        height: 1rem;
    }
</style>
