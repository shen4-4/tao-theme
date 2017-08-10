import * as React from 'react'
import {observer} from 'mobx-react'
import { RouteProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import moment from 'moment'
import "antd/dist/antd.less"
import './index.css'

const { Header, Content, Footer } = Layout

interface Props extends RouteProps {
  children: any,
}

export class App extends React.Component<Props, {}> {
  public state = {
    time: moment().format("dddd  MMMM Do YYYY  h:mm:ss a")
  }
  
  updateTime() {  
    setInterval(() => {
      this.setState({ time: moment().format("dddd  MMMM Do YYYY  h:mm:ss a") })
    }, 1000)
  }

  componentDidMount() {
    this.updateTime()
  }
  render() {
    return (
      <Layout className="container">
        <Header className='header'>
          <div className="logo"> luotaoruby </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['index']}
            className='menu'
          >
            <Menu.Item className ='menuItem' key="index"><Link to="/index" >首页</Link></Menu.Item>
            <Menu.Item className ='menuItem' key="archive"><Link to="/archive" >归档</Link></Menu.Item>
            <Menu.Item className ='menuItem' key="about"><Link to="/about" >关于</Link></Menu.Item>
            <Menu.Item className ='menuItem' key="music"><Link to="/music" >音乐</Link></Menu.Item>
          </Menu>
        </Header>
        <Content className='content'>
          {this.props.children}
        </Content>
        <Footer className='footer'>
          {this.state.time} <span className='cute'>ヽ( ^∀^)ﾉ</span>
        </Footer>
      </Layout>
      )
    }
}
