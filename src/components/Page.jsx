import React, { Component } from "react";
import { observer } from "mobx-react";
import { Menu, Icon, Layout } from 'antd';
import RefundAuditing from './service/RefundAuditing'
import PaymentTool from './service/PaymentTool'
import BussinessMgt from './service/BussinessMgt'
import PayeeConfig from './service/PayeeConfig'
import ParkPaymentConfig from './service/ParkPaymentConfig'
import PaymentStatistic from './service/statistics/PaymentStatistic'
import RefundStatistics from './service/statistics/RefundStatistics'
import IrregularOrder from './service/statistics/IrregularOrder'

const { Header, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@observer
class Page extends Component {
    constructor(props) {
        super(props)
        this.getComponent = this.getComponent.bind(this)
    }


    componentWillMount() {
        const { props } = this
        const res = props.res ? props.res : ""
    }

    getComponent() {
        const res = this.props.res
        if (!res || res == "index") {
            return (<div></div>)
        }
        else if (res == "refund") {
            return (<RefundAuditing history={this.props.history} />)
        }
        else if (res == "payTool") {
            return (<PaymentTool history={this.props.history} />)
        }
        else if (res == "bussinessMgt") {
            return (<BussinessMgt history={this.props.history} />)
        }
        else if (res == "payeeConf") {
            return (<PayeeConfig history={this.props.history} />)
        }
        else if (res == "payToolConf") {
            return (<ParkPaymentConfig history={this.props.history} />)
        }
        else if (res == "paymentPage") {
            return (<PaymentStatistic history={this.props.history}/>)
        }
        else if (res == "refundPage") {
            return (<RefundStatistics history={this.props.history}/>)
        }
        else if (res == "irregularOrder") {
            return (<IrregularOrder history={this.props.history}/>)
        }
        else {
            return (<div>路径未配置</div>)
        }
    }

    render() {
         const name =  this.props.title
        return (<Layout>
            <Header style={{ backgroundColor: "white" }}><div>{name}</div></Header>
            <Content>
                {this.getComponent()}
            </Content>
        </Layout>)
    }

}

export default Page