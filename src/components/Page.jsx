import React, { Component } from "react";
import { observer } from "mobx-react";
import { Menu, Icon, Layout } from 'antd';
import PayToolMgt from './service/PayToolMgt'
import RefundAuditing from './service/RefundAuditing'
import PaymentTool from './service/PaymentTool'
import BussinessMgt from './service/BussinessMgt'
import AoCalendar from './AoCalendar'
import DayPage from './DayPage'
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
        //日历
        else if (res == "cal") {
            return (<AoCalendar history={this.props.history} />)
        }
        else if (res == "day") {
            return (<DayPage history={this.props.history} />)
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
        else {
            return (<PayToolMgt history={this.props.history} />)
        }
    }

    render() {
        console.log(PayToolMgt)


        return (<Layout>
            <Header style={{ backgroundColor: "white" }}><div>支付工具配置</div></Header>
            <Content>
                {this.getComponent()}
            </Content>
        </Layout>)
    }

}

export default Page