import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
import { Row, Col, Input, Select, Button, Table, Collapse, Spin, List } from 'antd';
import PaySceneConfig from './PaySceneConfig'
import ParkPaymentConfigDetailModel from '../../../models/service/ParkPaymentConfigDetailModel'

const Option = Select.Option
const Panel = Collapse.Panel
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

        let key = 1
        return (
            <div>

                {parkStore.isNewParkConfig ?
                    <Row gutter={4}>
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

                        <Col span={4}>
                            <Input placeholder="合作商代码" value={parkStore.cooperator} onChange={(value) => parkStore.editCooperator(value)} />
                        </Col>
                    </Row> : ""
                }

                <List dataSource={store.dataSource}
                    itemLayout="horizontal"
                    renderItem={item => (
                        <List.Item key={key++}>
                            <PaySceneConfig payScene={item} store={store} />
                        </List.Item>
                    )}>
                </List>
                {/*<Collapse defaultActiveKey={() => { 
                    console.log(activeKeys)
                    return activeKeys.length > 0 ? activeKeys : ""}}> 
                    {
                        store.dataSource.map((item) => {
                            return (<Panel header={item.name} key={key++}>
                                <PaySceneConfig payScene={item} store={store} />
                            </Panel>)
                        })
                    }
                </Collapse>*/}
            </div>)
    }

}

export default ParkPaymentConfigDetail