<template>
    <div class="home">
        <Header></Header>
        <Banner>
            <template v-slot:banner="props">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="(item,index) in props.banner" :key="index">
                        <img :src="item">
                    </div>
                </div>
            </template>  
        </Banner>
        <Pic></Pic>
        <Hot></Hot>
        <activity></activity>
        <listView></listView>
    </div>
</template>


<script>
import Header from "./header.vue"
import Banner from "./banner.vue"
import Pic from "./pic_banner.vue"
import Hot from "./hot.vue"
import Activity from "./activity.vue"
import ListView from "./listView.vue"
export default {
    name:"home",
    components:{
        Header,
        Banner,
        Pic,
        Hot,
        Activity,
        ListView
    },
   
}
</script>


<style scoped>
    .home{
        height: 100%;
	    width: 100%;
	    overflow-y: auto;
    }
</style>
