import Mock from 'mockjs'

Mock.setup({ timeout: "200-1000" })

Mock.mock(/\list/, {
    page: 1,
    total: 100,
    hasNext: 1,
    size: 10,
    data: [{
        carNo: "测123455",
        tradeNo: "201812643187246713851231",
        enterTime: "1537957089301",
        leaveTime: "1537957089301",
        applyTime: "1537957089301",
        apply: "oas",
        amount: "500",
        status: "1",
        operation: "阿萨"
    }, {
        carNo: "测123455",
        tradeNo: "201812643187246713851231",
        enterTime: "1537957089301",
        leaveTime: "1537957089301",
        applyTime: "1537957089301",
        apply: "oas",
        amount: "500",
        status: "1",
        operation: "阿萨"
    }, {
        carNo: "测123455",
        tradeNo: "201812643187246713851231",
        enterTime: "1537957089301",
        leaveTime: "1537957089301",
        applyTime: "1537957089301",
        apply: "oas",
        amount: "500",
        status: "1",
        operation: "阿萨"
    }, {
        carNo: "测123455",
        tradeNo: "201812643187246713851231",
        enterTime: "1537957089301",
        leaveTime: "1537957089301",
        applyTime: "1537957089301",
        apply: "oas",
        amount: "500",
        status: "1",
        operation: "阿萨"
    }, {
        carNo: "测123455",
        tradeNo: "201812643187246713851231",
        enterTime: "1537957089301",
        leaveTime: "1537957089301",
        applyTime: "1537957089301",
        apply: "oas",
        amount: "500",
        status: "1",
        operation: "阿萨"
    }, {
        carNo: "测123455",
        tradeNo: "201812643187246713851231",
        enterTime: "1537957089301",
        leaveTime: "1537957089301",
        applyTime: "1537957089301",
        apply: "oas",
        amount: "500",
        status: "1",
        operation: "阿萨"
    }, {
        carNo: "测123455",
        tradeNo: "201812643187246713851231",
        enterTime: "1537957089301",
        leaveTime: "1537957089301",
        applyTime: "1537957089301",
        apply: "oas",
        amount: "500",
        status: "1",
        operation: "阿萨"
    }, {
        carNo: "测123455",
        tradeNo: "201812643187246713851231",
        enterTime: "1537957089301",
        leaveTime: "1537957089301",
        applyTime: "1537957089301",
        apply: "oas",
        amount: "500",
        status: "1",
        operation: "阿萨"
    }, {
        carNo: "测123455",
        tradeNo: "201812643187246713851231",
        enterTime: "1537957089301",
        leaveTime: "1537957089301",
        applyTime: "1537957089301",
        apply: "oas",
        amount: "500",
        status: "1",
        operation: "阿萨"
    }, {
        carNo: "测123455",
        tradeNo: "201812643187246713851231",
        enterTime: "1537957089301",
        leaveTime: "1537957089301",
        applyTime: "1537957089301",
        apply: "oas",
        amount: "500",
        status: "1",
        operation: "阿萨"
    }]
}

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
    {
        result: {
            refund: {
                refundAmount: 2200,
                refundWay: "1",
                refundDesc: "该用户重复付费20元，已核实",
                imgUrl: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
                auditingStatus: 0,
                auditingDesc: "yeah"
            },
            order: {
                tradeNo: 1231241,
                parkName: "万达停车场",
                enterTime: 12314155556,
                parkingTime: "两小时12分",
                applyTime: 102471985471894,
                apply: "wxy",
                coupon: "1小时优惠券",
                paidAmount: 12.00
            },
            payments: [{
                type: 1,
                id: "1",
                paymentDate: 1215135151,
                amount: 6.00,
                outTradeNo: 128941841541
            },
            {
                type: 1,
                id: "1",
                paymentDate: 1215135151,
                amount: 6.00,
                outTradeNo: '128941841541'
            }]
        }
    }
)

Mock.mock(/\paymentTool\/get/, {
    code: 200,
    result: {
        list: [{
            type: "1",
            id: "1",
            name: "金币",
            createdDate: "2018-09-30",
            desc: "共享停车金币"
        }, {
            type: "1",
            id: "2",
            name: "余额",
            createdDate: "2018-09-30",
            desc: "共享停车用户余额"
        }
            , {
            type: "2",
            id: "3",
            name: "微信",
            createdDate: "2018-09-30",
            desc: "微信支付"
        }
            , {
            type: "2",
            id: "4",
            name: "支付宝",
            createdDate: "2018-09-30",
            desc: "支付宝支付"
        }, {
            type: "2",
            id: "5",
            name: "网付通",
            createdDate: "2018-09-30",
            desc: ""
        }],
        total: 5,
        page: 1

    }
})


Mock.mock(/ussinessMgt\/get/, {
    code: 200,
    result: {
        list: [{
            payscene: "微信端临停支付",
            id: "1",
            code: "1",
            createdDate: "2018-09-30",
            desc: "微信端临停支付"
        }, {
            payscene: "app临停支付",
            id: "2",
            code: "1",
            createdDate: "2018-09-30",
            desc: "app临停支付"
        }
            , {
            payscene: "微信端月保支付",
            id: "3",
            code: "1",
            createdDate: "2018-09-30",
            desc: "微信端月保支付"
        }
            , {
            payscene: "app月保支付",
            id: "4",
            code: "1",
            createdDate: "2018-09-30",
            desc: "app月保支付"
        }],
        total: 4,
        page: 1

    }
})

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

Mock.mock(/parkPaymentConfig\/get/, {
    code: 200,
    result: {
        list: [{
            id: "1",
            parkName: "poly park",
            business: "1",
            desc: "公众号微信支付临停订单 "
        }],
        total: 1,
        page: 1

    }
})

Mock.mock(/parkPaymentConfig\/detail/, {
    code: 200,
    result:
    [
        {
            payType: 1,
            payScene: "1",
            payee: "1",
            payeeDesc: "悦停",
            cooperator: ""
        },
        {
            payType: 2,
            payScene: "1",
            payee: "1",
            payeeDesc: "悦停",
            cooperator: ""
        },
        {
            payType: 3,
            payScene: "1",
            payee: "1",
            payeeDesc: "悦停",
            cooperator: ""
        },
        {
            payType: 1,
            payScene: "2",
            payee: "1",
            payeeDesc: "悦停",
            cooperator: ""
        },
        {
            payType: 2,
            payScene: "2",
            payee: "1",
            payeeDesc: "悦停",
            cooperator: ""
        }
    ]

})


Mock.mock(/payee\/search/, {
    code: 200,
    result: {
        list: [{id: 1, desc: "悦停"}, 
        {id: 2, desc: "保利"}
        ]
    }
    
})

Mock.mock(/payee\/config/, {
    code: 200,
    result: {
        configJson : "{\"a\":\"b\"}",
        desc: "我顶顶顶",
        payScene:"1",
        payType: "3"
    }
    
})
