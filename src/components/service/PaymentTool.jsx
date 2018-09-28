import React, { Component } from "react";
import { observer } from "mobx-react";
import { Row, Col, Input, Select, Button,Table } from 'antd';
const Option = Select.Option;

const dataSource = [{
  key: '1',
  name: '胡彦斌',
  age: 32,
  address: '支付工具'
}, {
  key: '2',
  name: '胡彦祖',
  age: 42,
  address: '西湖区湖底公园1号'
}];

const columns = [{
  title: '姓名',
  dataIndex: 'name',
  key: 'name',
}, {
  title: '年龄',
  dataIndex: 'age',
  key: 'age',
}, { 
  title: '住址',
  dataIndex: 'address',
  key: 'address',
}];




@observer
class PaymentTool extends Component {
    componentWillMount() {
        
        
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
            
            <Table dataSource={dataSource} columns={columns} />
            
        </div>)
    }
}

export default PaymentTool