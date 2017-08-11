import * as React from 'react'
import {observer, inject} from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Modal, Input, message, Layout, Menu, Breadcrumb } from 'antd'
import { CommonStore } from '../../store/common'

import './index.css'

interface Props extends RouteComponentProps<any> {
  commonStore: CommonStore,
}


@observer
export class Movie extends React.Component<Props, {}> {

  public state = {
    type: 'update',
  }

  render() {
    return (
      <div className='wrapper'>
          <div className="block">A</div>
          <div className="block">B</div>
          <div className="block">C</div>
          <div className="block">D</div>
          <div className="block">E</div>
          <div className="block">F</div>
          <div className="block">D</div>
          <div className="block">E</div>
          <div className="block">F</div>
      </div>
    )
  }
}