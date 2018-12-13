import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, Modal, DatePicker, Popconfirm } from 'antd';
import PaymentStatisticModel from '../../../models/statistic/PaymentStatisticModel'
import PaymentDetail from './PaymentDetail'

const Option = Select.Option;
const store = new PaymentStatisticModel()

@observer
class PaymentStatistic extends Component {
    componentWillMount() {
        store.initialize()
        store.getData()
    }
    render() {
        return (<div>
            <Row>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <Input placeholder="车场" onChange={(value) => { store.form.parkName = value.target.value }} /></Col>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <Input placeholder="车牌" onChange={(value) => { store.form.carNo = value.target.value }} /></Col>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Select placeholder="支付方式" style={{ width: '100%' }} onChange={(value) => { store.form.paymentType = value }}>
                        <Option value="0">请选择</Option>
                        <Option value="1">微信</Option>
                        <Option value="2">支付宝</Option>
                        <Option value="3">网付通</Option>
                        <Option value="4">共享余额</Option>
                        <Option value="5">优惠券支付</Option>
                        <Option value="7">线下支付</Option>
                    </Select></Col>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <DatePicker placeholder="支付日期" onChange={(date, dateString) => { store.form.createdDate = dateString }} /></Col>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Select placeholder="支付状态" style={{ width: '100%' }} onChange={(value) => { store.form.paymentStatus = value }}>
                        <Option value="0">请选择</Option>
                        <Option value="1">已支付</Option>
                        <Option value="2">未支付</Option>
                    </Select></Col>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Select placeholder="收支类型" style={{ width: '100%' }} onChange={(value) => { store.form.eRType = value }}>
                        <Option value="0">请选择</Option>
                        <Option value="1">进账</Option>
                        <Option value="2">退费</Option>
                    </Select></Col>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <Input placeholder="订单号" onChange={(value) => { store.form.tradeNo = value.target.value }} /></Col>
                <Col span={1} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Button type="primary" onClick={() => store.getData()}>查询</Button>
                </Col>
                <Col span={1} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Popconfirm title="确认导出数据吗？" onConfirm={() => store.exportData()}>
                        <Button type="primary">导出</Button>
                    </Popconfirm>
                </Col>
            </Row>

            <Table dataSource={store.dataSource} columns={store.columns} loading={store.loading}
                onChange={this.handleTableChange}
                pagination={store.pagination} />

            <Modal title='交易详情'
                visible={store.modalVisible}
                onOk={() => store.configOk()}
                confirmLoading={store.confirmLoading}
                onCancel={() => store.configCancel()}
                width="80%"
            >
                <PaymentDetail store={store} />
            </Modal>

        </div>)
    }

    @action
    handleTableChange = (pagination, filters, sorter) => {
        store.getData(pagination)
    }
}

export default PaymentStatistic