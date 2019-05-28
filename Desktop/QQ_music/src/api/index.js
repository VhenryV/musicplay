import jsonp from './jsonp'          //引入jsonp
import {commonParams,options,baseUrl,uidData} from './config'    //引入config.js
import axios from 'axios'
export function getRecommend(){
    const url = baseUrl+'/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    const data = Object.assign({},commonParams,uidData)
    return jsonp(url,data,options)
}
export function getRankData(){
    const url = baseUrl+'/v8/fcg-bin/fcg_myqq_toplist.fcg'
    const data = Object.assign({})
    return jsonp(url,data,options)
}
export function getSearchHotData(){
    const url = baseUrl+'/splcloud/fcgi-bin/gethotkey.fcg'
    const data = Object.assign({},commonParams,uidData)
    return jsonp(url,data,options)
}
export function getRankDataDetail(id){
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
    const data = Object.assign({},{
        '-': 'getUCGI0944822988422791',
        g_tk: '5381',
        loginUin: '0',
        hostUin: '0',
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: '0',
        platform: 'yqq.json',
        needNewCode: '0',
        data: '{"detail":{"module":"musicToplist.ToplistInfoServer","method":"GetDetail","param":{"topId":'+id+',"offset":0,"num":20,"period":"2019_20"}},"comm":{"ct":24,"cv":0}}'
    })
    return jsonp(url,data)
}
export function searchResult(keyword){
    const url = '/api/test'
    const data = Object.assign({},{
        ct: '24',
        qqmusic_ver: '1298',
        new_json: '1',
        remoteplace: 'txt.yqq.center',
        searchid: '39343038642673546',
        t: '0',
        aggr: '1',
        cr: '1',
        catZhida: '1',
        lossless: '0',
        flag_qc: '0',
        p: '1',
        n: '10',
        w: keyword,
        g_tk: '5381',
        loginUin: '0',
        hostUin: '0',
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: '0',
        platform: 'yqq.json',
        needNewCode: '0'
    })
    return axios.get(url,{
        params:data
    }).then((res)=>{
        return Promise.resolve(res.data)
    })
}
export function getMusic(songmid) {
    const url = '/api/music'
    const data = Object.assign({}, commonParams, {
      songmid: songmid,
      filename: 'C400' + songmid + '.m4a',
      guid: 7893131276,
      platform: 'yqq',
      loginUin: 0,
      hostUin: 0,
      needNewCode: 0,
      cid: 205361747,
      uid: 0,
      g_tk: 1928111839
    })
    return axios.get(url, {
      params: data
    }).then((res) => {
      return Promise.resolve(res.data)
    })
  }
  export function getMusicUrl(id){
    const url = 'https://u.y.qq.com/cgi-bin/musicu.fcg'
    const data = Object.assign({},{
        '-': 'getplaysongvkey02650432089884558',
        g_tk: '5381',
        loginUin: '1152921504772899440',
        hostUin: '0',
        format: 'json',
        inCharset: 'utf8',
        outCharset: 'utf-8',
        notice: '0',
        platform: 'yqq.json',
        needNewCode: '0',
        data: '{"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"7893131276","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"7893131276","songmid":["'+id+'"],"songtype":[0],"uin":"1152921504772899440","loginflag":1,"platform":"20"}},"comm":{"uin":"1152921504772899440","format":"json","ct":24,"cv":0}}'
    })
    return jsonp(url,data)
}
