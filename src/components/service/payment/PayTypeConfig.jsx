import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, Switch, Spin } from 'antd';
import PayTypeModel from '../../../models/service/PayTypeModel'
const Option = Select.Option;
const { TextArea } = Input

@observer
class PayTypeConfig extends Component {
    componentWillMount() {
        let { payType } = this.props
        const { store } = this.props
        const { paySceneId } = this.props
        let typeModel = new PayTypeModel()
        let payscenceModel = store.getPaySceneModel(paySceneId)
        payscenceModel.setPayTypeMap(payType.type, typeModel)
        typeModel.init(payscenceModel, payType.type, paySceneId)
    }

    render() {
        let { payType } = this.props
        const { store } = this.props
        const { paySceneId } = this.props
        let payscenceModel = store.getPaySceneModel(paySceneId)
        let typeModel = payscenceModel.getPayTypeMap(payType.type)
        return (<div style={{ "width": "100%", "padding": "2px"}}>
            <Row>
                <Col span={6}>
                    <div>{payType.name}</div>
                </Col>
                <Col span={6}>
                    <Switch checkedChildren="开" unCheckedChildren="关" checked={typeModel.isChecked} onChange={(checked) => { typeModel.setChecked(checked) }} />
                </Col>
                {
                    typeModel.isChecked ?
                        this.renderPayee(payType, typeModel) : ""
                }

            </Row>
            {
                typeModel.isChecked ?
                    this.renderPayeeConfig(payType, typeModel) : ""
            }

        </div>)
    }

    renderPayee(payType, typeModel) {
        return (
            <Col span={3}>
                <Select
                    mode="multiple"
                    labelInValue
                    value={typeModel.payeeSelect}
                    placeholder="请选择收款人"
                    notFoundContent={typeModel.fetching ? <Spin size="small" /> : null}
                    filterOption={false}
                    onSearch={(value) => typeModel.fetchPayee(value)}
                    onChange={(value) => typeModel.handleChange(value)}
                    style={{ width: '100%' }}
                >
                    {typeModel.dataSource.map(d => <Option key={d.value}>{d.text}</Option>)}
                </Select>
            </Col>
        )


    }

    renderPayeeConfig(payType, typeModel) {
        return (
            <div>
                <Row>
                    <Col span={12}>
                        <TextArea autosize placeholder="填写收款人的JSON格式的信息对" value={typeModel.payeeConfigJson} onChange={(value) => typeModel.setPayeeConfigJson(value)}></TextArea>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <Input placeholder="填写备注" value={typeModel.payeeConfigDesc} onChange={(value) => typeModel.setPayeeDesc(value)}></Input>
                    </Col>
                </Row>
            </div>
        )

    }

}

export default PayTypeConfig