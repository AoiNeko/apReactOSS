import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm } from 'antd';
import React, { Component } from "react";
export default class PayeeConfigModel {
    @observable
    dataSource = []
    @observable
    loading = false



    @action
    getPayeeData(values) {

        this.loading = true
        let page = values ? values.current + 1 : 1
        let size = 10
        let param = {
            "url": "/paycenter/payeeConfig/get?page=" + page + "&size=" + size,
            "success": this.dataFetch.bind(this)
        }

        let request = new RequestTool()
        request.commonFetch(param)
    }

    @action
    dataFetch(data) {
        this.loading = false
        this.dataSource = data.result.list
        this.pagination.total = data.result.total
    }



    columns = [{
        title: '收款人',
        dataIndex: 'payee',
        key: 'payee',
    }, {
        title: '支付工具',
        dataIndex: 'paymentTool',
        key: 'paymentTool',
    }, {
        title: '业务场景',
        dataIndex: 'business',
        key: 'business',
    }, {
        title: '备注',
        dataIndex: 'desc',
        key: 'desc',
    }];
}