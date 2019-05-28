<template>
    <div class="m-header">
        <img class="icon" src="../../common/image/logo_ch.svg" alt="">
        <div class="downapp">下载APP</div>
    </div>
</template>

<script>
export default {
    name:'MHeader'
}
</script>
<style scoped>
    .m-header{
        position: fixed;
        top:0;
        left: 0;
        height: 70px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 5px 5px rgba(0,0,0,.02);
        z-index: 999;
        background-color: #f4f4f4;
    }
    .icon{
        height: 35px;
        margin-left: 10px;
    }
    .downapp{
        height: 35px;
        width: 90px;
        line-height: 35px;
        border: 1px solid rgba(0,0,0,.3);
        border-radius: 15px;
        text-align: center;
        vertical-align: middle;
        margin-right:10px;
    }
</style>