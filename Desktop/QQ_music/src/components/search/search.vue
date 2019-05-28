<template>
    <div class="search">
       <div class="search-container">
           <div class="search-input-container">
               <input class="search-input" @click="clickInputTap"
                @keyup.enter="SearchKeyTap"
                @change="sessionTap"
               :style="TheStyle" type="text" placeholder="搜索歌曲、歌单、专辑" v-model="searchkey">
               <span class="search-icon"></span>
               <span class="delete-icon"></span>
               <span v-if="showCancletext||showresultpage" class="canclebtn" @click="cancelBtnclick">取消</span>
           </div>
           <div class="hot-search" v-if="showhotkey">
               <div class="searchHot-title">
                   <span>热门搜索</span>
               </div>
               <ul class="hot-search-container">
                   <li class="hot-search-item" v-for="(item, index) in searchHotList" :key="item.n">
                       <span class="hot-search-name">{{item.k}}</span>
                   </li>
               </ul>
           </div>
           <div class="search-result" v-if="showCancletext">
               <div>
                   <ul>
                       <li class="result-item" v-for="(item, index) in changeList" :key="index" @click="clickLocal(item)">
                           <span class="clock-icon"></span>
                           <span>{{item}}</span>
                           <span class="clearicon" @click="removeSingeItem(index)">X</span>
                        </li>
                   </ul>
               </div>
               <div class="clear-btn" @click="clearCashTap" v-if="searchList.length">清除搜索记录</div>
               <div class="clear-btn" v-else>没有搜索数据......</div>
           </div>
           <div class="search-result-list" v-show="showresultpage">
                <div>
                    <ul>
                        <li class="result-item music-item" v-for="(item, index) in searchresultlist" :key="item.id" @click="playvideoTp(item)">
                            <div class="music-icon"></div>
                            <div class="music-text">
                                <span class="music-name">{{item.title}}</span>
                                <span class="music-author">{{item.singer[0].name}}</span>
                            </div>
                            <video ref="videopic" :src="musicUrl"></video>
                         </li>
                    </ul>
                </div>
            </div>
       </div>
    </div>
</template>

<script>
import {getSearchHotData,searchResult,getMusic,getMusicUrl} from '../../api/index'
import {ERR_OK} from '../../api/config'
export default {
    name:'Search',
    data() {
        return {
            showhotkey:true,
            showCancletext: false,
            showresultpage:false,
            TheStyle:{
              width:'85%',
            },
            searchHotList:[],
            searchkey:'',
            searchList:[],
            searchresultlist:[],
            musicUrl:''
        }
    },
    computed: {
        changeList: function(){
            return this.searchList
        }
    },
    created() {
        this._getSearchHotData();
    },
    methods: {
        _getSearchHotData (){
            getSearchHotData().then((res)=>{
                if(res.code===ERR_OK){
                    this.searchHotList = res.data.hotkey.slice(0,8);
                }
            })
        },
        removeSingeItem(index){
            console.log(index)
        },
        clickInputTap (){
            if(this.searchkey){
                this.showCancletext=false;
                this.showresultpage=true;
            }else{
                this.showCancletext=true;
                this.showresultpage=false;
                this.searchresultlist=[];
            } 
            this.showhotkey=false; 
            this.$data.TheStyle.width="72%";
            if(localStorage.getItem('searchList')){
                this.searchList= localStorage.getItem('searchList').split("|");
            }else{
                this.searchList=[]; 
            }
        },
        cancelBtnclick (){
            this.showCancletext=false;
            this.showhotkey=true;
            this.showresultpage=false;
            this.$data.TheStyle.width="85%";
            this.searchkey=''
        },
        clearCashTap(){
            localStorage.removeItem('searchList');
            this.searchList=[]; 
        },
        SearchKeyTap (){
            searchResult(this.searchkey).then((res)=>{
                if(res.code===ERR_OK){
                    this.searchresultlist=res.data.song.list
                    console.log(res.data)
                }else{
                    console.log("tttttttttt")
                }
            })
            this.showresultpage=true;
            this.showCancletext=false;
            this.showhotkey=false;
        },
        clickLocal(item){
            searchResult(item).then((res)=>{
                if(res.code===ERR_OK){
                    this.searchresultlist=res.data.song.list;
                    console.log(res.data)
                }else{
                    console.log("tttttttttt")
                }
            })
            this.showresultpage=true;
            this.showCancletext=false;
            this.showhotkey=false;
        },
        playvideoTp(item){
            let ret = [];
            let musicData = item ;
            console.log(JSON.stringify(item));
            this.$store.dispatch("setClickMusicData", item);
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
           this.$router.push('/videoplay')
        },
        sessionTap (){
            if(!window.localStorage){
                alert('您的浏览器不支持缓存')
            }else{
                var storage=window.localStorage;
                if(storage['searchList']){
                    if(this.searchkey){
                      storage['searchList'] =this.searchkey +'|'+ storage['searchList'];
                    }
                }else{
                    if(this.searchkey){
                        storage['searchList']=this.searchkey;
                    }
                }
                if(storage['searchList']){
                    this.searchList= localStorage.getItem('searchList').split("|"); 
                }
            }
        }
    },
}
</script>
<style scoped>
.search-input-container{
    width: 100%;
    height: 40px;
    position: relative;
}
.search-input{
    width: 85%;
    height:30px;
    font-size: 14px;
    margin-top: 8px;
    padding-left: 34px;
    margin-left: 2.5%;
    color: rgba(0,0,0,.3);
}
input,textarea,select,a:focus {
   outline: none;
}
.searchHot-title{
    margin-top: 20px;
    text-align: left;
    margin-left: 16px;
    padding-top: 10px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 14px;
    color: rgba(0,0,0,.6)
}
.clearicon{
    position: absolute;
    right: 20px;
    top: 2px;
    color: #666666;
    padding: 0 10px;
}
.search-icon{
    display: block;
    width: 18px;
    height: 18px;
    background-image: url('../../common/image/search.png');
    position: absolute;
    top:18px;
    left: 21px;
    background-size: cover
}
.hot-search,.search-result,.search-result-list{
    min-height: 500px;
    background-color: #ffffff;
    text-align: center;
}
ul,li{
    padding: 0px;
}
li{
    list-style-type:none;
}
.hot-search-container{
    display: flex;
    flex-wrap: wrap;
    margin-left: 3px;
    align-items: center;
}
.hot-search-item{
    border: 1px solid #ddd;
    margin-bottom: 5px;
    margin-right: 5px;
    text-align: center;
    line-height: 30px;
    border-radius: 20px;
    margin-left: 7px;
    margin-bottom: 14px;
    padding: 0px 10px;
}
.hot-search-name{
    font-size: 14px;
}
.canclebtn{
    font-size: 14px;
    color: #555;
    margin-left: 5px;
}
.search-result,.search-result-list{
    margin-top: 16px;
}
.result-item{
    position: relative;
    height: 44px;
    line-height: 44px;
    color: #000;
    font-size: 14px;
    white-space: nowrap;
    border-bottom:1px solid #ededed;
    text-align: left;
    padding-left: 41px;
}
.clock-icon{
    position: absolute;
    top:13px;
    left: 10px;
    display: inline-block;
    width:20px;
    height: 20px;
    background-image: url('../../common/image/clock_ic.png');
    background-size: cover;
}
.clear-btn{
    height: 44px;
    line-height: 44px;
    color: #47c88a;
    font-size: 13px;
}
.music-item{
    line-height: 20px;
    height: 60px;
}
.music-text{
    display: flex;
    flex-direction: column;
}
.music-name{
    display: inline-block;
    margin: 14px 0 3px;
    line-height: 18px;
    font-size: 16px;
    font-weight: 400;
    color: #000;
}
.music-text{
    margin-left: 24px;
}
.music-author{
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: gray;
    font-size: 12px;
}
.music-icon{
    position: absolute;
    top:20px;
    left: 27px;
    width: 22px;
    height: 20px;
    background-image: url('https://y.gtimg.cn/mediastyle/mobile/yqq_v5/img/search_sprite.png?max_age=2592000&v=87848a61828f15e8f0a517b10e67cd2f');
    background-size: 22px 30px;
}
</style>