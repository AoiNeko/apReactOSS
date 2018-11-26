import { observable, computed, action } from "mobx";
import RequestTool from "../RequestTool"
import { Popconfirm, message } from 'antd';
import React, { Component } from "react";

const request = new RequestTool()
export default class PayeeConfigModel {
    @observable
    dataSource = []
    @observable
    loading = false
    @observable
    payeeId
    @observable
    payeeName
    @observable
    desc
    @observable
    modalVisible = false
    confirmLoading = false

    @action
    setPayeeId(value) {
        this.payeeId = value.target.value
    }
    @action
    setPayeeName(value) {
        this.payeeName = value.target.value
    }

    @action
    setDesc(value) {
        this.desc = value.target.value
    }


    @action
    newPayee() {
        this.modalVisible = true
    }


    @action
    configOk() {
        let param = {
            "url": "/paycenter/payee/add?name=" + this.payeeName + "&id=" + this.payeeId + "&desc=" + this.desc,
            "success": this.saveSuccess.bind(this),
             "fail": ()=>{ message.error("请求失败")}
        }

        request.commonFetch(param)
      
    }

    @action
    saveSuccess() {
        message.success("操作成功")
        this.modalVisible = false
    }

    @action
    configCancel() {
        this.modalVisible = false
    }


    @action
    getPayeeData(values) {

        this.loading = true
        let page = values ? values.current : 1
        let size = 10
        let param = {
            "url": "/paycenter/payeeConfig/get?page=" + page + "&size=" + size,
            "success": this.dataFetch.bind(this),
            "fail": ()=>{ message.error("请求失败")}
        }
        request.commonFetch(param)
    }




    @action
    dataFetch(data) {
        this.loading = false
        this.dataSource = data.result.list
    }



    columns = [{
        title: '收款人',
        dataIndex: 'payeeName',
        key: 'payeeName',
        width: "5vw"
    }, {
        title: '支付工具',
        dataIndex: 'payTypeName',
        key: 'payTypeName',
        width: "5vw"
    }, {
        title: '业务场景',
        dataIndex: 'paySceneName',
        key: 'paySceneName',
        width: "10vw"
    }, {
        title: '支付配置',
        dataIndex: 'configJson',
        key: 'configJson',
        width: "50vw"
    }, {
        title: '备注',
        dataIndex: 'desc',
        key: 'desc',
    }];
}