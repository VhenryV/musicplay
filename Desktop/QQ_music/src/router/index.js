import Vue from 'vue'
import Router from 'vue-router'
import Recommend from '../components/recommend/recommend'
import Search from '../components/search/search'
import Rank from '../components/rank/rank'
import RankDetail from '../components/rankdetail/rankdetail'
import VideoPlay from '../components/videoplay/videoplay'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },{
      path: '/recommend',
      name: 'Recommend',
      component: Recommend,
      meta:{
        navShow:true
      }
    },{
      path: '/search',
      name: 'Search',
      component: Search,
      meta:{
        navShow:true
      }
    },{
      path: '/rank',
      name: 'Rank',
      component: Rank,
      meta:{
        navShow:true
      }
    },{
      path: '/rankdetail',
      name: 'RankDetail',
      component: RankDetail,
      meta:{
        navShow:false
      }
    },
    {
      path: '/videoplay',
      name: 'VideoPlay',
      component: VideoPlay,
      meta:{
        navShow:false
      }
    }
  ]
})
