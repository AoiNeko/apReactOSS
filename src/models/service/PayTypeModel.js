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

    @action
    setChecked(isChecked) {
        this.isChecked = isChecked
    }

    @action
    setPayee(payee) {
        this.payee = payee
        this.payeeSelect = [{label: payee.text, key: payee.key}]
    }

    @action
    fetchPayee(value) {
        if (!value)
        { return }
        this.lastFetchId  += 1
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
        debugger
        this.dataSource = data.result.map(payee => ({
            text: payee.name,
            value: payee.id
        }))
    }

    @action
    handleChange(value) {
        this.fetching = false
        this.payeeSelect = value.length > 1? [value[value.length - 1]] : value
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
        if (this.payTypeId == null  || this.paysceneId == null) {
            return 
        }

        let param = {
            "url": "/paycenter/payee/config?payee=" + this.payee.key + "&payScene=" + this.paysceneId + "&payType="  + this.payTypeId,
            "success": this.payeeConfigFetched.bind(this)
        }

        let request = new RequestTool()
        request.commonFetch(param)

    }
 
    @action 
    payeeConfigFetched(data) {
        debugger
        this.payeeConfigJson = data.result.configJson
        this.payeeConfigDesc =data.result.desc
    }

    @action 
    setPayeeConfigJson(value) {
        this.payeeConfigJson =  value.target.value
    }

    
    @action 
    setPayeeDesc(value) {
        this.payeeConfigDesc =  value.target.value
    }
}