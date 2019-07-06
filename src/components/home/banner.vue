<template>
  <div class="swiper-container" ref="banner">
      <slot name="banner" :banner="bannerurl"></slot>
       <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import "css/swiper.min.css"
import Swiper from "swiper"
export default {
    name:"banner",
    data(){
        return{
            bannerurl:[
                "http://shihuo.hupucdn.com/appHome/201901/0909/246bc13aad8b60058a81d242512e983f.png?imageView2/2/w/750/h/380/interlace/1",
                "http://shihuo.hupucdn.com/appHome/201901/0720/18cffc61c52a5ce61173479619bbaa6e.png?imageView2/2/w/750/h/380/interlace/1",
                "http://shihuo.hupucdn.com/appHome/201901/1010/5480e24dc886bde3fd4c599d22330d65.png?imageView2/2/w/750/h/380/interlace/1",
                "http://shihuo.hupucdn.com/appHome/201901/0500/d63108ffbf581d59f8d3552e346b8258.jpg?imageView2/2/w/750/h/380/interlace/1",
                "http://shihuo.hupucdn.com/appHome/201901/0810/e3e9e3e19c8ac46b699f554b3aca7538.jpg?imageView2/2/w/750/h/380/interlace/1"
            ]
        }
    },
     mounted() {
        new Swiper(this.$refs.banner,{
            autoplay: {
                disableOnInteraction: false,
            },
            loop:true,
            pagination: {
                el: '.swiper-pagination',
                bulletActiveClass: 'bannerList',
            },
        })
    }
    
}
</script>




<style>
     .swiper-container{
        width: 100%;
        height: 3.8rem;
    }
    .swiper-slide{
        width: 100%;
        height: 100%;
    }

    .swiper-slide>img{
        width: 100%;
        height: 100%;
    }
    .swiper-pagination-bullet{
        width: .18rem;
        height: .18rem;
    }
    .bannerList{
        background: #ff6600;
        opacity: 1;
        width: .2rem;
        height: .2rem;
    }
</style>