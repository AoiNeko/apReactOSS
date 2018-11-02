import React, { Component } from "react";
import { observer } from "mobx-react";
import { Menu, Icon, Layout } from 'antd';
import RefundAuditing from './service/RefundAuditing'
import PaymentTool from './service/PaymentTool'
import BussinessMgt from './service/BussinessMgt'
import PayeeConfig from './service/PayeeConfig'
import ParkPaymentConfig from './service/ParkPaymentConfig'
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
        console.log(res)
        console.log('componentWillMount：页面将要渲染')
    }

    getComponent() {
        const res = this.props.res
        if (!res || res == "index") {
            return (<div>首页</div>)
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