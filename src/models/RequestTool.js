export default class RequestTool {
    commonFetch(param) {
        if (!param.url || !param.success) {
            console.error("cant get url or success func ")
            return
        }

        var myHeaders = new Headers()
        myHeaders.append('Content-Type', 'application/json')
        const option = {
            method: 'GET',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        }
        let _this = this
        fetch(param.url, option).then((response) => {
            debugger;
            if (response.redirected) {
                window.location.href = response.url
            }
            if (response.ok) {
                response.text().then((responseText) => {
                    console.log(responseText)
                    let res = JSON.parse(responseText)
                    console.log(res)
                    debugger
                    param.success(res)
                })
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

}