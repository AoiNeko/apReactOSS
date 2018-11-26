import Mock from 'mockjs'

Mock.setup({ timeout: "200-1000" })

Mock.mock(/\list/, { "code": 200, "desc": "success", "result": { "total": 11, "list": [{ "refundNo": "71F912A8BF8B5DC037E3208563AF7F45", "carNo": "粤A12345", "tradeNo": "2018110805003144010000558370", "enterTime": "2018-11-08 05:00:00", "leaveTime": "2018-11-09 10:01:07", "applyTime": "2018-11-09 10:02:02", "apply": "管理员", "parkName": null, "amount": "3.49元", "status": 1, "auditDesc": "111", "imgUrl": null }, { "refundNo": "CD5917838BC59ADE3F4413D1F502483C", "carNo": "测B66680", "tradeNo": "2018110815300244070000018512", "enterTime": "2018-11-08 15:30:02", "leaveTime": "2018-11-08 15:43:17", "applyTime": "2018-11-08 18:36:54", "apply": "管理员", "parkName": null, "amount": "0.07元", "status": 2, "auditDesc": "ddd", "imgUrl": null }, { "refundNo": "BD9BA78FD63E4BF58C14D41C06633CDB", "carNo": "川AB2222", "tradeNo": "2018110709433244010000550361", "enterTime": "2018-11-07 09:43:31", "leaveTime": "2018-11-07 10:48:24", "applyTime": "2018-11-07 11:30:45", "apply": "管理员", "parkName": null, "amount": "0.13元", "status": 1, "auditDesc": "重复缴费", "imgUrl": null }, { "refundNo": "8FA5A5F87A10D551EFA017FAA4C161D2", "carNo": "川AB1111", "tradeNo": "2018110709404744010000555046", "enterTime": "2018-11-07 09:40:00", "leaveTime": "2018-11-07 10:12:45", "applyTime": "2018-11-07 10:22:59", "apply": "管理员", "parkName": null, "amount": "0.07元", "status": 2, "auditDesc": "退款无条件", "imgUrl": null }, { "refundNo": "3844E2F219B810D74601FF1016724F3F", "carNo": "淦S72D44", "tradeNo": "2018110218100344010088887138", "enterTime": "2018-11-02 18:10:00", "leaveTime": "2018-11-06 18:50:27", "applyTime": "2018-11-06 19:09:50", "apply": "管理员", "parkName": null, "amount": "13.00元", "status": 2, "auditDesc": "fff", "imgUrl": null }, { "refundNo": "03D4B88C855D4F7E7FF2AE22D79A40EC", "carNo": "琼AB2222", "tradeNo": "2018110515584344010000556107", "enterTime": "2018-11-05 15:58:00", "leaveTime": "2018-11-06 09:40:36", "applyTime": "2018-11-06 09:52:45", "apply": "管理员", "parkName": null, "amount": "0.07元", "status": 1, "auditDesc": null, "imgUrl": null }, { "refundNo": "1A36754B7B7C2D1C303A56398764F390", "carNo": "新A33333", "tradeNo": "2018103010122744010000552981", "enterTime": "2018-10-30 10:12:00", "leaveTime": "2018-10-30 10:18:28", "applyTime": "2018-10-30 15:52:04", "apply": "管理员", "parkName": null, "amount": "0.01元", "status": 1, "auditDesc": null, "imgUrl": null }, { "refundNo": "CB06AB7C83972F7708E440A80275EFCA", "carNo": "渝AAAAAA", "tradeNo": "2018102910410344010000839239", "enterTime": "2018-10-29 10:40:00", "leaveTime": "2018-10-29 10:47:09", "applyTime": "2018-10-29 16:55:55", "apply": "管理员", "parkName": null, "amount": "0.01元", "status": 4, "auditDesc": null, "imgUrl": null }, { "refundNo": "88739E4B1E9FA3B84DD027C6D2C0FAF2", "carNo": "浙A00000", "tradeNo": "2018102415380844010000551373", "enterTime": "2018-10-24 15:38:00", "leaveTime": "2018-10-24 15:47:14", "applyTime": "2018-10-24 19:37:02", "apply": "管理员", "parkName": null, "amount": "0.01元", "status": 1, "auditDesc": null, "imgUrl": null }, { "refundNo": "F39991D0F96898CFAE1FCD22D7542DC5", "carNo": "浙A77777", "tradeNo": "2018102414454944010000557529", "enterTime": "2018-10-24 14:45:00", "leaveTime": "2018-10-24 16:33:43", "applyTime": "2018-10-24 15:49:22", "apply": "管理员", "parkName": null, "amount": "0.01元", "status": 1, "auditDesc": null, "imgUrl": null }], "pageNum": 1, "pageSize": 10, "size": 10, "startRow": 1, "endRow": 10, "pages": 2, "prePage": 0, "nextPage": 2, "isFirstPage": true, "isLastPage": false, "hasPreviousPage": false, "hasNextPage": true, "navigatePages": 8, "navigatepageNums": [1, 2], "navigateFirstPage": 1, "navigateLastPage": 2 }, "timestamp": 1541729700426 }
)


Mock.mock(/\user/,
    [{
        "createdDate": 1537933886000,
        "updatedDate": 1537933882000,
        "createdBy": "superadmin",
        "updatedBy": "superadmin",
        "isDeleted": false,
        "id": 411,
        "name": "退费管理",
        "parentId": null,
        "resKey": null,
        "resUrl": "refundIndex",
        "level": 0,
        "icon": null,
        "isHidden": false,
        "seq": 1,
        "description": "支付中心退费管理",
        "roles": null,
        "subRes": null,
        "action": null
    }, {
        "createdDate": 1537933957000,
        "updatedDate": 1537933960000,
        "createdBy": "superadmin",
        "updatedBy": "superadmin",
        "isDeleted": false,
        "id": 412,
        "name": "退费审核",
        "parentId": 411,
        "resKey": "refund",
        "resUrl": "refund",
        "level": 1,
        "icon": null,
        "isHidden": false,
        "seq": 1,
        "description": "退费审核",
        "roles": null,
        "subRes": null,
        "action": "refund"
    }, {

        "id": 413,
        "name": "支付管理",
        "parentId": null,
        "resKey": "paymgt",
        "resUrl": "paymgt",
        "level": 0,
        "icon": null,
        "isHidden": false,
        "seq": 1,
        "description": "支付管理",
        "roles": null,
        "subRes": null
    }, {

        "id": 414,
        "name": "支付工具管理",
        "parentId": 413,
        "resKey": "payTool",
        "resUrl": "payTool",
        "level": 1,
        "icon": null,
        "isHidden": false,
        "seq": 1,
        "description": "支付工具管理",
        "roles": null,
        "subRes": null
    }
        , {

        "id": 415,
        "name": "业务管理",
        "parentId": 413,
        "resKey": "bussinessMgt",
        "resUrl": "bussinessMgt",
        "level": 1,
        "icon": null,
        "isHidden": false,
        "seq": 1,
        "description": "业务管理",
        "roles": null,
        "subRes": null
    }
        , {

        "id": 416,
        "name": "支付工具配置",
        "parentId": 413,
        "resKey": "payToolConf",
        "resUrl": "payToolConf",
        "level": 1,
        "icon": null,
        "isHidden": false,
        "seq": 1,
        "description": "支付工具配置",
        "roles": null,
        "subRes": null
    }
        , {
        "id": 417,
        "name": "收款方配置",
        "parentId": 413,
        "resKey": "payeeConf",
        "resUrl": "payeeConf",
        "level": 1,
        "icon": null,
        "isHidden": false,
        "seq": 1,
        "description": "收款方配置",
        "roles": null,
        "subRes": null
    }, {

        "id": 418,
        "name": "报表查询",
        "parentId": null,
        "resKey": "paymentCalculate",
        "resUrl": "paymentCalculate",
        "level": 0,
        "icon": null,
        "isHidden": false,
        "seq": 1,
        "description": "报表查询",
        "roles": null,
        "subRes": null
    }
        , {

        "id": 419,
        "name": "支付查询页",
        "parentId": 418,
        "resKey": "paymentPage",
        "resUrl": "paymentPage",
        "level": 1,
        "icon": null,
        "isHidden": false,
        "seq": 1,
        "description": "支付查询页",
        "roles": null,
        "subRes": null
    }
        , {

        "id": 420,
        "name": "退款查询页",
        "parentId": 418,
        "resKey": "refundPage",
        "resUrl": "refundPage",
        "level": 1,
        "icon": null,
        "isHidden": false,
        "seq": 1,
        "description": "退款查询页",
        "roles": null,
        "subRes": null
    }, {

        "id": 421,
        "name": "异常订单",
        "parentId": 418,
        "resKey": "irregularOrder",
        "resUrl": "irregularOrder",
        "level": 1,
        "icon": null,
        "isHidden": false,
        "seq": 1,
        "description": "异常订单",
        "roles": null,
        "subRes": null
    }]
)


Mock.mock(/\order/,
    { "code": 200, "desc": "success", "result": { "couponName": "哟i", "refund": { "refundNo": "0EED5A06CA50695AE6583411E185A7C3", "carNo": "黑AB1111", "tradeNo": "2018110910252144010000551057", "enterTime": "2018-11-09 10:25:00", "leaveTime": "2018-11-09 17:21:16", "applyTime": "2018-11-09 17:21:26", "apply": "管理员", "parkName": "老男孩one", "amount": "0.12元", "status": 2, "auditDesc": "还钱", "auditComment": "undefined", "imgUrl": null }, "order": { "id": 307471, "parkNo": "4401000055", "apParkId": null, "tradeNo": "2018110910252144010000551057", "carNo": "黑AB1111", "status": 4, "retentionTime": 5, "totalAmount": 84, "paidAmount": 12, "discountAmount": 72, "reduceAmount": 0, "additions": null, "type": 0, "parkingType": 0, "paymentType": 2, "paymentTime": 1541755253000, "paymentWay": 16, "enterTime": 1541730300000, "leaveTime": 1541755276000, "deleted": false, "createdDated": 1541730321000, "createdBy": "admin", "updatedDate": 1541755265000, "updatedBy": "admin" }, "coupons": [{ "amount": 0, "couponName": "6小时停车票", "code": "142I1Qh2", "tradeNo": "2018110910252144010000551057", "plateNo": "黑AB1111", "effectiveTime": 1541755133000, "expiredDate": 1541841533000, "type": 1, "parkId": 351, "expiredTime": 1541841533000, "limitTime": 360, "deleted": false, "id": 2026, "effectiveDate": 1541755133000, "status": 1 }], "payments": [{ "paymentType": "微信支付", "paymentDate": "2018-11-09 17:20", "paidAmount": "0.12元", "outTradeNo": "201811091720517268708022" }] }, "timestamp": 1541756018829 }
)

Mock.mock(/\paymentTool\/get/, { "code": 200, "desc": "success", "result": { "pageNum": 1, "pageSize": 10, "size": 1, "startRow": 1, "endRow": 1, "total": 1, "pages": 1, "list": [{ "id": 0, "type": 1, "name": "微信支付", "isDeleted": false, "createdDate": 1539854519000, "createdBy": "liangli", "updatedDate": 1539854522000, "updatedBy": null }], "prePage": 0, "nextPage": 0, "isFirstPage": true, "isLastPage": true, "hasPreviousPage": false, "hasNextPage": false, "navigatePages": 8, "navigatepageNums": [1], "navigateFirstPage": 1, "navigateLastPage": 1, "lastPage": 1, "firstPage": 1 }, "timestamp": 1539854713280 })


Mock.mock(/ussinessMgt\/get/, { "code": 200, "desc": "success", "result": { "total": 1, "list": [{ "id": 1, "scene": 1, "name": "小程序临停支付", "isDeleted": false, "createdDate": null, "createdBy": null, "updatedDate": 1539862654000, "updatedBy": null }], "pageNum": 1, "pageSize": 10, "size": 1, "startRow": 1, "endRow": 1, "pages": 1, "prePage": 0, "nextPage": 0, "isFirstPage": true, "isLastPage": true, "hasPreviousPage": false, "hasNextPage": false, "navigatePages": 8, "navigatepageNums": [1], "navigateFirstPage": 1, "navigateLastPage": 1 }, "timestamp": 1539863113151 })

Mock.mock(/payeeConfig\/get/, { "code": 200, "desc": "success", "result": { "total": 0, "list": [{ "id": 29, "payee": 1, "payType": 1, "payScene": 4, "configJson": "{\"mchId\":\"1509254471\",\"mchKey\":\"Gd7FoZlNNqMvnGgtLh4SiKm2izUvvvPL\",\"appId\":\"wx5b9dcf34bbde474c\",\"tradeType\":\"JSAPI\",\"notifyUrl\":\"https://www.airparking.com.cn/airparking/temp/order/wx/pay\"}", "description": "停车码小程序支付临停订单", "isDeleted": null, "createdDate": null, "createdBy": null, "updatedDate": null, "updatedBy": null, "payTypeName": "微信支付", "paySceneName": "临停缴费停车码小程序缴费", "payeeName": "悦停" }, { "id": 28, "payee": 1, "payType": 1, "payScene": 3, "configJson": "{\"mchId\":\"1509254471\",\"mchKey\":\"Gd7FoZlNNqMvnGgtLh4SiKm2izUvvvPL\",\"appId\":\"wx25586c6039cc1a7c\",\"tradeType\":\"JSAPI\",\"notifyUrl\":\"https://www.airparking.com.cn/airparking/temp/order/wx/pay\"}", "description": "小程序车牌支付临停订单", "isDeleted": null, "createdDate": null, "createdBy": null, "updatedDate": null, "updatedBy": null, "payTypeName": "微信支付", "paySceneName": "临停缴费共享停车临停小程序微信支付", "payeeName": "悦停" }, { "id": 27, "payee": 1, "payType": 1, "payScene": 2, "configJson": "{\"mchId\": \"1269076401\",\"mchKey\": \"YUx3BpRSM4Yd9K3YagJcgTTa3AaCNLAR\",\"appId\": \"wxa26bd20b8854ba2a\",\"tradeType\": \"JSAPI\",\"notifyUrl\": \"https://www.airparking.com.cn/airparking/temp/order/wx/pay\"}", "description": "公众号微信支付临停订单 ", "isDeleted": null, "createdDate": null, "createdBy": null, "updatedDate": null, "updatedBy": null, "payTypeName": "微信支付", "paySceneName": "临停缴费页面支付(公众号)", "payeeName": "悦停" }, { "id": 26, "payee": 1, "payType": 2, "payScene": 1, "configJson": "{\"sellerId\":\"2088021289690049\",\"notifyUrl\":\"https://www.airparking.cn/airparking/temp/order/alipay/pay\",\"returnUrl\":\"\",\"gateWay\":\"https://openapi.alipay.com/gateway.do\",\"appId\":\"2016041201288789\",\"privateKey\":\"MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQDCfUm5Z2yDu+OXwQrkvbuYdbl+JdGM6MFXK9lQ4k7R4vHAkR2KTY61UsPJNZYn7inD2Nx4FLJI7sObcmQUZZYuv8VhQIBZDEp5pnnaHAg8Jd+xbg5Go1qRQfYhEKpp1/cKwmfq4q1hsdMF/245fw+4HG2XAfIBeot9CEyJgBrxUTgaNge5as7lPfiyQ37Rin6CAONUxIc6iuCuAo3pLQ0Vac25dDn+/ob0fHlKR8WA3XGZR1HIULo54Lg53lq5PFrumTOXOTN5uUxXcCdjRwEOy0tbdWxDCy5wHcTNjRZeItNj+MtJVClefHekeGNMOMpHgblZlHR9hW3gCxMZogPJAgMBAAECggEBAJzABa9cX+U8hY5Fk9YP5SZXm4zERkPfRBRRzvCVtRkMY/PkAX76S05wykNc4QyFszuZiPdvFtIZPaYHaAnYZlZ/UUG0jr02Xr/1ILhdZ3WywLtsDC16cwAnvYugtvhfi0gsrzxsPXlDrORknh3Q/oZQwzK16qqubcXz7lvT1+MtPue1d9uAbiZkl4Qa43qd3dye/+8VN2N2njIcY7CW9xQ5nPamDjfsawqX/9erhH3g0jFyuhdQUZUQTluSG360M9gU2E+TCl/qcUPJ5arYzxtTXqNWHhT0Sp8GfqdlcoK7nJR9dh2ra0Vm7yLu1g318f+vMCooLAfrSFwGZjBdWpECgYEA4i0ueIp8EHmhGEQXaw4bCr6CefWeQN9ipwOn6J94cpEo1ON3RIyxlrLowKc7ZNHw1Ma9pgLmoY/Gc7pJTdK0ZYxAGZ2S+IdiNNj4Lna98tl85QtLivPNZCCn1tB6SSOXbB4O4a7hSwpGUw8ndUHPirVpxCeIPdd7q2raL7mU+88CgYEA3CJ6AB/78CcWWAXcUqB5jOBqF33zATNnpnCqm0yP1C0giFCX/Tr1Wtk0SeIE5MbcP/0HW0SjEbelCiUzHSR9+0HGdZgeVxTnDQipDVqUwWrSFVJ8f7jPLCNymzzG/afRBiVQoSPzTNQdEsv1Fzu7CmKmGd5QvAcmHu9o+3WXdOcCgYEAt1g04ZYxOBHA2zDnYusOVMlWb5MB9Eihag32oQYU15qAZQL3feQnWagyMWnfJb1h4rowplCXsMQh9VI/dgymG+NzWtB3gWwN2hVAKjorhJ91NR7Q4BT+nHo0VFivqHZnm0dKfPwMuY3csBwKumzc1u50jIQXVzpEkBKQSDvCX9UCgYEA2RkjSqZAeDqEPbEh9VcQKRBVcO+kzWVd7nakut4J5s3OjME28+XGfZ9Cgy7ldp5sLqsjKy6Ix/teR6AiRbZsjHP0/ppUKbuSlncZCfNwS0RHBgJAiFHB95zJ9TE+aoCrky0P1Ku40edK+POutggRUY+ykkZ/RsCiJtYjqgLxqLcCgYEAz0SdSDOuzb6aq2V/2wWBAnBaXODvTWGik/gnfMd3y2PcwJ4w3huveEYv97x3ej+OU+3ZXRVcpHN6F9eEZU2E1AvdNyELYLwJKV9NRzUw7KLnwDxyFQD5IfRRMPFbRa51J1cZ9HmCeO2NG6KNhjrIqsZ0kBrFE6k5mdnzYn4tm5A=\",\"alipayPublicKey\":\"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwn1JuWdsg7vjl8EK5L27mHW5fiXRjOjBVyvZUOJO0eLxwJEdik2OtVLDyTWWJ+4pw9jceBSySO7Dm3JkFGWWLr/FYUCAWQxKeaZ52hwIPCXfsW4ORqNakUH2IRCqadf3CsJn6uKtYbHTBf9uOX8PuBxtlwHyAXqLfQhMiYAa8VE4GjYHuWrO5T34skN+0Yp+ggDjVMSHOorgrgKN6S0NFWnNuXQ5/v6G9Hx5SkfFgN1xmUdRyFC6OeC4Od5auTxa7pkzlzkzeblMV3AnY0cBDstLW3VsQwsucB3EzY0WXiLTY/jLSVQpXnx3pHhjTDjKR4G5WZR0fYVt4AsTGaIDyQIDAQAB\",\"signType\":\"RSA2\"}", "description": "app支付宝支付临停订单", "isDeleted": null, "createdDate": null, "createdBy": null, "updatedDate": null, "updatedBy": null, "payTypeName": "支付宝支付", "paySceneName": "临停缴费共享停车APP临停支付", "payeeName": "悦停" }, { "id": 25, "payee": 1, "payType": 1, "payScene": 1, "configJson": "{\"mchId\": \"1286242401\",\"mchKey\": \"Gd7FoZlNNqMvnGgtLh4SiKm2izUvvvPL\",\"appId\": \"wx00858d364d75e52d\",\"tradeType\": \"APP\",\"notifyUrl\": \"https://www.airparking.com.cn/airparking/wx/pay/lease\"}", "description": "APP临停缴费支付", "isDeleted": null, "createdDate": null, "createdBy": null, "updatedDate": null, "updatedBy": null, "payTypeName": "微信支付", "paySceneName": "临停缴费共享停车APP临停支付", "payeeName": "悦停" }, { "id": 16, "payee": 2, "payType": 3, "payScene": 2, "configJson": "{\"gneteGateWay\":\"https://www.gnetpg.com/GneteMerchantAPI/api/PayV36\",\"merid\":\"A6P\",\"currCode\":\"CNY\",\"callBackUrl\":\"http://www.airparking.com.cn/scanpay/order/success/callback\",\"pKey\":\"11cdbe8f30cea83d1d2895e68a1f38d3\"}", "description": "网付通支付", "isDeleted": null, "createdDate": null, "createdBy": null, "updatedDate": null, "updatedBy": null, "payTypeName": "网付通支付", "paySceneName": "临停缴费页面支付(公众号)", "payeeName": "保利物业" }, { "id": 15, "payee": 1, "payType": 2, "payScene": 2, "configJson": "{asdasgagf}", "description": "asdadsa", "isDeleted": null, "createdDate": null, "createdBy": null, "updatedDate": null, "updatedBy": null, "payTypeName": "支付宝支付", "paySceneName": "临停缴费页面支付(公众号)", "payeeName": "悦停" }, { "id": 7, "payee": 5, "payType": 3, "payScene": 2, "configJson": "{\"gneteGateWay\":\"https://www.gnetpg.com/GneteMerchantAPI/api/PayV36\",\"merid\":\"A6P\",\"currCode\":\"CNY\",\"callBackUrl\":\"http://www.airparking.cn/scanpay/order/success/callback\",\"pKey\":\"11cdbe8f30cea83d1d2895e68a1f38d3\"}", "description": "网付通支付", "isDeleted": null, "createdDate": null, "createdBy": null, "updatedDate": null, "updatedBy": null, "payTypeName": "网付通支付", "paySceneName": "临停缴费页面支付(公众号)", "payeeName": null }], "pageNum": 0, "pageSize": 0, "size": 0, "startRow": 0, "endRow": 0, "pages": 0, "prePage": 0, "nextPage": 0, "isFirstPage": false, "isLastPage": false, "hasPreviousPage": false, "hasNextPage": false, "navigatePages": 0, "navigatepageNums": null, "navigateFirstPage": 0, "navigateLastPage": 0 }, "timestamp": 1541495877309 })

Mock.mock(/parkPaymentConfig\/get/, { "code": 200, "desc": "success", "result": { "total": 1, "list": [{ "id": 1, "parkId": 200, "parkNo": null, "payType": 2, "payScene": 0, "payee": 2, "cooperator": "polyzk", "isDeleted": false, "createdDate": null, "createdBy": null, "updatedDate": 1539585485000, "updatedBy": null }], "pageNum": 1, "pageSize": 10, "size": 1, "startRow": 1, "endRow": 1, "pages": 1, "prePage": 0, "nextPage": 0, "isFirstPage": true, "isLastPage": true, "hasPreviousPage": false, "hasNextPage": false, "navigatePages": 8, "navigatepageNums": [1], "navigateFirstPage": 1, "navigateLastPage": 1 }, "timestamp": 1539858487374 })

Mock.mock(/parkPaymentConfig\/detail/,
    { "code": 200, "desc": "success", "result": [{ "id": 8, "parkId": 0, "parkNo": null, "payType": 1, "payScene": 1, "payee": 1, "cooperator": null, "isDeleted": false, "createdDate": 1539944526000, "createdBy": "liangli", "updatedDate": 1539944528000, "updatedBy": null }], "timestamp": 1540175855787 }
)


Mock.mock(/payee\/search/, { "code": 200, "desc": "success", "result": [{ "id": 1, "desc": null, "name": "悦停", "isDeleted": null, "createdDate": null, "createdBy": null, "updatedDate": null, "updatedBy": null }], "timestamp": 1539936076308 })

Mock.mock(/payee\/config/, { "code": 200, "desc": "success", "result": [{ "id": 9, "payee": 1, "payType": 1, "payScene": 1, "configJson": "a1r1", "description": "dddd", "isDeleted": false, "createdDate": 1539944526000, "createdBy": "liangli", "updatedDate": 1539944528000, "updatedBy": null }], "timestamp": 1540175861285 })


Mock.mock(/park\/search/, { "code": 200, "desc": "success", "result": [{ "id": 1, "desc": null, "name": "悦停车厂", "isDeleted": null, "createdDate": null, "createdBy": null, "updatedDate": null, "updatedBy": null }], "timestamp": 1539936076308 })


Mock.mock(/payment\/statistic\/get/, { "code": 200, "desc": "success", "result": { "total": 1, "list": [{
  "outTradeNo": 1,
  "createdDate": "1121",
  "tradeNo": 12,
  "park": "1车场",
  "plateNo": "月A12345",
  "amount": "0.2元",
  "paymentType": "1",
  "paymentDesc": 2,
  "status": "1saf",
  "tempOrderPaymentId": "123"
}], "pageNum": 1, "pageSize": 10, "size": 1, "startRow": 1, "endRow": 1, "pages": 1, "prePage": 0, "nextPage": 0, "isFirstPage": true, "isLastPage": true, "hasPreviousPage": false, "hasNextPage": false, "navigatePages": 8, "navigatepageNums": [1], "navigateFirstPage": 1, "navigateLastPage": 1 }, "timestamp": 1539858487374 })


Mock.mock(/payment\/statistic\/detail/, { "code": 200, "desc": "success", "result": {}})
