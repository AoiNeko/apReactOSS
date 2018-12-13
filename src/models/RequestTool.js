// import './mockdata'
import axios from 'axios'
import { message } from 'antd'
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.interceptors.response.use((response) => {
    if (response.data && response.data.code == 4011) {
        window.location.href = '/paycenter/login';
    }
    return response;
}, function (error) {
    if ("Network Error" == error.message) {
        window.location.href = '/paycenter/login';
    }

    if (4011 == error.response.status) {
        window.location.href = '/paycenter/login';
    } else {
        return Promise.reject(error);
    }
});

export default class RequestTool {
    commonFetch(param) {
        if (!param.url || !param.success) {
            console.error("cant get url or success func ")
            return
        }

        let _this = this
        axios.get(param.url).then((response) => {

            if (response.redirected) {

                window.location.href = response.url
            }
            if (response.status >= 200 && response.status < 300) {
                param.success(response.data)
            }
            else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText
                })
            }
        }).catch(error => {
            console.log("error ", error)
            if (param.fail) {
                param.fail(error)
            }
            else {
                message.error("请求失败")
            }
        })
    }

    commonPost(param) {
        if (!param.url || !param.success) {
            console.error("cant get url or success func ")
            return
        }
        axios.post(param.url, param.body).then(function (response) {
            if (response.redirected) {
                window.location.href = response.url
            }
            if (response.status >= 200 && response.status < 300) {
                param.success(response.data)
            }
            else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText
                })
            }
        }).catch(function (error) {
            if (param.fail) {
                param.fail(error)
            }
            else {
                message.error("请求失败")
            }
        });

    }

    comsposeQueryUrl(mapObject) {
        let queryStr = ""
        for (var i in mapObject) {
            queryStr += i + "=" + mapObject[i] + "&"
        }
        return queryStr.substring(0, queryStr.length - 1)
    }

}