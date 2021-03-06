import * as React from 'react'
import {observer, inject} from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Modal, Input, message, Layout, Menu, Breadcrumb } from 'antd'
import * as clipboard from 'clipboard-js'
import { FormValue, AuthStore } from '../store'
import { CommonStore } from '../../store/common'
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
export class About extends React.Component<Props, {}> {

  public state = {
    type: 'update',
  }

  render() {
    return (
      <div className='panel-about'>
        <div className='content'>
          <div className='title'><h2 className='name'>Ta<div className='avatar'></div></h2></div>
        </div>
      </div>
    )
  }
}