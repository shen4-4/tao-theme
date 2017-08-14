import * as React from 'react'
import {observer, inject} from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Modal, Input, message, Layout, Menu, Breadcrumb } from 'antd'
import * as clipboard from 'clipboard-js'
import { FormValue, AuthStore } from '../store'
import { CommonStore } from '../../store/common'

import './index.scss'

interface Props extends RouteComponentProps<any> {
  formValue: FormValue,
  authStore: AuthStore,
  commonStore: CommonStore,
}

@inject('authStore', 'commonStore')

export class List extends React.Component<Props, {}> {

  public state = {
    type: 'update',
  }

  render() {
    return (
      <div className='list'>
        <div className='left-wrapper'>
          <div className='article'>1111</div>
          <div className='article'></div>
          <div className='article'></div>
          <div className='article'></div>
          <div className='article'></div>       
        </div>
        <div className='right-wrapper'>       
        </div>
      </div>
    )
  }
}