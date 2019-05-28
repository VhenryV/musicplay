<template>
    <div class="rank">
        <rank-cell :rankList="rankList"></rank-cell>
    </div>
</template>

<script>
import {getRankData,getRankDataDetail} from '../../api/index'
import {ERR_OK} from '../../api/config'
import RankCell from '../rankcell/rankcell' 
export default {
    name:'Rank',
    data () {
        return {
            rankList:[]
        }
    },
    components:{
        RankCell
    },
    created() {
        this._getRankData();
    },
    methods: {
        _getRankData () {
            getRankData().then((res)=>{
                if(res.code===ERR_OK){
                   this.rankList = res.data.topList;
                }
            })
        }
    },
}
</script>
<style scoped>
</style>