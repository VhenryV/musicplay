<template>
    <div class="video-container">
        <div class="video-item"  v-for="(item, index) in videolist" :key="index">
            <img :src="item.picUrl" alt="">
            <span class="video-icon"></span>
            <div class="video-title">{{item.Ftitle}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'videoCo',
    props: {
        videolist: Array
    }
}
</script>
<style scoped>
.video-container{
    display: flex;
    align-items: center;
}
.video-item{
    position: relative;
    flex: 1;
    margin-left: 10px;
    margin-right: 10px;
    height: 222px;
    background-color: #ffffff;
}
.video-container div:nth-child(2){
    margin-left: 0px;
}
.video-item img{
    height: 174px;
    width: 100%;
}
.video-title{
    font-size:14px;
    color: rgba(0,0,0,.8);
    padding-left: 7px;
}
.video-icon{
    position: absolute;
    bottom: 53px;
    right: 5px;
    display: block;
    height: 24px;
    width: 24px;
    background: url('../../common/image/list_sprite.png');
    background-size: 24px 60px;
}
</style>