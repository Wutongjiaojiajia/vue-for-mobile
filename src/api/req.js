import http from './http';
import env from './env';
import utils from '@/public/utils.js';

/**
 * url: 地址
 * method: 请求方法
 * params: 参数
 * timeout: 超时时间
 * isOriginalGET: 是否传统get传参
 */



// 接口错误提示
const errorCallback = (info) => {
    utils.failTip(info);
}

const req = ({ baseUrl, method, url, params, timeout, isOriginalGET}) => {
    let options={
        url: env[baseUrl] + url,
        method: method, 
        params: params, 
        timeout: timeout, 
        isOriginalGET: isOriginalGET,
        errorCallback:errorCallback
    };
    return http(options);
}

export default req;