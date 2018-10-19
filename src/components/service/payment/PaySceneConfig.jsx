import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Select ,Switch, List } from 'antd';
import PayTypeConfig from './PayTypeConfig'
import PaySceneModel from '../../../models/service/PaySceneModel'

const Option = Select.Option


@observer
class PaySceneConfig extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {
        let { payScene } = this.props
        const { store } = this.props
        let model = new PaySceneModel()
        model.setSceneId(payScene.id)
        store.setPaySceneModel(payScene.id, model)
        store.preConfig()
    }
    render() {

        let { payScene } = this.props
        const { store } = this.props
        let model = store.paySceneMap[payScene.id]
        return (<div style={{ "width": "100%", "padding": "2px" }}>
            <Row>
                <Col span={6}>
                    <div> {payScene.name} </div>
                </Col>
                <Col span={6}>
                    <Switch checkedChildren="开" unCheckedChildren="关" checked={model.isChecked} onChange={(checked) => { model.setChecked(checked) }} />
                </Col>
            </Row>
            {
                model.isChecked ? <List dataSource={store.paymentTools}
                    itemLayout="horizontal"
                    renderItem={item => (
                        <List.Item>
                            <PayTypeConfig payType={item} store={store} paySceneId={payScene.id}/>
                        </List.Item>
                    )}>
                </List> : ""
            }

        </div>)
    }

}

export default PaySceneConfig