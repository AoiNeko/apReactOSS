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

Mock.mock(/payeeConfig\/get/, {
    code: 200,
    result: {
        list: [{
            id: "1",
            payee: "1",
            paymentTool: "1",
            business: "1",
            desc: "公众号微信支付临停订单 "
        }, {

            id: "2",
            payee: "1",
            paymentTool: "1",
            business: "2",
            desc: "app微信支付临停订单"
        }
            , {

            id: "3",
            payee: "1",
            paymentTool: "1",
            business: "3",
            desc: "小程序车牌支付临停订单"
        }
            , {

            id: "4",
            payee: "1",
            paymentTool: "1",
            business: "4",
            desc: "停车码小程序支付临停订单"
        }, {
            id: "5",
            payee: "1",
            paymentTool: "2",
            business: "1",
            desc: "pp支付宝支付临停订单"
        }],
        total: 5,
        page: 1

    }
})

Mock.mock(/parkPaymentConfig\/get/,{"code":200,"desc":"success","result":{"total":1,"list":[{"id":1,"parkId":200,"parkNo":null,"payType":2,"payScene":0,"payee":2,"cooperator":"polyzk","isDeleted":false,"createdDate":null,"createdBy":null,"updatedDate":1539585485000,"updatedBy":null}],"pageNum":1,"pageSize":10,"size":1,"startRow":1,"endRow":1,"pages":1,"prePage":0,"nextPage":0,"isFirstPage":true,"isLastPage":true,"hasPreviousPage":false,"hasNextPage":false,"navigatePages":8,"navigatepageNums":[1],"navigateFirstPage":1,"navigateLastPage":1},"timestamp":1539858487374})

Mock.mock(/parkPaymentConfig\/detail/, 
{"code":200,"desc":"success","result":[{"id":8,"parkId":0,"parkNo":null,"payType":1,"payScene":1,"payee":1,"cooperator":null,"isDeleted":false,"createdDate":1539944526000,"createdBy":"liangli","updatedDate":1539944528000,"updatedBy":null}],"timestamp":1540175855787}
)


Mock.mock(/payee\/search/, {"code":200,"desc":"success","result":[{"id":1,"desc":null,"name":"悦停","isDeleted":null,"createdDate":null,"createdBy":null,"updatedDate":null,"updatedBy":null}],"timestamp":1539936076308})

Mock.mock(/payee\/config/, {"code":200,"desc":"success","result":[{"id":9,"payee":1,"payType":1,"payScene":1,"configJson":"a1r1","description":"dddd","isDeleted":false,"createdDate":1539944526000,"createdBy":"liangli","updatedDate":1539944528000,"updatedBy":null}],"timestamp":1540175861285})


Mock.mock(/park\/search/, {"code":200,"desc":"success","result":[{"id":1,"desc":null,"name":"悦停车厂","isDeleted":null,"createdDate":null,"createdBy":null,"updatedDate":null,"updatedBy":null}],"timestamp":1539936076308})
