import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, Switch } from 'antd';
import PayTypeConfig from './PayTypeConfig'

const Option = Select.Option

@observer
class PaySceneConfig extends Component {
    constructor(props) {
        super(props)
    }
    componentWillMount() {

    }
    render() {

        let { payScene } = this.props
        const { store } = this.props
        let isChecked = false

        let payTypeArr = []

        if (store.parkConfig) {
            for (var key in store.parkConfig) {
                if (store.parkConfig.hasOwnProperty(key)) {
                    var element = store.parkConfig[key];
                    if (element.payScene == payScene.id) {
                        isChecked = true
                        payTypeArr.push(element)
                    }
                }
            }
        }

        store.setCheckedMap(payScene.id, isChecked)
        return (<div style={{ "width": "100%", "padding": "2px" }}>
            <Row>
                <Col span={6}>
                    <div> {payScene.payscene} </div>
                </Col>
                <Col span={6}>
                    <Switch checkedChildren="开" unCheckedChildren="关" checked={store.paySceneMap[payScene.id]} onChange={(checked) => {store.setCheckedMap(payScene.id,checked )}}   />
                </Col>
            </Row>
            {store.paySceneMap[payScene.id] ?
                <PayTypeConfig payTypes={payTypeArr} /> : ""}

        </div>)
    }

}

export default PaySceneConfig