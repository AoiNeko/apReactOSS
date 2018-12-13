import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, Popconfirm, DatePicker, Modal } from 'antd';
import RefundAuditingModel from '../../models/service/RefundAuditingModel'
import OrderRefundAuditing from './auditing/OrderRefundAuditing'
const Option = Select.Option;

const store = new RefundAuditingModel();


@observer
class RefundAuditing extends Component {
    componentWillMount() {
        store.initialize()
        store.getRefundData()
    }
    render() {
        return (<div>
            <Row>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <Input placeholder="车牌" onChange={(value) => { store.form.carNo = value.target.value }} /></Col>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Select placeholder="请选择状态" style={{ width: '100%' }} onChange={(value) => { store.form.status = value }}>
                        <Option value="0">请选择</Option>
                        <Option value="1">待审核</Option>
                        <Option value="2">已审核</Option>
                    </Select></Col>

                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <DatePicker placeholder="进场时间" onChange={(date, dateString) => { store.form.enterTime = dateString }} /></Col>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <DatePicker placeholder="出场时间" onChange={(date, dateString) => { store.form.leaveTime = dateString }} /></Col>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <DatePicker placeholder="申请时间" onChange={(date, dateString) => { store.form.applyTime = dateString }} /></Col>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <Input placeholder="申请人" onChange={(value) => { store.form.apply = value.target.value }} /></Col>

                <Col span={1} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Button type="primary" onClick={() => store.getRefundData()}>查询</Button>
                </Col>
            </Row>

            <Table dataSource={store.dataSource}
                columns={store.columns}
                loading={store.loading}
                onChange={this.handleTableChange}
                pagination={store.pagination} />


            <Modal title="订单审核"
                visible={store.modalVisible}
                onOk={() => store.auditingSubmit()}
                confirmLoading={store.refundLoading}
                onCancel={() => store.auditingCancel()}
                width='80%'
            >
                <OrderRefundAuditing store={store} />
            </Modal>
        </div>)
    }

    @action
    handleTableChange = (pagination, filters, sorter) => {
        store.getRefundData(pagination)
    }
}

export default RefundAuditing