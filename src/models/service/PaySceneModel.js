import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm } from 'antd';
import React, { Component } from "react";
export default class PaySceneModel {
    @observable
    dataSource = []
    @observable
    loading = false

    @observable
    isChecked = false
    @observable
    sceneId = null
    @observable
    payTypeArr = []
    @observable
    payTypeMap = {}

    @action
    setChecked(isChecked) {
        this.isChecked = isChecked
    }

    @action
    setSceneId(id) {
        this.sceneId = id
    }

    @action
    addPayType(payType) {
        this.payTypeArr.push(payType)
    }

    @action
    setPayTypeMap(id, model) {
        this.payTypeMap[id] = model
    }

    @action
    getPayTypeMap(id) {
        return this.payTypeMap[id]
    }

    
    hasType (typeId) {
        for (var index = 0; index < this.payTypeArr.length; index++) {
            var element = this.payTypeArr[index];
            if (element == typeId) {
                return true
            }
        }

        return false
    }
}