import * as React from 'react'
import { Route, Redirect } from 'react-router'
import { App } from './container/index'
import { List } from './pages/list'
import { About } from './pages/about'
import { Archive } from './pages/archive'

import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import "antd/dist/antd.less"
import './container/index.css'
const { Header, Content, Footer } = Layout

const routes = (
  <Layout className="container">
    <Header className='header'>
      <div className="logo"> luotaoruby </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['index']}
        className='menu'
        onClick={this.handleToPage}
      >
        <Menu.Item className ='menuItem' key="index"><Link to="/index" >首页</Link></Menu.Item>
        <Menu.Item className ='menuItem' key="archive"><Link to="/archive" >归档</Link></Menu.Item>
        <Menu.Item className ='menuItem' key="about"><Link to="/about" >关于</Link></Menu.Item>
      </Menu>
    </Header>
    <Content className='content'>
      <Route exact path='/' render={() => <Redirect to="/index" />} />
      <Route path='/index' component={List} />
      <Route path='/archive' component={Archive} />
      <Route path='/about' component={About} />
    </Content>
    <Footer className='footer'>
      ヽ( ^∀^)ﾉ
    </Footer>
  </Layout>
)

export default routes