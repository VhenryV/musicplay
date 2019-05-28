<template>
    <div class="rankcell">
        <div class="cell-container">
            <div class="cell-conainer-item" v-for="(item, index) in rankList" :key="item.id" @click="clickCellTap(item.id)">
                <div class="cell-left">
                    <img class="popshow" :src="item.picUrl" alt="">
                    <span class="music-icon"></span>
                    <span class="listen-counter">{{item.listenCount}}</span>
                </div>
                <div class="cell-right">
                    <div class="cell-title">{{item.topTitle}}</div>
                    <div class="cell-content">
                        <div class="cell-item" v-for="(items, index) in rankList[index].songList" :key="index">
                            <span class="cell-number">{{index+1}}</span>
                            <span class="cell-name">{{items.songname}}</span>
                            <span class="cell-line">-</span>
                            <span class="cell-author">{{items.singername}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {getRankDataDetail} from '../../api/index'
import {ERR_OK} from '../../api/config'
export default {
    props: {
        rankList: Array
    },
    methods: {
        clickCellTap(id){
            getRankDataDetail(id).then((res)=>{
                if(res.code===ERR_OK){
                    this.$store.dispatch("setRankData", res.detail.data.data);
                    console.log(res)
                }
            });
            this.$router.push('/rankdetail')
        }
    },
}
</script>

<style scoped>
.rankcell{
    margin: 10px;
    margin-top: 7px;
}
.cell-conainer-item{
    display: flex;
    background-color: #ffffff;
    height: 100px;
    margin-bottom: 14px;
}
.cell-left{
    flex: 1;
    position: relative;
}
.popshow{
    width: 100px;
    height:100px;
}
.music-icon{
    position: absolute;
    left: 10px;
    bottom: 10px;
    display: block;
    width: 10px;
    height: 10px;
    background: url('../../common/image/list_sprite.png');
    background-position: 0 -50px;
    background-size: 24px 60px;
}
.listen-counter{
    position: relative;
    left: 28px;
    bottom: 32px;
    color: #fff;
    opacity: .6;
    font-size: 9px; 
}
.cell-right{
    flex: 2;
}
.cell-title{
    font-size: 16px;
    font-weight: 400;
    margin-top: 11px;
}
.cell-item{
    font-size: 14px;
    width: 237px;
    color: rgba(0,0,0,.5);
    line-height: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}
.cell-content{
    margin-top: 4px;
}
.cell-name{
    color: #000;
    margin-left: 10px;
}
</style>