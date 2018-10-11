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
    lastFetchId = 1;

    @observable
    currentFetchId = 1;

    @action
    setChecked(isChecked) {
        this.isChecked = isChecked
    }

    @action
    setPayee(payee) {
        debugger
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

        this.dataSource = data.result.list.map(payee => ({
            text: payee.desc,
            value: payee.id
        }))
    }

    @action
    handleChange(value) {
        this.fetching = false
        this.payeeSelect = value.length > 1? [value[value.length - 1]] : value
    }

    @action 
    setPayeeConfigJson(value) {
        debugger
    }

    
    @action 
    setPayeeDesc(value) {
        debugger
    }
}