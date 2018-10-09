import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm } from 'antd';
import React, { Component } from "react";
export default class ParkPaymentConfigModel {
    @observable
    dataSource = []
    @observable
    loading = false
    @observable
    modalVisible = false
    @observable
    comfirmLoading = false
    @observable
    modalTitle = '通用支付配置'

    @action
    getParkPaymengConfigData(values) {

        this.loading = true
        let page = values ? values.current + 1 : 1
        let size = 10
        let param = {
            "url": "/paycenter/parkPaymentConfig/get?page=" + page + "&size=" + size,
            "success": this.dataFetch.bind(this)
        }

        let request = new RequestTool()
        request.commonFetch(param)
    }

    @action
    generalConfig() {
        this.modalVisible = true
    }

    @action
    dataFetch(data) {
        this.loading = false
        this.dataSource = data.result.list
        if (this.pagination) {
            this.pagination.total = data.result.total
        }

    }

    @action
    configOk() {
        this.modalVisible = false
    }


    @action
    configCancel() {
        this.modalVisible = false
    }


    columns = [{
        title: 'id',
        dataIndex: 'id',
        key: 'id',
    }, {
        title: '车场名',
        dataIndex: 'parkName',
        key: 'parkName',
    }, {
        title: '业务场景',
        dataIndex: 'business',
        key: 'business',
    }, {
        title: '操作',
        dataIndex: 'operation',
        render: (text, record) => {
            return (
                this.dataSource.length >= 1
                    ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDetail(record)}>
                            <a href="javascript:;">详情</a>
                        </Popconfirm>
                    ) : null
            );
        }
    }];
}