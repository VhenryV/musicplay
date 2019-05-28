<template>
    <div class="swiper">
            <swiper :options="swiperOption">
                <swiper-slide v-for="(item, index) in swiperlist" :key="item.id">
                    <img :src="item.picUrl">
                </swiper-slide>
            </swiper>
            <!--以下看需要添加-->
            <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            swiperOption: {//swiper3
                autoplay: 3000,
                speed: 100,
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    props: {
        swiperlist: Array
    }
}
</script>

<style scoped>
  .swiper img{
      height: 150px;
      width: 100%;
  } 
  .swiper-pagination{
    position: relative;
    top:-27px;
    z-index: 10;
  }
</style>