import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, Modal } from 'antd';
import BusinessMgtModel from '../../models/service/BusinessMgtModel'
const Option = Select.Option;

const store = new BusinessMgtModel()



@observer
class BussinessMgt extends Component {
    componentWillMount() {
        store.getBusinessData()
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
                    <Button type="primary"  onClick={() => store.createPaymentScene()}>新增</Button>
                </Col>
            </Row>

            <Table dataSource={store.dataSource} columns={store.columns} loading={store.loading}
                onChange={this.handleTableChange}
                pagination={store.pagination} />

            <Modal title='新增支付业务场景'
                visible={store.modalVisible}
                onOk={() => store.configOk()}
                confirmLoading={store.confirmLoading}
                onCancel={() => store.configCancel()}
                width='90%'
            >
                <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                    <Col span={8} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                        <Input placeholder="支付类型ID" value={store.sceneId} onChange={(value) => store.setPaymentSceneId(value)} />
                    </Col>
                    <Col span={8} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                        <Input placeholder="支付类型名称" value={store.sceneName} onChange={(value) => store.setPaymentSceneName(value)} />
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

export default BussinessMgt