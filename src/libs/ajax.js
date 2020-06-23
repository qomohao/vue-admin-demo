import axios from 'axios';
import Qs from 'qs';
import Vue from 'vue';
import {
    Message
} from 'element-ui';

Vue.prototype.axios = axios;
axios.defaults.baseURL = '';
axios.defaults.timeout = 30000;

import envConfig from "./config"
/**
 * 不同环境 -- API baseUrl
 * 
 */
const getAjaxUrl = (url) => {
    return envConfig.baseUrl + url;
};
/**
 * http请求拦截器
 */
axios.defaults.withCredentials = true;
axios.interceptors.request.use(config => {

    Message.closeAll();
    return config;
}, error => {

    return Promise.reject(error);
});
// http响应拦截器
axios.interceptors.response.use(
    response => {
        if (response.status === 200) {
            Message.closeAll();
            // console.log(response)
            const resCode = response.data.code;
            const resMsg = response.data.msg;
            switch (resCode) {
                case 0:
                    Message.success(resMsg)
                    return Promise.resolve(response.data);
                case 500:
                    Message.error(resMsg)
                    break;
                default:
                    return Promise.resolve(response.data);
            }
        } else {
            Message.error('网络异常！')
        }
    },
    error => {
        return Promise.reject(error);
    }
);
/**
 * @description: get请求
 * @param {string} url - 请求地址 
 * @param {object} params - 请求参数 
 * @return: promise
 */
export const $get = (url = '', params = {}, config = {}, errCallback = null) => {
    return axios.get(getAjaxUrl(url), {
        params
    }, config).then(res => {
        return res;
    }).catch(err => {
        errCallback && errCallback();
        return err;
    })
};
/**
 * @description: post请求
 * @param {string} url - 请求地址 
 * @param {object} params - 请求参数 
 * @return: promise
 */
export const $post = (url = '', params = {}, config = {}, errCallback = null) => {
    const _config = Object.assign({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    }, config);
    let resultParams;
    if (_config.headers['Content-Type'].toLowerCase().indexOf('json') > -1) {
        resultParams = params;
    } else {
        if (_config.FormData) {
            resultParams = params;
        } else {
            resultParams = Qs.stringify(params); //序列化操作
        }
    }
    return axios.post(getAjaxUrl(url), resultParams, _config).then(res => {
        return res;
    }).catch(err => {
        errCallback && errCallback();
        return err;
    })
}