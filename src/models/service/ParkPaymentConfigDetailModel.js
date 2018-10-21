import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm } from 'antd';
import React, { Component } from "react";
export default class ParkPaymentConfigDetailModel {
    @observable
    dataSource = []
    @observable
    paymentTools = []
    @observable
    loading = false

    @observable
    parkConfig = []
    @observable
    parkId = null
    @observable
    paySceneMap = {}
    @observable
    payTypeArr = []


    @action
    init(parkId) {
        this.parkId = parkId
        this.getBusinessData()
    }

    @action
    getBusinessData() {
        this.loading = true
        let page = 1
        let size = 100
        let param = {
            "url": "/paycenter/bussinessMgt/get?page=" + page + "&size=" + size,
            "success": this.dataFetch.bind(this)
        }
        let request = new RequestTool()
        request.commonFetch(param)
        this.getPaymentToolsData()
    }

    @action
    getPaymentToolsData(values) {
        this.loading = true
        let param = {
            "url": "/paycenter/paymentTool/get",
            "success": this.paymentToolsFetch.bind(this)
        }

        let request = new RequestTool()
        request.commonFetch(param)
    }

    @action
    paymentToolsFetch(data) {
        this.loading = false

        this.paymentTools = data.result.list;

    }

    @action
    dataFetch(data) {
        this.dataSource = data.result.list

        debugger
        if (this.parkId !== null) {
            let param = {
                "url": "/paycenter/parkPaymentConfig/detail",
                "success": this.parkPaymentConfigGet.bind(this)
            }

            if (this.parkId) {
                param.url += "?parkId=" + this.parkId
            }
            let request = new RequestTool()
            request.commonFetch(param)
        }
        else {
            this.parkConfig = []
            this.preConfig()
        }

    }

    @action
    parkPaymentConfigGet(data) {
        debugger
        this.parkConfig = data.result
        this.preConfig()
    }

    @action
    setParkId(id) {
        this.parkId = id
    }

    @action
    setPaySceneModel(sceneId, model) {
        this.paySceneMap[sceneId] = model
    }

    getPaySceneModel(sceneId) {
        return this.paySceneMap[sceneId]
    }

    @action
    preConfig() {

        for (var index = 0; index < this.parkConfig.length; index++) {
            var element = this.parkConfig[index];
            let model = this.paySceneMap[element.payScene]
            if (model) {
                model.setChecked(true)
                model.addPayType(element.payType, { key: element.payee, text: element.payeeDesc })
            }
        }
    }

}