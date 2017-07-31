import * as React from 'react'
import {observer, inject} from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Modal, Input, message } from 'antd'
import { Layout, Menu, Breadcrumb } from 'antd'
import * as clipboard from 'clipboard-js'
import SearchForm from '../../../components/serachForm'
import AddEdit, { AddEdit as AddEditInstance } from '../addEdit'
import { FormValue, AuthStore } from '../store'
import { CommonStore } from '../../../store/common'
import './index.css'

const confirm = Modal.confirm;
const ButtonGroup = Button.Group
const { Header, Content, Footer } = Layout

interface Props extends RouteComponentProps<any> {
  formValue: FormValue,
  authStore: AuthStore,
  commonStore: CommonStore,
}

@inject('authStore', 'commonStore')
@observer
export class List extends React.Component<Props, {}> {

  public state = {
    type: 'update',
  }

  render() {
    return (
      <Layout>
        <Header className='header'>
          <div className="logo"> luotaoruby </div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            className='menu'
          >
            <Menu.Item className ='menuItem' key="1">首页</Menu.Item>
            <Menu.Item className ='menuItem' key="2">归档</Menu.Item>
            <Menu.Item className ='menuItem' key="3">关于</Menu.Item>
          </Menu>
        </Header>
        <Content className='content'>
          <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>韬韬是傻逼233~</div>
        </Content>
        <Footer className='footer'>
          来自小姐姐的爱ヽ( ^∀^)ﾉ
        </Footer>
      </Layout>
    )
  }
}