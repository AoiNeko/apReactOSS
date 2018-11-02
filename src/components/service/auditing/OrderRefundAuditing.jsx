import React, { Component } from "react";
import { observer } from "mobx-react";
import { List, Row, Col, RadioGroup, Radio, Input, Skeleton } from 'antd';
@observer
class OrderRefundAuditing extends Component {
    constructor(props) {
        super(props)
        const { store } = props
        console.log(store)
    }
    componentWillMount() {
        const { store } = this.props
        store.getOrderRefundInfo()
    }
    render() {
        const { store } = this.props
        return (<List>
            <List.Item key="1">
                <div style={{ width: '100%' }}>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >车场名：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{store.refundInfo.parkName}</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >进场时间：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{store.refundInfo.enterTime}</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >出场时间：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{store.refundInfo.leaveTime}</Col>
                        {/*<Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >申请时间：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{store.refundInfo.applyTime}</Col>*/}
                    </Row>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >申请人：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{store.refundInfo.apply}</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >申请时间：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{store.refundInfo.applyTime}</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >停车票：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{store.order.coupon ? store.order.coupon: "未使用停车票"}</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >实付金额：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{store.order.paidAmount}</Col>
                    </Row>
                </div>
            </List.Item>
            <List.Item key="2">
                <div style={{ width: '100%' }}>
                    {
                        store.payments ? store.payments.map((payment) => {
                            return (<Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }} key= {payment.id}>
                                <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >缴费：</Col>
                                <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{payment.paymentType}</Col>
                                <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{payment.notifyDate}</Col>
                                <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{payment.amount}</Col>
                                <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >流水号：</Col>
                                <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{payment.outTradeNo}</Col>
                            </Row>)
                        }) : null
                    }

                </div>
            </List.Item>
            <List.Item key="3">
                <div style={{ width: '100%' }}>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >申请退费金额：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{store.refundInfo.amount}</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >申请退费方式：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >原渠道退回</Col>
                    </Row>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >退费说明： </Col>
                        <Col span={18} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >{store.refundInfo.auditDesc}</Col>
                    </Row>
                    {
                        store.refundInfo.imgUrl ?
                            (<Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                                <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >证明图片： </Col>
                                <Col span={18} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >
                                    <Skeleton loading={store.refundLoading} active>
                                        <img style={{ height: '10vh' }} alt="example" src={store.refundInfo.imgUrl} />
                                    </Skeleton>
                                </Col>
                            </Row>)
                            : ""

                    }

                </div>
            </List.Item>
            <List.Item key="4">
                <div style={{ width: '100%' }}>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >审核状态: </Col>
                        <Col span={18} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >
                            <Radio.Group onChange={(e) => store.refundInfoStatus(e)} value={store.refundInfo.status}>
                                <Radio value={1}>待处理</Radio>
                                <Radio value={2}>通过</Radio>
                                <Radio value={4}>驳回</Radio>
                            </Radio.Group>
                        </Col>

                    </Row>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >理由: </Col>
                        <Col span={18} style={{ "display": "flex", "justifyContent": "start", marginTop: '1vh' }} >
                            <Input.TextArea onChange={(e) => store.refundInfoDesc(e)} value={store.refundInfo.auditingDesc ? store.refundInfo.auditingDesc : ""}></Input.TextArea>
                        </Col>
                    </Row>
                </div>
            </List.Item>
        </List>)
    }

}
export default OrderRefundAuditing
