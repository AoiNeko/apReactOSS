import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, Modal } from 'antd';
import ParkPaymentConfigModel from '../../models/service/ParkPaymentConfigModel'
const Option = Select.Option;

const store = new ParkPaymentConfigModel()



@observer
class ParkPaymentConfig extends Component {
    componentWillMount() {
        store.getParkPaymengConfigData()
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
                    <Button type="primary">新增</Button>
                </Col>
                <Col span={1} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Button type="primary" onClick={() => store.generalConfig()} > 通用配置</Button>
                </Col>

            </Row>

            <Table dataSource={store.dataSource} columns={store.columns} loading={store.loading}
                onChange={this.handleTableChange}
                pagination={store.pagination} />


            <Modal title= {store.modalTitle}
                visible={store.modalVisible}
                onOk={() => store.configOk()}
                confirmLoading={store.confirmLoading}
                onCancel={() => store.configCancel()}
                width='90%'
            >
                config 
            </Modal>

        </div>)
    }

    @action
    handleTableChange = (pagination, filters, sorter) => {
        store.getParkPaymengConfigData(pagination)
    }
}

export default ParkPaymentConfig