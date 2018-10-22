import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm } from 'antd';
import React, { Component } from "react";

const request = new RequestTool()
export default class PaymentToolModel {
    @observable
    dataSource = []
    @observable
    loading = false
    @observable
    modalVisible = false

    @observable
    confirmLoading = false

    @observable
    typeId = null
    @observable
    typeName = null

    @action
    configOk() {
        debugger
        this.confirmLoading = true
        let data = {
            typeId: this.typeId,
            typeName: this.typeName
        }
        let param = {
            body: data,
            url: "/paycenter/paymentTool/save",
            success: this.success.bind(this)
        }
        request.commonPost(param)
    }

    @action
    success() {
        this.confirmLoading = false
        this.modalVisible = false
        this.getPaymentToolData()
    }

    @action
    setPaymentTypeName(value) {
        this.typeName = value.target.value
    }

    @action
    setPaymentTypeId(value) {
        this.typeId = value.target.value
    }

    @action
    configCancel() {
        this.modalVisible = false
    }

    @action
    createPaymentType() {
        this.typeId = null
        this.typeName = null
        this.modalVisible = true
        
    }


    @action
    getPaymentToolData(values) {

        this.loading = true
        let page = values ? values.current + 1 : 1
        let size = 10
        let param = {
            "url": "/paycenter/paymentTool/get?page=" + page + "&size=" + size,
            "success": this.dataFetch.bind(this)
        }


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
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '创建时间',
        dataIndex: 'createdDate',
        key: 'createdDate',
        render: (data) => {
            return new Date(data).format("yyyy-MM-dd hh:mm")
        }
    }, {
        title: '备注',
        dataIndex: 'desc',
        key: 'desc',
    }];
}