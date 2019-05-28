<template>
    <keep-alive>
        <div class="rankdetail-contanier">
                <div class="detail-header">
                    <div class="detail-header-container">
                        <img class="topicon" src="https://y.gtimg.cn/music/common//upload/t_playsong_ad/1207759.png?max_age=2592000" alt="">
                        <span class="toptitle">更多QQ音乐榜</span>
                        <span class="topbtn">戳我查看</span>
                    </div>
                </div>
                <div class="detail-topcontanier">
                    <div class="detail-topcontanier-content">
                            <img class="mvpic" :src="rankDetailArry.frontPicUrl" alt="">
                            <span class="mvtitle">{{rankDetailArry.title}}</span>
                            <span class="mvtop">{{rankDetailArry.titleDetail}}</span>
                            <span class="refreshdate">更新时间：{{rankDetailArry.updateTime}}</span>
                            <span class="videobtn">
                                <div class="svgicon">
                                    <svg id="icon_arr" viewBox="0 0 32 32" width="100%" height="100%">
                                            <title>圆角三角形</title>
                                            <path d="M29.4,17.6c-0.3,0.4-0.6,0.8-1.1,1L6.7,31.6c-1.4,0.9-3.4,0.4-4.2-1C2.2,30,2,29.5,2,28.9V3.1C2,1.4,3.4,0,5.1,0
                                    c0.6,0,1.2,0.2,1.7,0.4l21.6,12.9C29.8,14.2,30.3,16.1,29.4,17.6z"></path>
                                    </svg>
                                </div>
                            </span>
                    </div>
                </div>
                <div class="detail-content">
                    <div class="detail-content-container">
                        <div class="content-title">排行榜 共{{rankDetailArry.song.length}}首</div>
                        <div>
                            <ul>
                                <li v-for="(item, index) in rankDetailArry.song" :key="item.songId" class="everycell" @click="playvideo(item)">
                                    <ul>
                                        <li class="song-first">
                                            <span class="song-munber">{{index+1}}</span>
                                            <span class="songname">{{item.title}}</span>
                                        </li>
                                        <li class="song-second">
                                                <span v-if="item.rankType===4" class="song_list__index_change">
                                                    <span class="totle-icon">
                                                            <svg id="icon_rank_new" viewBox="0 0 32 10" width="100%" height="100%">
                                                                    <title>NEW</title>
                                                                    <text transform="matrix(1 0 0 1 -0.3998 10)" fill="#F56273" font-family="'PingFang-SC-Medium'" font-size="14">NEW</text>
                                                            </svg>  
                                                    </span> 
                                                    {{item.rankValue}}
                                            </span>
                                            <span v-if="item.rankType===3" class="song_list__index_change">
                                                <span class="totle-icon">
                                                        <svg id="icon_rank_invariant" viewBox="0 0 32 32" width="100%" height="100%">
                                                                <title>持平</title>
                                                                <path fill="#979797" d="M2.7,13.8h26.6c1.2,0,2.2,1,2.2,2.2l0,0c0,1.2-1,2.2-2.2,2.2H2.7c-1.2,0-2.2-1-2.2-2.2l0,0
                                                        C0.5,14.8,1.5,13.8,2.7,13.8z M29.3,18.7H2.7C1.2,18.7,0,17.5,0,16s1.2-2.7,2.7-2.7h26.6c1.5,0,2.7,1.2,2.7,2.7S30.8,18.7,29.3,18.7
                                                        z M2.7,14.3C1.7,14.3,1,15,1,16c0,1,0.8,1.7,1.7,1.7h26.6c1,0,1.7-0.8,1.7-1.7c0-1-0.8-1.7-1.7-1.7H2.7z"></path>
                                                        </svg>
                                                </span> 
                                                {{item.rankValue}}
                                                </span>
                                            <span v-else-if="item.rankType===2" class="song_list__index_change">
                                                <span class="totle-icon">
                                                        <svg id="icon_rank_down" viewBox="0 0 32 32" width="100%" height="100%">
                                                                <title>下降</title>
                                                                <path fill="#979797" d="M11.9,17.6c-1.3-1.2-3.3-1-4.4,0.5c-1.1,1.5-0.9,3.7,0.4,4.9l8.8,8.2c1.1,1,2.7,1.1,3.9,0.1
                                                        l9.3-8.2c1.4-1.2,1.6-3.4,0.5-4.9c-1.1-1.5-3-1.8-4.4-0.6L18.7,24L11.9,17.6z M15.9,24c-0.2,1.7,1.1,3.2,2.7,3.3s3.2-1.1,3.3-2.7
                                                        C23.5,8.8,17.3,0,4,0c-1.7,0-3,1.4-3,3s1.4,3,3,3C13.3,6.1,17.1,11.5,15.9,24z"></path>
                                                        </svg>
                                                </span>
                                                {{item.rankValue}}
                                                </span>
                                            <span v-else-if="item.rankType===1" class="song_list__index_change">
                                                <span class="totle-icon">
                                                        <svg id="icon_rank_up" viewBox="0 0 32 32" width="100%" height="100%">
                                                                <title>上升</title>
                                                                <path fill="#979797" d="M11.9,14.4c-1.3,1.2-3.3,1-4.4-0.5S6.6,10.2,7.9,9l8.8-8.2c1.1-1,2.7-1.1,3.9-0.1l9.3,8.2
                                                        c1.4,1.2,1.6,3.4,0.5,4.9s-3,1.8-4.4,0.6L18.7,8L11.9,14.4z M15.9,8c-0.2-1.7,1.1-3.2,2.7-3.3c1.7-0.2,3.2,1.1,3.3,2.7
                                                        C23.5,23.2,17.3,32,4,32c-1.7,0-3-1.4-3-3c0-1.7,1.4-3,3-3C13.3,25.9,17.1,20.5,15.9,8z"></path>
                                                            </svg>
                                                </span>
                                                {{item.rankValue}}
                                            </span>
                                            <span class="author"> {{item.singerName}}</span>
                                            <span class="downloadicon">
                                                <div class="download-container">
                                                        <svg id="icon_download" viewBox="0 0 32 32" width="100%" height="100%">
                                                                <title>下载</title>
                                                                <path d="M14.7,1.6c0-0.9,0.7-1.6,1.6-1.6c0.9,0,1.6,0.7,1.6,1.6v19.2c0,0.9-0.7,1.6-1.6,1.6c-0.9,0-1.6-0.7-1.6-1.6V1.6
                                                        z M16.3,20.7l9.6-9.8c0.6-0.6,1.6-0.4,2.2,0.3c0.6,0.6,0.6,1.6,0,2.3L17.9,24c-0.6,0.6-2.4,0.6-3,0L4,13.4c-0.6-0.6-0.6-1.6,0-2.3
                                                        c0.6-0.6,1.6-0.6,2.3,0L16.3,20.7z M5.3,32c-0.9,0-1.6-0.7-1.6-1.6c0-0.9,0.7-1.6,1.6-1.6h21.3c0.9,0,1.6,0.7,1.6,1.6
                                                        c0,0.9-0.7,1.6-1.6,1.6H5.3z"></path>
                                                            </svg>
                                                </div>
                                                </span>
                                        </li>
                                    </ul>
                                </li>                  
                            </ul>
                        </div>
                    </div>
                </div>
               <div class="detail-footer">
                    <div class="detail-footer-container">
                        <div class="detail-footer-container-title">
                            <h4>榜单简介</h4>
                        </div>
                        <div class="top-content-detail">
                                <p id="js_desc_component_text" v-html="rankDetailArry.intro"></p>
                        </div>
                    </div>
                </div>
            </div>
    </keep-alive>
</template>
<script>
import {
    mapState
  } from 'vuex'
import {getMusic,getMusicUrl,searchResult} from '../../api/index'
import {ERR_OK} from '../../api/config'
export default {
    name:'RankDetail',
    data() {
        return {
            rankdata:[]
        }
    },
    computed: {
      ...mapState(['rankDetailArry'])
    },
    methods: {
        playvideo(item){
            var searchkey =item.title
            searchResult(searchkey).then((res)=>{
                if(res.code===ERR_OK){
                   var musicData = res.data.song.list[0];
                    console.log(res.data.song.list[0]);
                    this.$store.dispatch("setClickMusicData", res.data.song.list[0]);
                    if (musicData.mid) {
                        getMusic(musicData.mid).then((res) => {
                            const svley = res.data.items;
                            const songVkey = svley[0].vkey;
                            getMusicUrl(svley[0].songmid).then((res)=>{
                                if(res.code===ERR_OK){
                                let url=res.req_0.data.sip[0]+res.req_0.data.midurlinfo[0].purl;
                                    this.$store.dispatch("setMusicUrl", url);
                                }
                            })
                        })
                    }
                }else{
                    console.log("tttttttttt")
                }
            })
            this.$router.push('/videoplay')
        }
    }
}
</script>

<style scoped>
.detail-header{
    height: 45px;
    line-height: 45px;
    margin-top: 10px;
    padding: 10px;
}
.detail-header-container{
    display: flex;
    align-items: center
}
.topicon{
    width: 45px;
    height: 45px;
}
.toptitle{
    flex: 2;
    margin-left: 13px;
}
.topbtn{
    flex: 1;
    display: inline-block;
    min-width: 56px;
    height: 23px;
    line-height: 23px;
    color: #666666;
    border: 1px solid #b3b3b3;
    text-align: center;
    border-radius: 23px;
    font-size: 14px;
}
.detail-topcontanier-content{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.everycell{
    margin-bottom: 20px;
}
.mvpic{
    width: 190px;
    height: 190px;
    border-radius: 18px;
}
.mvtitle{
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.mvtop{
    font-size: 16px;
    margin-bottom: 20px;
}
.refreshdate{
    font-size: 14px;
    color: grey;
}
.videobtn{
    position: relative;
    width: 190px;
    height: 40px;
    background-color: #22d59c;
    border-radius: 40px;
    margin-top: 10px;
    box-shadow: 0 6px 32px rgba(24,213,156,.5);
    fill: #ffffff;
}
.detail-content{
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 20px;
}
.svgicon{
    width: 20px;
    height: 20px;
    position: absolute;
    top:50%;
    left: 50%;
    margin-top: -10px;
    margin-left: -10px;
}
.content-title{
    font-size: 12px;
    color: grey;
}
.songname{
    font-size: 14px;
    font-weight: 400;
    color: #000;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.author{
    font-size: 12px;
    color: rgba(0,0,0,.4);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.song-munber{
    color: #f56273;
    font-size: 14px;
}
.song_list__index_change{
    font-size: 7px;
    color: grey;
    display: inline-block;
}
.song-first{
    margin-top: 10px;
}
.song-second{
    position: relative;
}
.downloadicon{
    display: inline-block;
    width: 40px;
    height:40px;
    fill: #b3b3b3;
    position: absolute;
    top:0px;
    right: -12px;
}
.download-container{
    width: 14px;
    height: 14px;
}
.detail-footer{
    padding-left: 10px;
    padding-right: 21px;
    margin-top: 50px;
    margin-bottom: 30px;
}
.detail-footer-container-title h4{
    font-weight: normal;
    margin-bottom: 5px;
}
#js_desc_component_text{
    font-size: 13px;
    color: rgba(0,0,0,.6);
    letter-spacing: 1px;
}
.totle-icon{
    display: inline-block;
    width: 6px;
    height: 6px;
}
</style>