<template>
<div id="header">
    <input type="text" class="search" placeholder="搜索商品、品牌">
    <a href="#" class="me"><img src="http://sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/me_0442d1d.png"/></a>
</div>
</template>

<script>
export default {
    name:"header"
}
</script>

<style>
    #header{
        width: 100%;
        overflow: hidden;
        position: absolute;
        max-width: 10rem;
        top: 0;
        z-index: 10;
        border: 0;
    }
    .search{
    width: 80%;
    float: left;
    border-radius: .10667rem;
    height: .62667rem;
    margin: .2rem .2rem;
    border: .01rem solid #ccc;
    padding-left: .6rem;
    font-size: .32rem;
    background: #fff url(//sh1.hoopchina.com.cn/fis_static/shihuomobile/static/homefis/widget/header/search_0b8e800.png) .13333rem center no-repeat;
    background-size: .34667rem;
    overflow: hidden;
    position: relative;
    }
    .me{
        display: block;
        float: right;
        width: 14%;
        padding: 0 .1rem;
        padding-top: .2rem;
        text-align: center;
    }
    .me>img{
            width: 70%;
    }
</style>
