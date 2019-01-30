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
        this.getPaymentToolsData()
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
        this.getBusinessData()
    }

    @action
    dataFetch(data) {
        this.dataSource = data.result.list
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

    /**
     * 获取车场支付配置后 刷新配置组件内容
     */
    @action
    preConfig() {
        for (var key in this.paySceneMap) {
            if (this.paySceneMap.hasOwnProperty(key)) {
                var sceneModel = this.paySceneMap[key];
                sceneModel.setChecked(false)
                for (var typeKey in sceneModel.payTypeMap) {
                    if (sceneModel.payTypeMap.hasOwnProperty(typeKey)) {
                        var typeModel = sceneModel.payTypeMap[typeKey];
                        typeModel.clear()
                    }
                }

            }
        }
        for (var index = 0; index < this.parkConfig.length; index++) {
            var element = this.parkConfig[index];
            let model = this.paySceneMap[element.payScene]
            if (model) {
                model.setChecked(true)
                model.addPayType(element.payType, { key: element.payee, text: element.payeeName, activityText: element.activityText })

                for (var i in model.payTypeMap) {
                    var typeModel = model.payTypeMap[i]
                    typeModel.init(model, i, element.payScene, element.payee, element.activityText)
                }
            }
        }
    }

}