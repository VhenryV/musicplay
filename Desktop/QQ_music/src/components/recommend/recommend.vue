<template>
    <div class="recommend">
        <swiper :swiperlist="recommends"></swiper>
        <div class="bottom-container">
            <div class="titile">电台</div>
            <video-shop :videolist="videolist"></video-shop>
        </div>
        <div class="copyright-container">
            <div class="swich-title">查看电脑版网页</div>
            <img class="copyright-icon" src="../../common/image/logo_ch.svg" alt="">
            <div class="footer-contanier">
                <div class="copyright">Copyright © 1998 - 2019  Tencent. All Rights Reserved.</div>
                <div class="copyright">联系电话：0755-86013388 QQ群：55209235</div>
            </div>
        </div>
        <div class="mask">
            <div class="mask-btn">安装QQ音乐 发现更多精彩</div>
        </div>
    </div>
</template>

<script>
import {getRecommend} from '../../api/index';
import {ERR_OK} from '../../api/config'  
import Swiper from '../swiper/swiper'
import VideoShop  from '../video/video'
export default {
    name:'Recommend',
    data() {
        return {
            showvideoBtn: false,
            recommends : [],
            videolist:[]
        }
    },
    components: {
        Swiper,
        VideoShop
    },
    created() {
     this._getRecommend();
    },
    methods: {
        _getRecommend() {               
            getRecommend().then((res)=>{
                if(res.code === ERR_OK){
                    this.recommends = res.data.slider;
                    this.videolist = res.data.radioList;
                }
            })
        }
    }
}
</script>
<style scoped>
.titile{
    margin-left: 10px;
    margin-bottom: 10px;
    color: rgba(0,0,0,.6);
}
.copyright-container{
    text-align: center;
}
.swich-title{
    font-size: 14px;
    height: 14px;
    line-height: 14px;
    color: #000;
    margin-bottom: 20px;
    margin-top: 27px;
}
.copyright{
    font-size: 10px;
    text-align: center;
    color: rgba(0,0,0,.6);
}
.copyright-icon{
    width: 82px;
    height:24px;
    margin-bottom: 10px;
}
.mask{
    position: fixed;
    bottom:0px;
    height: 70px;
    background-color: #ffffff;
    text-align: center;
    width: 100%;
    opacity: 0.9;
}
.footer-contanier{
    margin-bottom: 75px;
}
.mask-btn{
    width: 200px;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    color: #ffffff;
    background-color: #30c27c;
    border-radius: 22px;
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -100px;
}
</style>