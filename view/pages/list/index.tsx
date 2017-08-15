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
@observer
export class List extends React.Component<Props, {}> {

  public state = {
    type: 'update',
  }

  render() {
    return (
      <div className='list'>
        <div className='left-wrapper'>
          <div className='article'>
            <div className='title'><a> helloworld </a> </div>
            <div className='article-content'>  这是我的第一篇文章，用来看样式怎么写,用来看样式怎么写用来看样式怎么写用来看样式怎么写用来看样式怎么写用来看样式怎么写用来看样式怎么写,用来看样式怎么写用来看样式怎么写用来看样式怎么写用来看样式怎么写blablablablalblablababblablablablalblabl</div>
            <div className='link-all'><Button type="primary"><a>>> 阅读全文 </a></Button></div>
          </div>
          <div className='article'>
            <div className='title'><a> helloworld </a> </div>
            <div className='article-content'>  这是我的第一篇文章，用来看样式怎么写,用来看样式怎么写用来看样式怎么写用来看样式怎么写用来看样式怎么写用来看样式怎么写用来看样式怎么写,用来看样式怎么写用来看样式怎么写用来看样式怎么写用来看样式怎么写blablablablalblablababblablablablalblabl</div>
            <div className='link-all'><Button type="primary"><a>>> 阅读全文 </a></Button></div>
          </div>
          <div className='article'>
            <div className='title'><a> helloworld </a> </div>
            <div className='article-content'>  这是我的第一篇文章，用来看样式怎么写,用来看样式怎么写用来看样式怎么写用来看样式怎么写用来看样式怎么写用来看样式怎么写用来看样式怎么写,用来看样式怎么写用来看样式怎么写用来看样式怎么写用来看样式怎么写blablablablalblablababblablablablalblabl</div>
            <div className='link-all'><Button type="primary"><a>>> 阅读全文 </a></Button></div>
          </div>
          <div className='article'></div>
          <div className='article'></div>       
        </div>
        <div className='right-wrapper'>
          广告位招租
        </div>
      </div>
    )
  }
}