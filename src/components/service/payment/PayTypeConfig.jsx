import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, Switch } from 'antd';
import PayTypeModel from '../../../models/service/PayTypeModel'
const Option = Select.Option;

@observer
class PayTypeConfig extends Component {
    componentWillMount() {
        let { payType } = this.props
        const { store } = this.props
        const { paySceneId } = this.props
        let typeModel = new PayTypeModel()
        let payscenceModel = store.getPaySceneModel(paySceneId)
        payscenceModel.setPayTypeMap(payType.id, typeModel)

        if (payscenceModel.hasType(payType.id)) {
            typeModel.setChecked(true)
        }
    }
    render() {
        let { payType } = this.props
        const { store } = this.props
        const { paySceneId } = this.props
        let payscenceModel = store.getPaySceneModel(paySceneId)
        let typeModel = payscenceModel.getPayTypeMap(payType.id)

        return (<div style={{ "width": "100%", "padding": "2px" }}>
            <Row>
                <Col span={6}>
                    <div>{payType.name}</div>
                </Col>
                <Col span={6}>
                    <Switch checkedChildren="开" unCheckedChildren="关" checked={typeModel.isChecked} onChange={(checked) =>{typeModel.setChecked(checked)}} />
                </Col>
                {
                    typeModel.isChecked ?
                    this.renderPayeeConfig(payType) : ""
                }
            </Row>

        </div>)
    }

    renderPayeeConfig(payType) {
        if (payType.type == 1) {
            return ""
        }

        return (
            <Col span={12}>
                <div>配置收款人</div>
                <div>收款人信息</div>
            </Col>
        )


    }

}

export default PayTypeConfig