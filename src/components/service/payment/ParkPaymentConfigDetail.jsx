import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, List } from 'antd';
import PaySceneConfig from './PaySceneConfig'
import ParkPaymentConfigDetailModel from '../../../models/service/ParkPaymentConfigDetailModel'

const Option = Select.Option

const store = new ParkPaymentConfigDetailModel()

@observer
class ParkPaymentConfigDetail extends Component {
    componentWillMount() {
        const {parkStore} =  this.props
        parkStore.setDetailStore(store)
        store.init(parkStore.parkId)
    }
    render() {
        return (<List dataSource={store.dataSource}
            itemLayout="horizontal"
            renderItem={item => (
                <List.Item>
                    <PaySceneConfig payScene={item} store={store}/>
                </List.Item>
            )}>


        </List>)
    }

}

export default ParkPaymentConfigDetail