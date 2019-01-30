import React, { Component } from "react";
import { observer } from "mobx-react";
import { Menu, Icon, Layout, Avatar, Popconfirm } from 'antd';
import ApIndexModel from '../models/ApIndexModel'
import Page from './Page'
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const store = new ApIndexModel();
@observer
class ApIndex extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount() {
    store.getMenu()
  }

  handleClick(e) {
    if (!e.item) {
      return
    }
    let { res } = e.item.props
    this.props.history.push("/paycenter/p/" + res)
  }


  render() {
    const { props } = this
    const res = props.match.params.res ? props.match.params.res : "index"
    const name = store.getMenuName(store.userMenu, res)
    return (
      <Layout style={{ height: "100%", width: "100%" }}>
        <Header>
          <div className="logo">支付中心</div>
          <div style={{ "color": "white", "float": "right", "paddingLeft": "5px" }}>{store.userName}</div>
          <Popconfirm title="退出登录?" placement="bottom" onConfirm={() => store.signOut()}>
            <Avatar icon="user" style={{ marginTop: "1em", display: "flex", justifyContent: "center", paddingTop: "5px", float: "right" }}>
            </Avatar>
          </Popconfirm>

        </Header>
        <Layout>

          <Sider style={{ minHeight: "100%" }}
            trigger={null}
            collapsible
            collapsed={store.collapsed}
          >

            <Menu
              onClick={this.handleClick}

              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline">
              <Icon
                className={store.collapsed? "sidebarIconUnfold":"sidebarIcon"}
                type={store.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={() => store.toggleCollapsed()}
              />
              {
                store.userMenu.map((menu) => {
                  return (<SubMenu key={menu.id} res={menu.resource} title={<span><Icon type="mail" /><span>{menu.name}</span></span>}>
                    {
                      menu.children ? menu.children.map((subMenu) =>
                        <Menu.Item key={subMenu.id} res={subMenu.resUrl}>{subMenu.name}</Menu.Item>
                      ) : ""
                    }

                  </SubMenu>)
                }
                )
              }
            </Menu>
          </Sider>
          <Content>
            <Page res={res} title={name} history={this.props.history} />
          </Content>


        </Layout>
      </Layout>

    )
  }
}

export default ApIndex