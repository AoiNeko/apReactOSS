import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm } from 'antd';
import React, { Component } from "react";
export default class PayTypeModel {
    @observable
    dataSource = []
    @observable
    loading = false

    @observable
    fetching = false

    @observable
    payee = null

    @observable
    isChecked = false

    @observable
    payeeSelect = []

    @observable
    paysceneId = null

    @observable
    payTypeId = null

    lastFetchId = 1;

    @observable
    currentFetchId = 1;

    @observable
    payeeConfigJson

    @observable
    payeeConfigDesc

    @observable
    activityText

    @action
    init(payscenceModel, payType, paySceneId, payeeId, activityText) {
        this.setPaysceneId(paySceneId)
        this.setPayType(payType)
        this.setActivityTextValue(activityText)
        this.payeeConfigJson = null
        this.payeeConfigDesc = null
        if (payscenceModel.hasType(payType)) {
            this.setChecked(true)
            let payee = payscenceModel.payeeMap[payType]
            this.setPayee(payee)
            this.fetchPayeeConfigJson()
        }
    }

    @action
    clear() {
        this.payee = null
        this.payeeSelect = []
        this.isChecked = false
        this.payeeConfigJson = ""
        this.payeeConfigDesc = ""
        this.activityText = ""
    }

    @action
    setChecked(isChecked) {
        this.isChecked = isChecked
    }

    @action
    setActivityTextValue(value) {
        this.activityText = value
    }

    /**
     * 
     * @param {text:"悦停", key: "1"} payee 
     */
    @action
    setPayee(payee) {
        this.payee = payee
        this.payeeSelect = [{ label: payee.text, key: payee.key }]
    }

    @action
    fetchPayee(value) {
        if (!value)
        { return }
        this.lastFetchId += 1
        this.fetching = true
        this.currentFetchId = this.lastFetchId;
        let param = {
            "url": "/paycenter/payee/search?name=" + value,
            "success": this.handlePayeeFetch.bind(this)
        }

        let request = new RequestTool()
        request.commonFetch(param)
    }

    @action
    handlePayeeFetch(data) {
        if (this.currentFetchId !== this.lastFetchId) {
            return
        }
        this.dataSource = data.result.map(payee => ({
            text: payee.name,
            value: payee.id
        }))
    }
    /**
     * 修改了收款人
     * @param {*} value 
     */
    @action
    handleChange(value) {
        this.fetching = false
        this.payeeSelect = value.length > 1 ? [value[value.length - 1]] : value
        this.payeeConfigJson = null
        this.payeeConfigDesc = null
        this.fetchPayeeConfigJson()
    }

    @action
    setPaysceneId(sceneId) {
        this.paysceneId = sceneId
    }
    @action
    setPayType(payType) {
        this.payTypeId = payType
    }

    @action
    fetchPayeeConfigJson() {

        let param = {
            "url": "/paycenter/payee/config?payee=" + this.payeeSelect[0].key + "&payScene=" + this.paysceneId + "&payType=" + this.payTypeId,
            "success": this.payeeConfigFetched.bind(this)
        }

        let request = new RequestTool()
        request.commonFetch(param)

    }

    @action
    payeeConfigFetched(data) {
        if (data.result && data.result.length > 0) {
            this.payeeConfigJson = data.result[0].configJson
            this.payeeConfigDesc = data.result[0].description
        }
    }

    @action
    setPayeeConfigJson(value) {
        this.payeeConfigJson = value.target.value
    }


    @action
    setPayeeDesc(value) {
        this.payeeConfigDesc = value.target.value
    }

    @action
    setActivityText(value) {
        this.activityText = value.target.value
    }
}