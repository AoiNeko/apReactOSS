import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, Modal } from 'antd';
import PaymentStatisticModel from '../../models/statistic/PaymentStatisticModel'

const Option = Select.Option;
const store = new PaymentStatisticModel()

@observer
class PaymentStatistic extends Component {
    componentWillMount() { 
        store.getPayeeData()
    }
    render() {
        return (<div>
            <Row>
                <Col span={1} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                    <Button type="primary" onClick={()=> store.newPayee()}>新增收款人</Button>
                </Col>
            </Row>

            <Table dataSource={store.dataSource} columns={store.columns} loading={store.loading}
                onChange={this.handleTableChange}
                pagination={store.pagination} />

            <Modal title='新增收款人'
                visible={store.modalVisible}
                onOk={() => store.configOk()}
                confirmLoading={store.confirmLoading}
                onCancel={() => store.configCancel()}
                width='90%'
            >
                <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                    <Col span={4} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                        <Input placeholder="收款人Id" value={store.payeeId} onChange={(value) => store.setPayeeId(value)}/> 
                    </Col>
                    <Col span={4} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                        <Input placeholder="收款人名称" value={store.payeeName}  onChange={(value) => store.setPayeeName(value)}/>
                    </Col>
                    <Col span={4} style={{ "display": "flex", "justifyContent": "center", margin: "1vh" }}>
                        <Input placeholder="备注" value={store.desc}  onChange={(value) => store.setDesc(value)}/>
                    </Col>
                </Row>
            </Modal>

        </div>)
    }

    @action
    handleTableChange = (pagination, filters, sorter) => {
        store.getPayeeData(pagination)
    }
}

export default PaymentStatistic