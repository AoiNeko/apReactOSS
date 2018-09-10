import React, { Component } from "react";
import { observer } from "mobx-react";
import { Menu, Icon, Layout } from 'antd';
import ApIndexModel from '../models/ApIndexModel'
import Page from './Page'
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const store = new ApIndexModel();
@observer
class ApIndex extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
      store.getMenu()
  }

  handleClick(e) {
    this.props.history.push("/p/payconfig")
  }


  render() {
    const { props } = this 
    const res = props.match.params.res ? props.match.params.res: "index"
    console.log(res)
    console.log(store.menuList)
    return (
      <Layout>
        <Header>
           <div className="logo">支付平台</div>
        </Header>
        <Layout>
          <Sider>
            <Menu
              onClick={this.handleClick}

              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline">
              {
                store.userMenu.map((menu) => {
                  return (<SubMenu key={menu.id} title={<span><Icon type="mail" /><span>{menu.name}</span></span>}>
                    {
                      menu.children ? menu.children.map((subMenu) =>
                        <Menu.Item key={subMenu.id}>{subMenu.name}</Menu.Item>
                      ) : ""
                    }

                  </SubMenu>)
                }
                )
              }
            </Menu>
          </Sider>
          <Content>
            <Page res={res}/>
          </Content>


        </Layout>
      </Layout>

    )
  }
}

export default ApIndex