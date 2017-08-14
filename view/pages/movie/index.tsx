import * as React from 'react'
import {observer, inject} from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Modal, Input, message, Layout, Menu, Breadcrumb } from 'antd'
import { CommonStore } from '../../store/common'

import './index.scss'

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
          <div className="block">
              <div className="intro">
                  <h1><a href="http://douban.com">黑皮书</a></h1>
                  <div className='text'>豆瓣评分</div>
                  <div className='text'>我的评分</div>
              </div>
              <img className='heipishu'></img>
          </div>
          <div className="block">
              <div className="intro">
                  <h1><a href="http://douban.com">银河护卫队</a></h1>
                  <div className='text'>豆瓣评分</div>
                  <div className='text'>我的评分</div>
              </div>
              <img className='yinhe'></img>
          </div>
          <div className="block">
              <div className="intro">
                  <h1><a href="http://douban.com">小林家的龙女仆</a></h1>
                  <div className='text'>豆瓣评分</div>
                  <div className='text'>我的评分</div>
              </div>
              <img className='long'></img>
          </div>
          <div className="block">
              <div className="intro">
                  <h1><a href="http://douban.com">小林家的龙女仆</a></h1>
                  <div className='text'>豆瓣评分</div>
                  <div className='text'>我的评分</div>
              </div>
              <img className='long'></img>
          </div>
          <div className="block">
              <div className="intro">
                  <h1><a href="http://douban.com">黑皮书</a></h1>
                  <div className='text'>豆瓣评分</div>
                  <div className='text'>我的评分</div>
              </div>
              <img className='heipishu'></img>
          </div>
          <div className="block">
              <div className="intro">
                  <h1><a href="http://douban.com">银河护卫队</a></h1>
                  <div className='text'>豆瓣评分</div>
                  <div className='text'>我的评分</div>
              </div>
              <img className='yinhe'></img>
          </div>
          <div className="block">7</div>
          <div className="block">8</div>
          <div className="block">9</div>
          <div className="block">10</div>
          <div className="block">11</div>
          <div className="block">12</div>
          <div className="block">13</div>
          <div className="block">14</div>
          <div className="block">15</div>
          <div className="block">16</div>
          <div className="block">17</div>
          <div className="block">18</div>
          <div className="block">19</div>
          <div className="block">20</div>
          <div className="block">21</div>
      </div>
    )
  }
}