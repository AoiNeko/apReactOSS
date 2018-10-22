import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, List, Spin } from 'antd';
import PaySceneConfig from './PaySceneConfig'
import ParkPaymentConfigDetailModel from '../../../models/service/ParkPaymentConfigDetailModel'

const Option = Select.Option

const store = new ParkPaymentConfigDetailModel()

@observer
class ParkPaymentConfigDetail extends Component {
    componentWillMount() {
        const { parkStore } = this.props
        parkStore.setDetailStore(store)
        store.init(parkStore.parkId)
    }
    render() {
        const { parkStore } = this.props
        return (
            <div>

                {parkStore.isNewParkConfig ?
                    <Row>
                        <Col span={12}>
                            <Select
                                mode="multiple"
                                labelInValue
                                value={parkStore.parkSelect}
                                placeholder="请选择新增车场"
                                notFoundContent={parkStore.fetching ? <Spin size="small" /> : null}
                                filterOption={false}
                                onSearch={(value) => parkStore.fetchPark(value)}
                                onChange={(value) => parkStore.handleParkSelectChange(value)}
                                style={{ width: '100%' }}
                            >
                                {parkStore.parksSource.map(d => <Option key={d.value}>{d.text}</Option>)}
                            </Select>
                        </Col>
                    </Row> : ""
                }

                <List dataSource={store.dataSource}
                    itemLayout="horizontal"
                    renderItem={item => (
                        <List.Item>
                            <PaySceneConfig payScene={item} store={store} />
                        </List.Item>
                    )}>


                </List>
            </div>)
    }

}

export default ParkPaymentConfigDetail