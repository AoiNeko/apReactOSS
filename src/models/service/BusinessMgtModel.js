import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm } from 'antd';
import React, { Component } from "react";

const request = new RequestTool()
export default class BusinessMgtModel {
    @observable
    dataSource = []
    @observable
    loading = false

    @observable
    modalVisible = false

    @observable
    confirmLoading = false

    @observable
    sceneId = null
    @observable
    sceneName = null

    @action
    configOk() {
        this.confirmLoading = true
        let data = {
            sceneId: this.sceneId,
            sceneName: this.sceneName
        }
        let param = {
            body: data,
            url: "/paycenter/bussinessMgt/save",
            success: this.success.bind(this)
        }
        request.commonPost(param)
    }

    @action
    success() {
        this.confirmLoading = false
        this.modalVisible = false
        this.getBusinessData()
    }

    @action
    setPaymentSceneName(value) {
        this.sceneName = value.target.value
    }

    @action
    setPaymentSceneId(value) {
        this.sceneId = value.target.value
    }

    @action
    configCancel() {
        this.modalVisible = false
    }


    @action
    createPaymentScene() {
        this.sceneId = null
        this.sceneName = null
        this.modalVisible = true

    }

    @action
    getBusinessData(values) {

        this.loading = true
        let page = values ? values.current : 1
        let size = 10
        let param = {
            "url": "/paycenter/bussinessMgt/get?page=" + page + "&size=" + size,
            "success": this.dataFetch.bind(this)
        }


        request.commonFetch(param)
    }

    @action
    dataFetch(data) {
        this.loading = false
        this.dataSource = data.result.list
    }



    columns = [{
        title: '支付场景',
        dataIndex: 'name',
        key: 'name',
    }, {
        title: '场景编码',
        dataIndex: 'scene',
        key: 'scene',
    }, {
        title: '创建时间',
        dataIndex: 'createdDate',
        key: 'createdDate',
        render: (data) => {
            return new Date(data).format("yyyy-MM-dd hh:mm")
        }
    }, {
        title: '备注',
        dataIndex: 'desc',
        key: 'desc',
    }];
}