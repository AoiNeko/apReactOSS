import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm } from 'antd';
import React, { Component } from "react";
export default class ParkPaymentConfigDetailModel {
    @observable
    dataSource = []
    @observable
    loading = false

    @observable
    parkConfig = []
    @observable
    parkId = null
    @observable
    paySceneMap = {}
    @action
    getBusinessData(values) {
        this.loading = true
        let page = values ? values.current + 1 : 1
        let size = 10
        let param = {
            "url": "/paycenter/bussinessMgt/get?page=" + page + "&size=" + size,
            "success": this.dataFetch.bind(this)
        }

        let request = new RequestTool()
        request.commonFetch(param)
    }

    @action
    dataFetch(data) {
        debugger
        this.dataSource = data.result.list
        if (this.pagination) {
            this.pagination.total = data.result.total
        }
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

    @action
    parkPaymentConfigGet(data) {
        this.parkConfig = data.result
    }

    @action
    setCheckedMap(sceneId, isChecked) {
        alert(sceneId  + "  "  + isChecked)
        this.paySceneMap[sceneId] = isChecked
    }

}