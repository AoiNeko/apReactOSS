import React, { Component } from "react";
import { observer } from "mobx-react";
import { Menu, Icon , Layout} from 'antd';
import  PayToolMgt  from './service/PayToolMgt'
const { Header,  Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

@observer
class Page extends Component {
  componentWillMount () {
    const { props } = this 
    const res = props.res ? props.res: ""
    console.log(res)
    console.log('componentWillMount：页面将要渲染')
  }

  getComponent() {
       const res = this.props.res

       if (!res || res=="index") {
            return (<div>首页</div>)
       }
       else {
           return (<PayToolMgt />)
       }
  }

    render() {
        console.log(PayToolMgt)
        

        return (<Layout>
            <Header style={{backgroundColor: "white"}}><div>支付工具配置</div></Header>
            <Content>
                {this.getComponent()}
                </Content>
            </Layout>) 
    }

}

export default Page