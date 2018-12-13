import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm, Modal, message } from 'antd';
import React, { Component } from "react";

const request = new RequestTool()
const confirm =  Modal.confirm

export default class RefundAuditingModel {

    @observable dataSource = []

    @observable pagination = {}

    @observable loading = false

    @observable modalVisible = false

    @observable auditingTradeNo = ""

    @observable form = {}

    @observable auditingLoading = false

    @observable order = {}

    @observable payments = []

    @observable refundInfo = observable.map({})

    @observable refundLoading = true

    @observable initStatus

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
            let lineName = "详情"
            if (record.status == 1) {
                lineName = "审核"
            }
            return (
                this.dataSource.length >= 1
                    ? (
                        <a href="javascript:;" onClick={() => this.handleDetail(record)}>{lineName}</a>
                    ) : null
            );
        }
    }];

    @action
    initialize() {
        this.form = {}
    }

    @action
    getRefundData(pageObj, pageSize) {
        this.loading = true
        let queryStr = request.comsposeQueryUrl(this.form)
        let page = pageObj ? pageObj.current : 1
        let size = pageSize ? pageSize : 10
        let param = {
            "url": "/paycenter/refund/list?page=" + page + "&size=" + size + "&" + queryStr,
            "success": this.dataFetch.bind(this)
        }

        request.commonFetch(param)

    }

    @action
    dataFetch(data) {
        this.loading = false
        this.dataSource = data.result.list;
        this.pagination.total = data.result.total
    }

    @action
    handleDetail(record) {
        this.auditingLoading = true
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
        let _this = this
        confirm({
            title: '操作确认',
            content: '确认审批？',
            onOk() {
                _this.confirmSubmit()
            },
            onCancel() {
                console.log('Cancel');
            },
        });

    }

    @action
    confirmSubmit() {
        if ( this.refundInfo.auditComment == null) {
            message.error("请填写理由")
            return
        }
        this.refundLoading = true
        let param = {
            "url": "/paycenter/refund/submit?refundNo=" + this.refundInfo.refundNo + "&status=" + this.refundInfo.status + "&auditComment=" + this.refundInfo.auditComment,
            "success": this.submitSuccess.bind(this)
        }
        request.commonFetch(param)
    }

    @action
    submitSuccess(data) {


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
        this.order.coupon = data.result.couponName
        this.payments = data.result.payments
        this.refundInfo = data.result.refund
        this.initStatus = this.refundInfo.status
    }

    @action
    refundInfoDesc(e) {
        this.refundInfo["auditComment"] = e.target.value
    }
    @action
    refundInfoStatus(e) {
        this.refundInfo["status"] = e.target.value

    }
}
