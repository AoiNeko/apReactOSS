import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm } from 'antd';
import React, { Component } from "react";

const request = new RequestTool()

export default class RefundAuditingModel {

    @observable dataSource = []

    @observable pagination = {}

    @observable loading = false

    @observable modalVisible = false

    @observable auditingTradeNo = ""

    @observable form = {

    }

    @observable order = {}

    @observable payments = []

    @observable refundInfo = observable.map({})

    @observable refundLoading = true

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
        key: 'amount',
        render: (text, record) => {
          return parseFloat(text / 100).toFixed(2) + "元"
        }
    }, {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        render: (text, record) => {
            if (text == 1) {
                return "申请"
            }
            else if (text = 2) {
                return "通过"
            }
            else if (text = 4) {
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
                        <Popconfirm title="确认审核?" onConfirm={() => this.handleDetail(record)}>
                            <a href="javascript:;">详情</a>
                        </Popconfirm>
                    ) : null
            );
        }
    }];

    @action
    getRefundData(current, pageSize) {
        this.loading = true
        let page = current ? current : 1
        let size = pageSize ? pageSize : 10
        let param = {
            "url": "/paycenter/refund/list?page=" + page + "&size=" + size,
            "success": this.dataFetch.bind(this)
        }

        request.commonFetch(param)

    }

    @action
    dataFetch(data) {
        this.loading = false
        this.dataSource = data.result.list;
        this.pagination.total = data.total
    }

    @action
    handleDetail(record) {
        console.log("row is ", record)
        this.auditingTradeNo = record.refundNo
        this.getOrderRefundInfo()
        this.modalVisible = true
    }

    @action
    auditingCancel() {
        this.modalVisible = false
    }

    @action
    auditingSubmit() {


        let param = {
            "url": "/paycenter/refund/submit?refundNo=" + this.refundInfo.refundNo + "&status=" + this.refundInfo.status + "&auditedComment=" + this.refundInfo.auditingDesc,
            "success": this.submitSuccess.bind(this)
        }
        request.commonFetch(param)

    }

    @action
    submitSuccess(data) {
        debugger
        this.modalVisible = false
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
    orderRefundInfoData(data) {
        this.refundLoading = false
        this.order = data.result.order
        this.payments = data.result.payments
        this.refundInfo = data.result.refund
    }

    @action
    refundInfoDesc(e) {
        this.refundInfo["auditingDesc"] = e.target.value
    }
    @action
    refundInfoStatus(e) {
        this.refundInfo["status"] = e.target.value

    }
}
