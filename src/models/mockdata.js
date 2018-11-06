import Mock from 'mockjs'

Mock.setup({ timeout: "200-1000" })

Mock.mock(/\list/, {"code":200,"desc":"success","result":{"pageNum":1,"pageSize":10,"size":1,"startRow":1,"endRow":1,"total":1,"pages":1,"list":[{"refundNo":"asdsajohdhaskjdhska","carNo":"临A00002","tradeNo":null,"enterTime":"2018-10-15 17:06:45","leaveTime":"2018-10-15 17:08:15","applyTime":"2018-10-18 09:40:19","apply":"asd","amount":1,"status":null}],"prePage":0,"nextPage":0,"isFirstPage":true,"isLastPage":true,"hasPreviousPage":false,"hasNextPage":false,"navigatePages":8,"navigatepageNums":[1],"navigateFirstPage":1,"navigateLastPage":1,"firstPage":1,"lastPage":1},"timestamp":1539827803905}
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
    }]
)


Mock.mock(/\order/,
   {"code":200,"desc":"success","result":{"refund":{"refundNo":"asdsajohdhaskjdhska","carNo":"临A00002","tradeNo":"201810151706448110002805","enterTime":"2018-10-15 17:06:45","leaveTime":"2018-10-15 17:08:15","applyTime":"2018-10-18 09:40:19","apply":"asd","parkName":"万达地下车场","amount":1,"status":1,"auditDesc":"arer","imgUrl":null},"order":{"id":307157,"parkNo":null,"apParkId":326,"tradeNo":"201810151706448110002805","carNo":"临A00002","status":4,"retentionTime":null,"totalAmount":1,"paidAmount":1,"discountAmount":0,"reduceAmount":0,"additions":null,"type":0,"parkingType":0,"paymentType":2,"paymentTime":1539594468000,"paymentWay":16,"enterTime":1539594405000,"leaveTime":1539594495000,"deleted":false,"createdDated":1539594411000,"createdBy":null,"updatedDate":1539594502000,"updatedBy":"phub"},"coupons":null,"payments":[{"id":482,"prepayId":"e6a1dc13f39e467cb3c9cbbdfda8b8a7","outTradeNo":"201810151707470070002734","tradeNo":"201810151706448110002805","prepayInfo":"{\"additionalFee\":0,\"carNo\":\"临A00002\",\"couponCode\":\"\",\"discountFee\":0,\"paidFee\":0,\"totalFee\":1,\"tradeNo\":\"201810151706448110002805\"}","channelId":28,"userId":314232,"payee":1,"wxUnionId":"oNa2guHvdlzJ5uuK_YZ_hgjcLAHA","paymentType":1,"paymentStatus":1,"paymentScene":1,"amount":1,"notifyDate":1539594473000,"createdDate":1539594468000,"createdBy":"appay","updatedDate":1539826368000,"updatedBy":null}]},"timestamp":1539849958892}
)

Mock.mock(/\paymentTool\/get/, {"code":200,"desc":"success","result":{"pageNum":1,"pageSize":10,"size":1,"startRow":1,"endRow":1,"total":1,"pages":1,"list":[{"id":0,"type":1,"name":"微信支付","isDeleted":false,"createdDate":1539854519000,"createdBy":"liangli","updatedDate":1539854522000,"updatedBy":null}],"prePage":0,"nextPage":0,"isFirstPage":true,"isLastPage":true,"hasPreviousPage":false,"hasNextPage":false,"navigatePages":8,"navigatepageNums":[1],"navigateFirstPage":1,"navigateLastPage":1,"lastPage":1,"firstPage":1},"timestamp":1539854713280})


Mock.mock(/ussinessMgt\/get/, {"code":200,"desc":"success","result":{"total":1,"list":[{"id":1,"scene":1,"name":"小程序临停支付","isDeleted":false,"createdDate":null,"createdBy":null,"updatedDate":1539862654000,"updatedBy":null}],"pageNum":1,"pageSize":10,"size":1,"startRow":1,"endRow":1,"pages":1,"prePage":0,"nextPage":0,"isFirstPage":true,"isLastPage":true,"hasPreviousPage":false,"hasNextPage":false,"navigatePages":8,"navigatepageNums":[1],"navigateFirstPage":1,"navigateLastPage":1},"timestamp":1539863113151})

Mock.mock(/payeeConfig\/get/, {"code":200,"desc":"success","result":{"total":0,"list":[{"id":29,"payee":1,"payType":1,"payScene":4,"configJson":"{\"mchId\":\"1509254471\",\"mchKey\":\"Gd7FoZlNNqMvnGgtLh4SiKm2izUvvvPL\",\"appId\":\"wx5b9dcf34bbde474c\",\"tradeType\":\"JSAPI\",\"notifyUrl\":\"https://www.airparking.com.cn/airparking/temp/order/wx/pay\"}","description":"停车码小程序支付临停订单","isDeleted":null,"createdDate":null,"createdBy":null,"updatedDate":null,"updatedBy":null,"payTypeName":"微信支付","paySceneName":"临停缴费停车码小程序缴费","payeeName":"悦停"},{"id":28,"payee":1,"payType":1,"payScene":3,"configJson":"{\"mchId\":\"1509254471\",\"mchKey\":\"Gd7FoZlNNqMvnGgtLh4SiKm2izUvvvPL\",\"appId\":\"wx25586c6039cc1a7c\",\"tradeType\":\"JSAPI\",\"notifyUrl\":\"https://www.airparking.com.cn/airparking/temp/order/wx/pay\"}","description":"小程序车牌支付临停订单","isDeleted":null,"createdDate":null,"createdBy":null,"updatedDate":null,"updatedBy":null,"payTypeName":"微信支付","paySceneName":"临停缴费共享停车临停小程序微信支付","payeeName":"悦停"},{"id":27,"payee":1,"payType":1,"payScene":2,"configJson":"{\"mchId\": \"1269076401\",\"mchKey\": \"YUx3BpRSM4Yd9K3YagJcgTTa3AaCNLAR\",\"appId\": \"wxa26bd20b8854ba2a\",\"tradeType\": \"JSAPI\",\"notifyUrl\": \"https://www.airparking.com.cn/airparking/temp/order/wx/pay\"}","description":"公众号微信支付临停订单 ","isDeleted":null,"createdDate":null,"createdBy":null,"updatedDate":null,"updatedBy":null,"payTypeName":"微信支付","paySceneName":"临停缴费页面支付(公众号)","payeeName":"悦停"},{"id":26,"payee":1,"payType":2,"payScene":1,"configJson":"{\"sellerId\":\"2088021289690049\",\"notifyUrl\":\"https://www.airparking.cn/airparking/temp/order/alipay/pay\",\"returnUrl\":\"\",\"gateWay\":\"https://openapi.alipay.com/gateway.do\",\"appId\":\"2016041201288789\",\"privateKey\":\"MIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQDCfUm5Z2yDu+OXwQrkvbuYdbl+JdGM6MFXK9lQ4k7R4vHAkR2KTY61UsPJNZYn7inD2Nx4FLJI7sObcmQUZZYuv8VhQIBZDEp5pnnaHAg8Jd+xbg5Go1qRQfYhEKpp1/cKwmfq4q1hsdMF/245fw+4HG2XAfIBeot9CEyJgBrxUTgaNge5as7lPfiyQ37Rin6CAONUxIc6iuCuAo3pLQ0Vac25dDn+/ob0fHlKR8WA3XGZR1HIULo54Lg53lq5PFrumTOXOTN5uUxXcCdjRwEOy0tbdWxDCy5wHcTNjRZeItNj+MtJVClefHekeGNMOMpHgblZlHR9hW3gCxMZogPJAgMBAAECggEBAJzABa9cX+U8hY5Fk9YP5SZXm4zERkPfRBRRzvCVtRkMY/PkAX76S05wykNc4QyFszuZiPdvFtIZPaYHaAnYZlZ/UUG0jr02Xr/1ILhdZ3WywLtsDC16cwAnvYugtvhfi0gsrzxsPXlDrORknh3Q/oZQwzK16qqubcXz7lvT1+MtPue1d9uAbiZkl4Qa43qd3dye/+8VN2N2njIcY7CW9xQ5nPamDjfsawqX/9erhH3g0jFyuhdQUZUQTluSG360M9gU2E+TCl/qcUPJ5arYzxtTXqNWHhT0Sp8GfqdlcoK7nJR9dh2ra0Vm7yLu1g318f+vMCooLAfrSFwGZjBdWpECgYEA4i0ueIp8EHmhGEQXaw4bCr6CefWeQN9ipwOn6J94cpEo1ON3RIyxlrLowKc7ZNHw1Ma9pgLmoY/Gc7pJTdK0ZYxAGZ2S+IdiNNj4Lna98tl85QtLivPNZCCn1tB6SSOXbB4O4a7hSwpGUw8ndUHPirVpxCeIPdd7q2raL7mU+88CgYEA3CJ6AB/78CcWWAXcUqB5jOBqF33zATNnpnCqm0yP1C0giFCX/Tr1Wtk0SeIE5MbcP/0HW0SjEbelCiUzHSR9+0HGdZgeVxTnDQipDVqUwWrSFVJ8f7jPLCNymzzG/afRBiVQoSPzTNQdEsv1Fzu7CmKmGd5QvAcmHu9o+3WXdOcCgYEAt1g04ZYxOBHA2zDnYusOVMlWb5MB9Eihag32oQYU15qAZQL3feQnWagyMWnfJb1h4rowplCXsMQh9VI/dgymG+NzWtB3gWwN2hVAKjorhJ91NR7Q4BT+nHo0VFivqHZnm0dKfPwMuY3csBwKumzc1u50jIQXVzpEkBKQSDvCX9UCgYEA2RkjSqZAeDqEPbEh9VcQKRBVcO+kzWVd7nakut4J5s3OjME28+XGfZ9Cgy7ldp5sLqsjKy6Ix/teR6AiRbZsjHP0/ppUKbuSlncZCfNwS0RHBgJAiFHB95zJ9TE+aoCrky0P1Ku40edK+POutggRUY+ykkZ/RsCiJtYjqgLxqLcCgYEAz0SdSDOuzb6aq2V/2wWBAnBaXODvTWGik/gnfMd3y2PcwJ4w3huveEYv97x3ej+OU+3ZXRVcpHN6F9eEZU2E1AvdNyELYLwJKV9NRzUw7KLnwDxyFQD5IfRRMPFbRa51J1cZ9HmCeO2NG6KNhjrIqsZ0kBrFE6k5mdnzYn4tm5A=\",\"alipayPublicKey\":\"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwn1JuWdsg7vjl8EK5L27mHW5fiXRjOjBVyvZUOJO0eLxwJEdik2OtVLDyTWWJ+4pw9jceBSySO7Dm3JkFGWWLr/FYUCAWQxKeaZ52hwIPCXfsW4ORqNakUH2IRCqadf3CsJn6uKtYbHTBf9uOX8PuBxtlwHyAXqLfQhMiYAa8VE4GjYHuWrO5T34skN+0Yp+ggDjVMSHOorgrgKN6S0NFWnNuXQ5/v6G9Hx5SkfFgN1xmUdRyFC6OeC4Od5auTxa7pkzlzkzeblMV3AnY0cBDstLW3VsQwsucB3EzY0WXiLTY/jLSVQpXnx3pHhjTDjKR4G5WZR0fYVt4AsTGaIDyQIDAQAB\",\"signType\":\"RSA2\"}","description":"app支付宝支付临停订单","isDeleted":null,"createdDate":null,"createdBy":null,"updatedDate":null,"updatedBy":null,"payTypeName":"支付宝支付","paySceneName":"临停缴费共享停车APP临停支付","payeeName":"悦停"},{"id":25,"payee":1,"payType":1,"payScene":1,"configJson":"{\"mchId\": \"1286242401\",\"mchKey\": \"Gd7FoZlNNqMvnGgtLh4SiKm2izUvvvPL\",\"appId\": \"wx00858d364d75e52d\",\"tradeType\": \"APP\",\"notifyUrl\": \"https://www.airparking.com.cn/airparking/wx/pay/lease\"}","description":"APP临停缴费支付","isDeleted":null,"createdDate":null,"createdBy":null,"updatedDate":null,"updatedBy":null,"payTypeName":"微信支付","paySceneName":"临停缴费共享停车APP临停支付","payeeName":"悦停"},{"id":16,"payee":2,"payType":3,"payScene":2,"configJson":"{\"gneteGateWay\":\"https://www.gnetpg.com/GneteMerchantAPI/api/PayV36\",\"merid\":\"A6P\",\"currCode\":\"CNY\",\"callBackUrl\":\"http://www.airparking.com.cn/scanpay/order/success/callback\",\"pKey\":\"11cdbe8f30cea83d1d2895e68a1f38d3\"}","description":"网付通支付","isDeleted":null,"createdDate":null,"createdBy":null,"updatedDate":null,"updatedBy":null,"payTypeName":"网付通支付","paySceneName":"临停缴费页面支付(公众号)","payeeName":"保利物业"},{"id":15,"payee":1,"payType":2,"payScene":2,"configJson":"{asdasgagf}","description":"asdadsa","isDeleted":null,"createdDate":null,"createdBy":null,"updatedDate":null,"updatedBy":null,"payTypeName":"支付宝支付","paySceneName":"临停缴费页面支付(公众号)","payeeName":"悦停"},{"id":7,"payee":5,"payType":3,"payScene":2,"configJson":"{\"gneteGateWay\":\"https://www.gnetpg.com/GneteMerchantAPI/api/PayV36\",\"merid\":\"A6P\",\"currCode\":\"CNY\",\"callBackUrl\":\"http://www.airparking.cn/scanpay/order/success/callback\",\"pKey\":\"11cdbe8f30cea83d1d2895e68a1f38d3\"}","description":"网付通支付","isDeleted":null,"createdDate":null,"createdBy":null,"updatedDate":null,"updatedBy":null,"payTypeName":"网付通支付","paySceneName":"临停缴费页面支付(公众号)","payeeName":null}],"pageNum":0,"pageSize":0,"size":0,"startRow":0,"endRow":0,"pages":0,"prePage":0,"nextPage":0,"isFirstPage":false,"isLastPage":false,"hasPreviousPage":false,"hasNextPage":false,"navigatePages":0,"navigatepageNums":null,"navigateFirstPage":0,"navigateLastPage":0},"timestamp":1541495877309})

Mock.mock(/parkPaymentConfig\/get/,{"code":200,"desc":"success","result":{"total":1,"list":[{"id":1,"parkId":200,"parkNo":null,"payType":2,"payScene":0,"payee":2,"cooperator":"polyzk","isDeleted":false,"createdDate":null,"createdBy":null,"updatedDate":1539585485000,"updatedBy":null}],"pageNum":1,"pageSize":10,"size":1,"startRow":1,"endRow":1,"pages":1,"prePage":0,"nextPage":0,"isFirstPage":true,"isLastPage":true,"hasPreviousPage":false,"hasNextPage":false,"navigatePages":8,"navigatepageNums":[1],"navigateFirstPage":1,"navigateLastPage":1},"timestamp":1539858487374})

Mock.mock(/parkPaymentConfig\/detail/, 
{"code":200,"desc":"success","result":[{"id":8,"parkId":0,"parkNo":null,"payType":1,"payScene":1,"payee":1,"cooperator":null,"isDeleted":false,"createdDate":1539944526000,"createdBy":"liangli","updatedDate":1539944528000,"updatedBy":null}],"timestamp":1540175855787}
)


Mock.mock(/payee\/search/, {"code":200,"desc":"success","result":[{"id":1,"desc":null,"name":"悦停","isDeleted":null,"createdDate":null,"createdBy":null,"updatedDate":null,"updatedBy":null}],"timestamp":1539936076308})

Mock.mock(/payee\/config/, {"code":200,"desc":"success","result":[{"id":9,"payee":1,"payType":1,"payScene":1,"configJson":"a1r1","description":"dddd","isDeleted":false,"createdDate":1539944526000,"createdBy":"liangli","updatedDate":1539944528000,"updatedBy":null}],"timestamp":1540175861285})


Mock.mock(/park\/search/, {"code":200,"desc":"success","result":[{"id":1,"desc":null,"name":"悦停车厂","isDeleted":null,"createdDate":null,"createdBy":null,"updatedDate":null,"updatedBy":null}],"timestamp":1539936076308})
