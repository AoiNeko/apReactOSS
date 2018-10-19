import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm } from 'antd';
import React, { Component } from "react";


const request = new RequestTool()

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
    @observable
    detailStore = {}
    @observable
    parkId = 0

    @action
    getParkPaymengConfigData(values) {

        this.loading = true
        let page = values ? values.current + 1 : 1
        let size = 10
        let param = {
            "url": "/paycenter/parkPaymentConfig/get?page=" + page + "&size=" + size,
            "success": this.dataFetch.bind(this)
        }

      
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
    setDetailStore(store) {
        this.detailStore = store
    }

    @action
    configOk() {
        debugger
        let parkPaymentArray = []
        let payeeConfigArray = []
        for (var sceneId in this.detailStore.paySceneMap) {
            if (this.detailStore.paySceneMap.hasOwnProperty(sceneId)) {
                var sceneModel = this.detailStore.paySceneMap[sceneId];
                if (sceneModel.isChecked) {
                    for (var typeId in sceneModel.payTypeMap) {
                        if (sceneModel.payTypeMap.hasOwnProperty(typeId)) {
                            var typeModel = sceneModel.payTypeMap[typeId];
                            if (typeModel.isChecked) {
                                let paymentObj = {
                                    "sceneId": sceneId,
                                    "typeId": typeId,
                                    "payee": typeModel.payeeSelect[0].key
                                }

                                let payeeConfigObj = {
                                    "payee": typeModel.payeeSelect[0].key,
                                    "sceneId": sceneId,
                                    "typeId": typeId,
                                    "configJson": typeModel.payeeConfigJson,
                                    "desc": typeModel.payeeConfigDesc
                                }
                                parkPaymentArray.push(paymentObj)
                                payeeConfigArray.push(payeeConfigObj)
                            }
                        }
                    }
                }
            }
        }
    
        let requestObj  = {
            "parkId": this.parkId,
            "parkPaymentConfig": parkPaymentArray,
            "payeeConfig": payeeConfigArray
        }

        let param = {
            "url": "/paycenter/parkPaymentConfig/save",
            "success": this.commitSuccess.bind(this),
            "body": requestObj
        }

        request.commonPost(param)
        
        this.modalVisible = false
    }

    @action
    commitSuccess(data) {
        debugger
    }


    @action
    configCancel() {
        this.modalVisible = false
    }

    @action
    handleDetail(record) {
        this.parkId = record.parkId
        this.modalVisible = true
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
        dataIndex: 'payScence',
        key: 'payScence',
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