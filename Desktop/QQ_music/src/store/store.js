import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
let store = new Vuex.Store({
    // 1. state
    state:{
        rankDetailArry:[],
        musicUrl:'',
        musicDetails:[],
        clickMusicData:[]
    },

    // // 2. getters
    getters:{
        // 参数列表state指的是state数据
        getRankDetailData(state){
            return state.rankDetailArry;
        }
    },
    // 3. actions
    // 通常跟api接口打交道
    actions:{
        // 设置城市信息
        // 参数列表：{commit, state}
        // state指的是state数据
        // commit调用mutations的方法 
        // name就是调用此方法时要传的参数
        setRankData({commit,state}, rankdata){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("getRankData", rankdata);
        },
        setMusicUrl({commit,state}, url){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("getMusicUrl", url);
        },
        setClickMusicData({commit,state},data){
            commit("getClickMusicData", data);
        }
    },
    // 4. mutations
    mutations:{
        // state指的是state的数据
        // name传递过来的数据
        getRankData(state, rankdata){
            state.rankDetailArry = rankdata;//将传参设置给state的city
        },
        getMusicUrl(state,url){
            state.musicUrl = url;//将传参设置给state的city
        },
        getClickMusicData(state,data){
            state.clickMusicData = data;//将传参设置给state的city
        }
    }
});

export default store;