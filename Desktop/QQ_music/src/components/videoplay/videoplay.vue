<template>
    <div class="videoplay">
        <div class="video-cotainer">
            <div class="video-top">
                <div class="video-author-img">
                    <img src="https://y.gtimg.cn/music/common//upload/t_playsong_ad/1207759.png?max_age=2592000" alt="">
                </div>
                <div class="video-author">
                    <span>{{clickMusicData.singer[0].name}}</span>
                    <span>更多好音乐</span>
                </div>
                <div class="video-more-btn">
                    <span>立即收听</span>
                </div>
            </div>
            <div class="video-middle">
                <div class="middle-img" :class='[showplaybtn==true?"Rotation":""]'>
                    <img src="https://p.qpic.cn/music_cover/ibPzAkkGP12P39PZOicvJrbYn7khk3rhKicBCdk38O5jLem0icntCxphbQ/300" alt="">
                    <div class="header-title">
                        <h3>{{clickMusicData.title}}</h3>
                        <h4>{{clickMusicData.singer[0].name}}</h4>
                    </div>
                </div>
            </div>
            <div class="vide0-footer">
                <div class="play-btn-container">
                        <video ref="videoPlayer"  :options="playerOptions" :src="musicUrl" class="video-container"  
                        loop="loop"
                        controls="controls" controlsList="nodownload" @play="onPlayerPlay($event)"
                        @pause="onPlayerPause($event)"
                        @ended="onPlayerEnded($event)"></video>
                    <!-- <span class="play-btn" @click="clickBtn(false)" v-if="showplaybtn">
                            <svg id="icon_play_s" viewBox="0 0 32 32" width="100%" height="100%">
                                    <title>播放</title>
                                    <path d="M11.909 24.758l10.941-7.94-10.941-8.709v16.65zM9.727 5.091c0-0.164 0.056-0.324 0.159-0.453 0.25-0.314 0.708-0.367 1.022-0.116l14.799 11.78 0.136 0.142c0.236 0.325 0.164 0.78-0.161 1.016l-14.799 10.74c-0.124 0.090-0.273 0.139-0.427 0.139-0.401 0-0.727-0.326-0.727-0.727v-22.52z"></path>
                                </svg>
                    </span>
                    <span class="pause-btn" @click="clickBtn(true)" v-if="!showplaybtn">
                        <svg id="icon_pause_s" viewBox="0 0 32 32" width="100%" height="100%">
                                <title>暂停</title>
                                <path d="M10.182 5.091h0.727c0.401 0 0.727 0.326 0.727 0.727v20.364c0 0.401-0.326 0.727-0.727 0.727h-0.727c-0.401 0-0.727-0.326-0.727-0.727v-20.364c0-0.401 0.326-0.727 0.727-0.727zM21.091 5.091h0.727c0.401 0 0.727 0.326 0.727 0.727v20.364c0 0.401-0.326 0.727-0.727 0.727h-0.727c-0.401 0-0.727-0.326-0.727-0.727v-20.364c0-0.401 0.326-0.727 0.727-0.727z"></path>
                        </svg>
                    </span>
                    <span class="like-btn">
                        <svg id="icon_like" viewBox="0 0 32 32" width="100%" height="100%">
                                <title>喜欢</title>
                                <path d="M15.847 24.347l0.172-0.119 1.974-1.555c0.851-0.676 1.569-1.266 2.252-1.855 1.9-1.641 3.319-3.111 4.201-4.428 0.505-0.753 0.799-1.409 0.889-1.936 0.502-2.932-0.616-4.739-2.639-5.298-1.953-0.54-4.038 0.306-4.897 2.112-0.784 1.649-3.124 1.663-3.929 0.025-0.914-1.862-2.848-2.612-4.685-2.018-1.914 0.619-3.001 2.451-2.533 5.179 0.12 0.698 0.668 1.703 1.617 2.889 0.859 1.073 1.996 2.239 3.367 3.484 1.239 1.124 2.169 1.895 4.131 3.467l0.078 0.053zM15.831 10.332c0.755-1.121 1.228-1.758 1.418-1.911 3.861-3.477 11.553-1.277 10.239 6.402-0.688 4.022-7.079 8.704-10.11 11.113-0.621 0.476-1.611 1.142-1.611 1.142s-1.133-0.954-1.247-0.99c-2.887-2.311-9.359-7.438-10.016-11.265-1.236-7.207 6.048-9.896 9.904-6.404 0.194 0.219 0.669 0.857 1.424 1.913z"></path>
                            </svg>
                    </span> -->
                </div>
                <div class="downloadBtn">
                    <span>免费下载歌曲</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    mapState
  } from 'vuex'
export default {
    name: 'videoplay',
    data() {
        return {
            showplaybtn:false,
            playerOptions: {
                height: '360',
                autoplay: true,
                muted: true,
                language: 'en',
                playbackRates: [0.7, 1.0, 1.5, 2.0],
                sources: [{
                    type: "mp4"
                }],
                poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
            }
        }
    },
    computed: {
        ...mapState(['musicUrl']),
        ...mapState(['clickMusicData']),
        player() {
            return this.$refs.videoPlayer.player
       }
    },
    methods: {
        // clickBtn(flag){
        //     this.showplaybtn =flag;
        //     if(flag==false){
        //         this.$refs.testg.play();
        //     }else{
        //         this.$refs.testg.pause();
        //     }
        // }
        onPlayerPlay (player){
            this.showplaybtn =true
        },
        onPlayerPause (player){
            this.showplaybtn =false
        },
        onPlayerEnded (player){
            this.showplaybtn =false
        }
    }

}
</script>

<style scoped>
.video-cotainer{
    min-height: 500px;
}
.div-container{
    width: 200px;
    height: 50px;
    background-color: red;
}
.video-top{
    display:flex;
    width: 100%;
    height: 70px;
    margin-bottom: 70px;
    background: #ffffff;
    line-height: 70px;
    padding-top: 13px;
    position: relative;
    padding-left: 10px;
}
.video-author-img{
    width: 60px;
    height: 60px;
}
.video-author-img img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
}
.video-author{
    display: flex;
    flex-direction: column;
    line-height: 23px;
    margin-top: 9px;
    margin-left: 10px;
    color: gray;
    font-size: 14px;
}
.video-more-btn{
    position: absolute;
    top:6px;
    right: 17px;
}
.video-more-btn span{
    border: 1px solid #dddddd;
    padding: 5px 14px;
    border-radius: 20px;
    font-size: 14px;
}
.video-middle{
    /* background-image: url('https://y.gtimg.cn/music/photo_new/T002R300x300M000003IcCuA3kLryC.jpg?max_age=2592000'); */
    min-height: 200px;
    width: 100%;
    -webkit-animation: ani_fade_out 250ms ease-in-out forwards;
    text-align: center;
    color: #000;
    font-weight: normal;  
    position: relative; 
    margin-bottom: 70px;
}
.middle-img{
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -100px;
    margin-left: -100px;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: #31c27c
}
.middle-img img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
}
.header-title{
    position: absolute;
    top:23%;
    left: 0%;
    width: 200px;
    height: 50px;
    color: #ffffff

}
.video-middle h3{
    font-weight: normal; 
}
.downloadBtn{
    width: 250px;
    height: 50px;
    text-align: center;
    color: #ffffff;
    line-height: 50px;
    border-radius: 33px;
    margin: 0 auto;
    margin-top: 10px;
    background-color: #31c27c
}
.play-btn-container{
    line-height: 50px;
    margin: 0 auto;
}
.play-btn,.like-btn,.pause-btn{
    position: relative;
    display: inline-block;
    width: 38px;
    height: 38px;
    border: 1px solid rgba(0,0,0,.2);
    border-radius: 50%;
}
#icon_play_s,#icon_like,#icon_pause_s{
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -11px;
    margin-left: -11px;
    display: block;
    width:22px;
    height: 22px;
    fill: #000;
}
.play-btn,.pause-btn{
    margin-left: 30px;
}
.like-btn{
    margin-left: 50px;
}
.video-container{
    width: 100%;
    height: 80px;
}
@-webkit-keyframes rotation{
from {-webkit-transform: rotate(0deg);}
to {-webkit-transform: rotate(360deg);}
}

.Rotation{
-webkit-transform: rotate(360deg);
animation: rotation 5s linear infinite;
-moz-animation: rotation 5s linear infinite;
-webkit-animation: rotation 5s linear infinite;
-o-animation: rotation 5s linear infinite;
}
</style>