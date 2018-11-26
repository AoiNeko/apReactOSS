import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm, message } from 'antd';
import React, { Component } from "react";

const request = new RequestTool()
export default class RefundStatisticModel {
    @observable
    dataSource = []
    @observable
    pagination = {}

    @observable form = {}
    @observable
    loading = false

    @observable
    confirmLoading = false







    @action
    getData(values) {

        this.loading = true
        let queryStr = request.comsposeQueryUrl(this.form)
        let page = values ? values.current : 1
        let size = 10
        let param = {
            "url": "/paycenter/order/abnormal/list?page=" + page + "&size=" + size + "&" + queryStr,
            "success": this.dataFetch.bind(this),
            "fail": () => { message.error("请求失败") }
        }
        request.commonFetch(param)
    }


    @action
    orderRefundInfoData(data) {
        this.refundLoading = false
        this.order = data.result.order
        this.order.coupon = data.result.couponName
        this.payments = data.result.payments
        this.refundInfo = data.result.refund
    }

    @action
    dataFetch(data) {
        this.loading = false
        this.dataSource = data.result.list
        this.pagination.total = data.result.total
    }



    @observable columns = [{
        title: '订单号',
        dataIndex: 'tradeNo',
        key: 'tradeNo',
    }, {
        title: '车场',
        dataIndex: 'park',
        key: 'park',
    }, {
        title: '车牌',
        dataIndex: 'carNo',
        key: 'carNo',
    }, {
        title: '订单金额',
        dataIndex: 'totalAmount',
        key: 'totalAmount',
    }, {
        title: '支付金额',
        dataIndex: 'paidAmount',
        key: 'paidAmount',
    }];
}