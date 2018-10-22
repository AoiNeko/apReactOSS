import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm , message } from 'antd';
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
    @observable
    isNewParkConfig = false
    //新增车场配置时选中的车场信息
    @observable
    parkSelect = []
    //车场下拉列表内容
    @observable
    parksSource = []
    @observable
    fetching = false
    @observable
    currentFetchId = 0
    @observable
    lastFetchId = 0

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
        this.modalTitle = '通用支付配置'
        this.isNewParkConfig = false
        this.parkId = 0
        if (this.detailStore.init) {
            this.detailStore.init(this.parkId)
        }
        this.modalVisible = true
    }

    @action
    newParkConfig() {
        this.isNewParkConfig = true
        this.modalTitle = "新增车场配置"
        this.parkId = null
        if (this.detailStore.init) {
            this.detailStore.init(this.parkId)
        }
        this.modalVisible = true

    }

    @action
    editParkConfig(parkId) {
        this.isNewParkConfig = false
        this.modalTitle = "修改车场配置"
        debugger
        this.parkId = parkId
        if (this.detailStore.init) {
            this.detailStore.init(this.parkId)
        }
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
    fetchPark(value) {

        if (!value)
        { return }
        this.lastFetchId += 1
        this.fetching = true
        this.currentFetchId = this.lastFetchId;
        let param = {
            "url": "/paycenter/park/search?name=" + value,
            "success": this.fetchComplete.bind(this)
        }

        let request = new RequestTool()
        request.commonFetch(param)
       

    }

    @action
    fetchComplete(data) {
        this.fetching = false
        if (this.currentFetchId !== this.lastFetchId) {
            return
        }
        debugger
        this.parksSource = data.result.map(park => ({
            text: park.name,
            value: park.id
        }))
    }

    @action
    handleParkSelectChange(value) {
        this.fetching = false
        this.parkSelect = value.length > 1 ? [value[value.length - 1]] : value
    }

    @action
    setDetailStore(store) {
        this.detailStore = store
    }

    @action
    configOk() {
        debugger

        if (this.isNewParkConfig && this.parkSelect.length == 0) {
            message.error("选择配置的车场")
            return 
        }

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
        
        if (this.isNewParkConfig && this.parkSelect.length > 0) {
            this.parkId = this.parkSelect[0].key
        }

        let requestObj = {
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
        this.editParkConfig(this.parkId)
    }


    columns = [{
        title: 'id',
        dataIndex: 'parkId',
        key: 'parkId',
    }, {
        title: '车场名',
        dataIndex: 'parkName',
        key: 'parkName',
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