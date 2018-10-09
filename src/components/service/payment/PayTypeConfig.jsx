import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table , Switch} from 'antd';
const Option = Select.Option;

@observer
class PayTypeConfig extends Component {
    componentWillMount() { 
        
    }
    render() {
        return (<div style={{"width":"100%", "padding": "2px"}}>
             <Row>
               <Col span={6}>
                    <div>微信支付</div>
               </Col>
               <Col span={6}>
                    <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <div>选择收款人</div>
               </Col>
               <Col span={6}>
                    <div>收款人配置</div>
                </Col>

            </Row>
            
        </div>)
    }

}

export default PayTypeConfig