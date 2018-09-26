import React, { Component } from "react";
import { observer } from "mobx-react";
import { Row, Col, Input, Select, Button,Table } from 'antd';
import RefundAuditingModel from '../../models/service/RefundAuditingModel'
const Option = Select.Option;

const store = new RefundAuditingModel();

const columns = [{
  title: '车牌号',
  dataIndex: 'carNo',
  key: 'carNo',
}, {
  title: '订单号',
  dataIndex: 'tradeNo',
  key: 'tradeNo',
}, { 
  title: '进场时间',
  dataIndex: 'enterTime',
  key: 'enterTime',
}, { 
  title: '出场时间',
  dataIndex: 'leaveTime',
  key: 'leaveTime',
}, { 
  title: '申请时间',
  dataIndex: 'applyTime',
  key: 'applyTime',
}, { 
  title: '申请人',
  dataIndex: 'apply',
  key: 'apply',
}, { 
  title: '退费金额',
  dataIndex: 'amount',
  key: 'amount',
}, {
  title: '状态',
  dataIndex: 'status',
  key: 'status',
},{
    title:'',
    dataIndex: 'operation',
    key: 'operation',
}];




@observer
class RefundAuditing extends Component {
    componentWillMount() {
         store.getRefundData()
    }
    render() {
        return (<div>
            <Row>
                <Col span={6} style={{"display":"flex", "justifyContent":"center", margin:"1vh"}} > <Input placeholder="名称" /></Col>
                <Col span={4} style={{"display":"flex", "justifyContent":"center", margin:"1vh"}}>
                    <Select placeholder="请选择支付方式" style={{ width: '100%' }}>
                        <Option value="wechat">微信</Option>
                        <Option value="alipay">支付宝</Option>
                        <Option value="gnete">网付通</Option>
                    </Select></Col>
                <Col span={4} style={{"display":"flex", "justifyContent":"center", margin:"1vh"}}>
                    <Select placeholder="请选择支付类型" style={{ width: '100%' }}>
                        <Option value="ap">自有</Option>
                        <Option value="poly">保利</Option>
                    </Select>
                </Col>

                <Col span={1} style={{"display":"flex", "justifyContent":"center", margin:"1vh"}}>
                    <Button type="primary">查询</Button>
                </Col>
                <Col span={1} style={{"display":"flex", "justifyContent":"center", margin:"1vh"}}>
                    <Button type="primary">编辑</Button>
                </Col>
                <Col span={1} style={{"display":"flex", "justifyContent":"center", margin:"1vh"}}>
                    <Button type="primary">新增</Button>
                </Col>
            </Row>
            
            <Table dataSource={store.dataSource} columns={columns} />
            
        </div>)
    }
}

export default RefundAuditing