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
    payeeId
    @observable
    payeeName
    @observable
    desc
    @observable
    modalVisible = false

    @observable
    confirmLoading = false

    @observable order = {}

    @observable payments = []

    @observable refundInfo = observable.map({})

    @observable refundLoading = true

    @observable initStatus



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
        this.loading = true
        let queryStr = request.comsposeQueryUrl(this.form)
        let page = values ? values.current : 1
        let size = 10
        let param = {
            "url": "/paycenter/refund/list?page=" + page + "&size=" + size + "&" + queryStr,
            "success": this.dataFetch.bind(this),
            "fail": () => { message.error("请求失败") }
        }
        request.commonFetch(param)
    }

    exportData() {
        let queryUrl = request.comsposeQueryUrl(this.form)
        window.location.href = "/paycenter/refund/export?" + queryUrl
    }

    @action
    getOrderRefundInfo() {
        this.refundLoading = true
        let param = {
            "url": "/paycenter/refund/order?refundNo=" + this.auditingTradeNo,
            "success": this.orderRefundInfoData.bind(this)
        }
        request.commonFetch(param)
    }

    @action
    handleDetail(record) {
        this.confirmLoading = true
        this.paymentLoading = true
        this.modalVisible = true
        this.auditingTradeNo = record.refundNo
        this.getOrderRefundInfo()
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
        title: '车牌号',
        dataIndex: 'carNo',
        key: 'carNo',
    }, {
        title: '订单号',
        dataIndex: 'tradeNo',
        key: 'tradeNo',
    }, {
        title: '进场时间',
        dataIndex: 'enterTime',
        key: 'enterTime',
    }, {
        title: '出场时间',
        dataIndex: 'leaveTime',
        key: 'leaveTime',
    }, {
        title: '申请时间',
        dataIndex: 'applyTime',
        key: 'applyTime',
    }, {
        title: '申请人',
        dataIndex: 'apply',
        key: 'apply',
    }, {
        title: '退费金额',
        dataIndex: 'amount',
        key: 'amount'
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (text, record) => {
            if (text == 1) {
                return "待审核"
            }
            else if (text == 2) {
                return "通过"
            }
            else if (text == 4) {
                return "驳回"
            }
        }
    }, {
        title: '',
        dataIndex: 'operation',
        render: (text, record) => {

            return (
                this.dataSource.length >= 1
                    ? (
                        <a href="javascript:;" onClick={() => this.handleDetail(record)}>详情</a>
                    ) : null
            );
        }
    }];
}