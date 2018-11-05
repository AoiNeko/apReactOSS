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
    }



    columns = [{
        title: '收款人',
        dataIndex: 'payeeName',
        key: 'payeeName',
    }, {
        title: '支付工具',
        dataIndex: 'payTypeName',
        key: 'payTypeName',
    }, {
        title: '业务场景',
        dataIndex: 'paySceneName',
        key: 'paySceneName',
    },{
        title: '支付配置',
        dataIndex: 'configJson',
        key: 'configJson',
    },{
        title: '备注',
        dataIndex: 'desc',
        key: 'desc',
    }];
}