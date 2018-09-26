import Mock from 'mockjs'

Mock.setup({ timeout: "200-1000" })

Mock.mock(/\list/,
    [{
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
)


Mock.mock(/\user/,
    [{ "createdDate": 1537933886000, "updatedDate": 1537933882000, "createdBy": "superadmin", "updatedBy": "superadmin", "isDeleted": false, "id": 411, "name": "退费管理", "parentId": null, "resKey": null, "resUrl": "refundIndex", "level": 0, "icon": null, "isHidden": false, "seq": 1, "description": "支付中心退费管理", "roles": null, "subRes": null, "action": null }, { "createdDate": 1537933957000, "updatedDate": 1537933960000, "createdBy": "superadmin", "updatedBy": "superadmin", "isDeleted": false, "id": 412, "name": "退费审核", "parentId": 411, "resKey": "refund", "resUrl": "refund", "level": 1, "icon": null, "isHidden": false, "seq": 1, "description": "退费审核", "roles": null, "subRes": null, "action": "refund" }]
)



