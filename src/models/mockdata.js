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
    [{ "createdDate": 1537933886000, "updatedDate": 1537933882000, "createdBy": "superadmin", "updatedBy": "superadmin", "isDeleted": false, "id": 411, "name": "退费管理", "parentId": null, "resKey": null, "resUrl": "refundIndex", "level": 0, "icon": null, "isHidden": false, "seq": 1, "description": "支付中心退费管理", "roles": null, "subRes": null, "action": null }, { "createdDate": 1537933957000, "updatedDate": 1537933960000, "createdBy": "superadmin", "updatedBy": "superadmin", "isDeleted": false, "id": 412, "name": "退费审核", "parentId": 411, "resKey": "refund", "resUrl": "refund", "level": 1, "icon": null, "isHidden": false, "seq": 1, "description": "退费审核", "roles": null, "subRes": null, "action": "refund" }]
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
                paymentDate: 1215135151,
                amount: 6.00,
                outTradeNo: 128941841541
            },
            {
                type: 1,
                paymentDate: 1215135151,
                amount: 6.00,
                outTradeNo: '128941841541'
            }]
        }
    }
)



