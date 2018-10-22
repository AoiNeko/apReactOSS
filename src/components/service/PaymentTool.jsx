import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, Modal } from 'antd';
import PaymentToolModel from '../../models/service/PaymentToolModel'
const Option = Select.Option;

const store = new PaymentToolModel()



@observer
class PaymentTool extends Component {
    componentWillMount() {
        store.getPaymentToolData()
    }
    render() {
        return (<div>
            <Row>
                <Col span={6} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <Input placeholder="名称" onChange={(value) => { store.form.name = value.target.value }} /></Col>
                <Col span={4} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Select placeholder="请选择状态" style={{ width: '100%' }} onChange={(value) => { store.form.status = value }}>
                        <Option value="0">启用</Option>
                        <Option value="1">禁用</Option>
                    </Select></Col>
                <Col span={4} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Select placeholder="请选择支付类型" style={{ width: '100%' }} onChange={(value) => { store.form.type = value }}>
                        <Option value="ap">自有</Option>
                        <Option value="poly">保利</Option>
                    </Select>
                </Col>

                <Col span={1} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Button type="primary">查询</Button>
                </Col>
                <Col span={1} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Button type="primary">编辑</Button>
                </Col>
                <Col span={1} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Button type="primary" onClick={() => store.createPaymentType()}>新增</Button>
                </Col>
            </Row>

            <Table dataSource={store.dataSource} columns={store.columns} loading={store.loading}
                onChange={this.handleTableChange}
                pagination={store.pagination} />

            <Modal title='新增支付工具'
                visible={store.modalVisible}
                onOk={() => store.configOk()}
                confirmLoading={store.confirmLoading}
                onCancel={() => store.configCancel()}
                width='90%'
            >
                <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                    <Col span={8} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                        <Input placeholder="支付类型ID" value={store.typeId} onChange={(value) => store.setPaymentTypeId(value)}/> 
                    </Col>
                    <Col span={8} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                        <Input placeholder="支付类型名称" value={store.typeName}  onChange={(value) => store.setPaymentTypeName(value)}/>
                    </Col>
                </Row>
            </Modal>
        </div>)
    }

    @action
    handleTableChange = (pagination, filters, sorter) => {
        store.getPaymentToolData(pagination)
    }
}

export default PaymentTool