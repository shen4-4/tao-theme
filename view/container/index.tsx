import * as React from 'react'
import {observer} from 'mobx-react'
import { RouteProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import "antd/dist/antd.less"
import './index.css'

const { Header, Content, Footer } = Layout

interface Props extends RouteProps {
  children: any,
}

export class App extends React.Component<Props, {}> {
  // 页面跳转
  handleToPage = (e:any) => {

  }
  render() {
    return (
      <Layout className="container">
        <Header className='header'>
          <div className="logo"> luotaoruby </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className='menu'
            onClick={this.handleToPage}
          >
            <Menu.Item className ='menuItem' key="index"><Link to="/index" >首页</Link></Menu.Item>
            <Menu.Item className ='menuItem' key="archive"><Link to="/archive" >归档</Link></Menu.Item>
            <Menu.Item className ='menuItem' key="about"><Link to="/about" >关于</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className='content'>
          {this.props.children}
        </Content>
        <Footer className='footer'>
          ヽ( ^∀^)ﾉ
        </Footer>
      </Layout>
      )
    }
}
