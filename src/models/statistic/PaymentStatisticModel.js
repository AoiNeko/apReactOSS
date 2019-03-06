import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm, message } from 'antd';
import React, { Component } from "react";

const request = new RequestTool()
export default class PaymentStatisticModel {
    @observable
    dataSource = []
    @observable
    loading = false
    @observable form = {}
    @observable
    modalVisible = false
    @observable
    confirmLoading = false
    @observable pagination = {}
    @observable
    viewPaymentId = null
    @observable
    paymentInfo = observable.map({})
    @observable
    paymentLoading = false

    @action
    initialize() {
        this.form = {}
        this.dataSource = []
    }

    @action
    getPaymentInfo() {
        this.confirmLoading = true
        this.paymentLoading = true
        let param = {
            "url": "/paycenter/payment/statistic/detail?tempOrderPaymentId=" + this.viewPaymentId,
            "success": this.paymentDetailFetch.bind(this),
            "fail": () => {
                message.error("请求失败")
                this.loading = false
            }
        }
        request.commonFetch(param)
    }

    @action
    paymentDetailFetch(data) {
        debugger
        this.paymentLoading = false
        this.confirmLoading = false
        this.paymentInfo = data.result
    }

    @action
    configOk() {
        this.modalVisible = false
    }

    @action
    configCancel() {
        this.modalVisible = false
    }

    @action
    getData(values) {
        let queryUrl = request.comsposeQueryUrl(this.form)
        this.loading = true
        let page = values ? values.current : 1
        let size = 10
        let param = {
            "url": "/paycenter/payment/statistic/get?page=" + page + "&size=" + size + "&" + queryUrl,
            "success": this.dataFetch.bind(this),
            "fail": () => {
                message.error("请求失败")
                this.loading = false
            }
        }
        request.commonFetch(param)
    }

    exportData() {

        let queryUrl = request.comsposeQueryUrl(this.form)
        window.location.href = "/paycenter/payment/statistic/export?" + queryUrl
    }


    @action
    dataFetch(data) {
        this.loading = false
        this.dataSource = data.result.list
        this.pagination.total = data.result.total
    }

    @action
    handleDetail(record) {
        this.confirmLoading = true
        this.paymentLoading = true
        this.modalVisible = true
        this.viewPaymentId = record.tempOrderPaymentId
        this.getPaymentInfo()
    }


    columns = [{
        title: '订单号',
        dataIndex: 'tradeNo',
        key: 'tradeNo'
    }, {
        title: '外部流水号',
        dataIndex: 'outTradeNo',
        key: 'outTradeNo'
    }, {
        title: '发起时间',
        dataIndex: 'createdDate',
        key: 'createdDate'
    }, {
        title: '支付时间',
        dataIndex: 'paymentDate',
        key: 'paymentDate'
    }, {
        title: '车场',
        dataIndex: 'park',
        key: 'park'
    }, {
        title: '车牌',
        dataIndex: 'plateNo',
        key: 'plateNo'
    },
    {
        title: '支付金额',
        dataIndex: 'amount',
        key: 'amount',
        render: (data) => {
            return parseFloat(data / 100).toFixed(2)
        }
    },
    {
        title: '支付方式',
        dataIndex: 'paymentType',
        key: 'paymentType',
        render: (data) => {
            let result = ""
            switch (data) {
                case 1:
                    result = "微信支付"
                    break
                case 2:
                    result = "支付宝"
                    break
                case 3:
                    result = "网付通"
                    break
                case 4:
                    result = "余额支付"
                    break
                case 5:
                    result = "优惠券支付"
                    break
                case 7:
                    result = "线下钱包"
                    break
                default:
                    result = "未知类型"
            }
            return result
        }
    },
    {
        title: '收支类型',
        dataIndex: 'paymentDesc',
        key: 'paymentDesc',
        render: (data) => {
            let result = ""
            if (data == 1) {
                result = "进账"
            }
            else if (data == 2) {
                result = "退费"
            }

            return result
        }
    },
    {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (data) => {
            let result = "未支付"
            if ((data & 1) > 0) {
                result = "已支付"
            }
            else if ((data & 2) > 0) {
                result = "退款申请"
            }
            else if ((data & 4) > 0) {
                result = "已退款"
            }

            return result
        }
    }, {
        title: ' ',
        dataIndex: 'operation',
        key: 'operation',
        render: (text, record) => {
            return (<a href="javascript:;" onClick={() => this.handleDetail(record)}>详情</a>)
        }
    }];
}