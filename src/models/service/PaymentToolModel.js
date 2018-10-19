import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm } from 'antd';
import React, { Component } from "react";
export default class PaymentToolModel {
    @observable
    dataSource = []
    @observable
    loading = false



    @action
    getPaymentToolData(values) {

        this.loading = true
        let page = values ? values.current + 1 : 1
        let size = 10
        let param = {
            "url": "/paycenter/paymentTool/get?page=" + page + "&size=" + size,
            "success": this.dataFetch.bind(this)
        }

        let request = new RequestTool()
        request.commonFetch(param)
    }

    @action
    dataFetch(data) {
        this.loading = false
        this.dataSource = data.result.list
        // this.pagination.total = data.result.total
    }



    columns = [{
        title: '类型',
        dataIndex: 'type',
        key: 'type',
    }, {
        title: '名称',
        dataIndex: 'description',
        key: 'description',
    }, {
        title: '创建时间',
        dataIndex: 'createdDate',
        key: 'createdDate',
    }, {
        title: '备注',
        dataIndex: 'desc',
        key: 'desc',
    }];
}