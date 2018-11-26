import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, Modal,DatePicker,Popconfirm } from 'antd';
import RefundStatisticModel from '../../../models/statistic/RefundStatisticModel'
import RefundDetail from './RefundDetail'
const Option = Select.Option;

const store = new RefundStatisticModel()



@observer
class RefundStatistics extends Component {
    componentWillMount() { 
        store.getData()
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
                    <Button type="primary" onClick={() => store.getData()}>查询</Button>
                </Col>
                 <Col span={1} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                   <Popconfirm title="确认导出数据吗？" onConfirm={() => store.exportData()}>
                        <Button type="primary">导出</Button>
                    </Popconfirm>
                </Col>
            </Row>

            <Table dataSource={store.dataSource}
                columns={store.columns}
                loading={store.loading}
                onChange={this.handleTableChange}
                pagination={store.pagination} />


            <Modal title="退款详情"
                visible={store.modalVisible}
                onOk={() => store.configOk()}
                confirmLoading={store.refundLoading}
                onCancel={() => store.configCancel()}
                width='80%'
            >
                <RefundDetail store={store} />
            </Modal>
        </div>)
    }

    @action
    handleTableChange = (pagination, filters, sorter) => {
        store.getData(pagination)
    }
}

export default RefundStatistics