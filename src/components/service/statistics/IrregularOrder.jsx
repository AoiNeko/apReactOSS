import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, Modal, DatePicker } from 'antd';
import IrregularOrderModel from '../../../models/statistic/IrregularOrderModel'

const Option = Select.Option;
const store = new IrregularOrderModel()

@observer
class IrragularOrder extends Component {
    componentWillMount() {
        store.getData()
    }
    render() {
        return (<div>
            <Row>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <Input placeholder="车场" onChange={(value) => { store.form.parkName = value.target.value }} /></Col>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <Input placeholder="车牌" onChange={(value) => { store.form.carNo = value.target.value }} /></Col>
                <Col span={2} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }} > <Input placeholder="订单号" onChange={(value) => { store.form.tradeNo = value.target.value }} /></Col>
                <Col span={1} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Button type="primary" onClick={() => store.getData()}>查询</Button>
                </Col>
            </Row>

            <Table dataSource={store.dataSource} columns={store.columns} loading={store.loading}
                onChange={this.handleTableChange}
                pagination={store.pagination} />

        </div>)
    }

    @action
    handleTableChange = (pagination, filters, sorter) => {
        store.getData(pagination)
    }
}

export default IrragularOrder