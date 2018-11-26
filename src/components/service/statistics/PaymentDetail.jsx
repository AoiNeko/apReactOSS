import React, { Component } from "react";
import { observer } from "mobx-react";
import { List, Row, Col, RadioGroup, Radio, Input, Skeleton } from 'antd';
@observer
class PaymentDetail extends Component {
    constructor(props) {
        super(props)
        const { store } = props
        console.log(store)
    }
    componentWillMount() {
    }
    render() {
        const { store } = this.props
        return (<List>
            <List.Item key="1">
                <div style={{ width: '100%' }}>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >流水号：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                {store.paymentInfo.outTradeNo ? store.paymentInfo.outTradeNo : "无" }
                            </Skeleton>
                        </Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >收支类型：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                 {store.paymentInfo.ertype ? store.paymentInfo.ertype : "无" }
                            </Skeleton>
                        </Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >支付状态：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                 {store.paymentInfo.status ? store.paymentInfo.status : "无" }
                            </Skeleton>
                        </Col>
                        {/*<Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >申请时间：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >2</Col>*/}
                    </Row>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >发起时间：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                 {store.paymentInfo.createdDate ? store.paymentInfo.createdDate : "无" }
                            </Skeleton>
                        </Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >支付时间：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                {store.paymentInfo.paymentDate ? store.paymentInfo.paymentDate : "无" }
                            </Skeleton>
                        </Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >支付金额：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                {store.paymentInfo.amount ? store.paymentInfo.amount : "无" }
                            </Skeleton>
                        </Col>
                    </Row>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >支付方式：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                {store.paymentInfo.paymentType ? store.paymentInfo.paymentType : "无" }
                            </Skeleton>
                        </Col>
{/*
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >支付号：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>2</Skeleton>
                        </Col>*/}
                    </Row>
                </div>
            </List.Item>
            <List.Item key="2">
                <div style={{ width: '100%' }}>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >订单号：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                  {store.paymentInfo.tradeNo ? store.paymentInfo.tradeNo : "无" }
                            </Skeleton>
                        </Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >车牌：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                    {store.paymentInfo.carNo ? store.paymentInfo.carNo : "无" }
                            </Skeleton>
                        </Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >车场：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                {store.paymentInfo.parkName ? store.paymentInfo.parkName : "无" }
                            </Skeleton>
                        </Col>
                    </Row>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >进场时间：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                {store.paymentInfo.enterDate ? store.paymentInfo.enterDate : "无" }
                            </Skeleton>
                        </Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >出场时间：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                {store.paymentInfo.leaveDate ? store.paymentInfo.leaveDate : "无" }
                            </Skeleton>
                        </Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >订单金额：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.paymentLoading} active paragraph={false} title={{ "width": "5vw" }}>
                                {store.paymentInfo.orderAmount ? store.paymentInfo.orderAmount : "无" }
                            </Skeleton>
                        </Col>
                    </Row>
                </div>
            </List.Item>
        </List>)
    }

}
export default PaymentDetail
