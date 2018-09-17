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
    console.log(e)
    let {res} = e.item.props
    this.props.history.push("/p/" + res)
  }


  render() {
    const { props } = this 
    const res = props.match.params.res ? props.match.params.res: "index"
    return (
      <Layout>
        <Header>
           <div className="logo">支付平台</div>
        </Header>
        <Layout>
          <Sider style={{minHeight: "100%"}}>
            <Menu
              onClick={this.handleClick}

              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline">
              {
                store.userMenu.map((menu) => {
                  return (<SubMenu key={menu.id} res={menu.resource} title={<span><Icon type="mail" /><span>{menu.name}</span></span>}>
                    {
                      menu.children ? menu.children.map((subMenu) =>
                        <Menu.Item key={subMenu.id} res={subMenu.resource}>{subMenu.name}</Menu.Item>
                      ) : ""
                    }

                  </SubMenu>)
                }
                )
              }
            </Menu>
          </Sider>
          <Content>
            <Page res={res} history={this.props.history}/>
          </Content>


        </Layout>
      </Layout>

    )
  }
}

export default ApIndex