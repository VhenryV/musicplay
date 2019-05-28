export const commonParams = {       //配置一些公共参数
    g_tk:5381,
    format: 'json',
    inCharset: 'utf-8',
    outCharset:'utf-8',
    notice: 0,
}
export const uidData = {       //配置一些公共参数
    uin: 0,         //之后的对象合并为一起，放在
    platform:'h5',  //前面的{}之中。
    needNewCode: 1,
}
export const options = {           
    param: 'jsonpCallback'
}
export const baseUrl = "https://c.y.qq.com"         
export const ERR_OK = 0         //设置属性
