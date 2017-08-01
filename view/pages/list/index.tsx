import * as React from 'react'
import {observer, inject} from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Modal, Input, message, Layout, Menu, Breadcrumb } from 'antd'
import * as clipboard from 'clipboard-js'
import { FormValue, AuthStore } from '../store'
import { CommonStore } from '../../store/common'

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
      <div style={{ background: '#fff', padding:24, minHeight: 600 }}>~12333</div>
    )
  }
}