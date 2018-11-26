import React, { Component } from "react";
import { observer } from "mobx-react";
import { List, Row, Col, RadioGroup, Radio, Input, Skeleton } from 'antd';
@observer
class RefundDetail extends Component {
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

        // let auditingRadio;

        // if (store.initStatus!= 1) {
        //     auditingRadio = (<Radio.Group onChange={(e) => store.refundInfoStatus(e)} value={store.refundInfo.status} disabled={true}  >
        //                         <Radio value={1}>待处理</Radio>
        //                         <Radio value={2}>通过</Radio>
        //                         <Radio value={4}>驳回</Radio>
        //                     </Radio.Group>)
        // }
        // else  {
        //     auditingRadio =  (<Radio.Group onChange={(e) => store.refundInfoStatus(e)} value={store.refundInfo.status}   >
        //                         <Radio value={1}>待处理</Radio>
        //                         <Radio value={2}>通过</Radio>
        //                         <Radio value={4}>驳回</Radio>
        //                     </Radio.Group>)
        // }

        let auditStatus = store.refundInfo.status == 1 ? "待处理" : store.refundInfo.status == 2 ? "通过" : "驳回"
        let paymentIndex = 1

        return (<List>
            <List.Item key="1">
                <div style={{ width: '100%' }}>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >流水号：</Col>

                        <Col span={6} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh', wordBreak:"break-all" }} >
                            <Skeleton loading={store.refundLoading} active paragraph={false} title={{ "width": "5vw" }}>{store.refundInfo.refundNo}</Skeleton>
                        </Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >状态：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.refundLoading} active paragraph={false} title={{ "width": "5vw" }}>{store.refundInfo.status == 2? "已退费" : "未退费"}</Skeleton>
                        </Col>
                    </Row>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >申请人：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.refundLoading} active paragraph={false} title={{ "width": "5vw" }}>{store.refundInfo.apply}</Skeleton>
                        </Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >申请时间：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.refundLoading} active paragraph={false} title={{ "width": "5vw" }}>{store.refundInfo.applyTime}</Skeleton>
                        </Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >实付金额：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.refundLoading} active paragraph={false} title={{ "width": "5vw" }}>{parseFloat(store.order.paidAmount / 100).toFixed(2) + "元"}</Skeleton>
                        </Col>
                    </Row>
                </div>
            </List.Item>
            <List.Item key="2">
                <div style={{ width: '100%' }}>
                    {
                        store.payments ? store.payments.map((payment) => {
                            return (<Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }} key={payment.id} style={payment.isCurrent == 1 ? { "color": "blue" } : {}} >
                                <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >缴费{paymentIndex++}：</Col>

                                <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                                    <Skeleton loading={store.refundLoading} active paragraph={false} title={{ "width": "5vw" }}>{payment.paymentType}</Skeleton>
                                </Col>
                                <Col span={3} style={{ "display": "flex", "justifyContent": "center", marginTop: '1vh' }} >
                                    <Skeleton loading={store.refundLoading} active paragraph={false} title={{ "width": "5vw" }}>{payment.paymentDate}</Skeleton>
                                </Col>
                                <Col span={3} style={{ "display": "flex", "justifyContent": "center", marginTop: '1vh' }} >
                                    <Skeleton loading={store.refundLoading} active paragraph={false} title={{ "width": "5vw" }}>{payment.paidAmount}</Skeleton>
                                </Col>

                                <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >商户订单号：</Col>
                                <Col span={5} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' , wordBreak:"break-all" }} >
                                    <Skeleton loading={store.refundLoading} active paragraph={false} title={{ "width": "5vw" }}>{payment.outTradeNo}</Skeleton>
                                </Col>
                            </Row>)
                        }) : null
                    }

                </div>
            </List.Item>
            <List.Item key="3">
                <div style={{ width: '100%' }}>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >申请退费金额：</Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.refundLoading} active paragraph={false} title={{ "width": "5vw" }}>{store.refundInfo.amount} </Skeleton>
                        </Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >申请退费方式：</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >原渠道退回</Col>
                    </Row>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >退费说明： </Col>

                        <Col span={18} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.refundLoading} active paragraph={false} title={{ "width": "5vw" }}>{store.refundInfo.auditDesc}</Skeleton>
                        </Col>

                    </Row>
                    {
                        store.refundInfo.imgUrl ?
                            (<Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                                <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >证明图片： </Col>
                                <Col span={18} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
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
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >审核状态: </Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.refundLoading} active>
                                {auditStatus}
                            </Skeleton>
                        </Col>


                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >审核人:</Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.refundLoading} active>
                                {store.refundInfo.auditor ? store.refundInfo.auditor : ""}
                            </Skeleton>
                        </Col>

                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >审核时间: </Col>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Skeleton loading={store.refundLoading} active>
                                {store.refundInfo.auditTime ? store.refundInfo.auditTime : ""}
                            </Skeleton>
                        </Col>
                    </Row>
                    <Row type="flex" gutter={{ xs: 8, sm: 16, md: 24 }}>
                        <Col span={3} style={{ "display": "flex", "justifyContent": "flex-end", marginTop: '1vh' }} >理由: </Col>
                        <Col span={18} style={{ "display": "flex", "justifyContent": "flex-start", marginTop: '1vh' }} >
                            <Input.TextArea value={store.refundInfo.auditComment ? store.refundInfo.auditComment : ""} disabled></Input.TextArea>
                        </Col>
                    </Row>
                </div>
            </List.Item>
        </List>)
    }

}
export default RefundDetail
