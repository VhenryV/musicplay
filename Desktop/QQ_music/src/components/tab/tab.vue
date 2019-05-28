<template>
    <div class="tab">
        <router-link to="/recommend" tag="div" class="link-item">
            <span class="link-text">推荐</span>
        </router-link>
        <router-link to="/rank" tag="div" class="link-item">
            <span class="link-text">排行榜</span>
        </router-link>
        <router-link to="/search" tag="div" class="link-item">
            <span class="link-text">搜索</span>
        </router-link>
    </div>
</template>

<script>
export default {
    name:'Tab'
}
</script>
<style scoped>
 .tab{
      height: 40px;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 70px;
  }
  .link-item{
      flex: 1;
      text-align: center;
      color: rgba(0,0,0,.6);
      font-size: 16px;
      padding-bottom: 4px;
      border-bottom: 2px solid #ffffff
  }
  .router-link-active.link-item{
      color: #31c27c;
      border-bottom: 2px solid #31c27c
  }
</style>