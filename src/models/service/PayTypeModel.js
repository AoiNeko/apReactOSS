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
    isChecked = false

    @action
    setChecked(isChecked) {
        this.isChecked = isChecked
    }

    

}