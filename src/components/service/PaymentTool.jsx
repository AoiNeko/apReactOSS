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