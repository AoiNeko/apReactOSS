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
        let { payScene } = this.props
        const { store } = this.props
        let model = new PaySceneModel()
        model.setSceneId(payScene.id)
        store.setPaySceneModel(payScene.id, model)
    }
    componentWillMount() {
    }
    render() {

        let { payScene } = this.props
        const { store } = this.props
        let model = store.paySceneMap[payScene.id]
        return (<div style={{ "width": "100%", "padding": ".5vw","borderRadius":"1vh", "boxShadow":"1px 1px 8px rgb(240, 242, 245), -1px -1px 8px grey" , "backgroundColor": "rgb(240, 242, 245)" }}>
            <Row>
                <Col span={12}>
                    <div>{payScene.name}</div>
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