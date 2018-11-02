import './mockdata'
import axios from 'axios'
export default class RequestTool {
    commonFetch(param) {
        if (!param.url || !param.success) {
            console.error("cant get url or success func ")
            return
        }

        // var myHeaders = new Headers()
        // myHeaders.append('Content-Type', 'application/json')
        // const option = {
        //     method: 'GET',
        //     headers: myHeaders,
        //     mode: 'cors',
        //     cache: 'default'
        // }
        let _this = this
        axios.get(param.url).then((response) => {

            if (response.redirected) {
                window.location.href = response.url
            }
            if (response.status >= 200 && response.status < 300) {

                // response.text().then((responseText) => {
                //     console.log(responseText)
                //     let res = JSON.parse(responseText)
                //     console.log(res)
                //     debugger
                //     param.success(res)
                // })
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

                // response.text().then((responseText) => {
                //     console.log(responseText)
                //     let res = JSON.parse(responseText)
                //     console.log(res)
                //     debugger
                //     param.success(res)
                // })
                param.success(response.data)
            }
            else {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText
                })
            }
        }).catch(function (error) {
        　　alert(error);
        });

    }

}