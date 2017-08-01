import * as React from 'react'
import {observer, inject} from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom'
import { Timeline, Icon } from 'antd'
import * as clipboard from 'clipboard-js'
import { FormValue, AuthStore } from '../store'
import { CommonStore } from '../../store/common'

import './index.css'

interface Props extends RouteComponentProps<any> {
  formValue: FormValue,
  authStore: AuthStore,
  commonStore: CommonStore,
}

@inject('authStore', 'commonStore')
@observer
export class Archive extends React.Component<Props, {}> {

  public state = {
    type: 'update',
  }

  render() {
    return (
      <div className='panel'>
        <div className='timeline'>
          <Timeline pending={<a href="/index">更多恋爱记录，敬请期待</a>}>
            <Timeline.Item color="green"> 2014-09-01 韬韬长大了</Timeline.Item>
            <Timeline.Item dot={<Icon type="meh-o" style={{ fontSize: '20px' }} />} color="green"> 2015-09-01 韬韬失恋了555555555</Timeline.Item>
            <Timeline.Item dot={<Icon type="heart" style={{ fontSize: '20px' }} />} color="red" > 2016-09-01 韬韬恋爱了23333</Timeline.Item>
            <Timeline.Item dot={<Icon type="meh" style={{ fontSize: '20px' }} />}  color="green">2017-09-01 韬韬失恋了555555555555555555</Timeline.Item>
            <Timeline.Item dot={<Icon type="smile" style={{ fontSize: '20px' }}  />} color="red">2018-09-01 韬韬和郑龙宝宝在一起了，噢耶✌️</Timeline.Item>
          </Timeline>
        </div>
      </div>
    )
  }
}
