import * as React from 'react'
import {observer, inject} from 'mobx-react'
import { RouteComponentProps } from 'react-router-dom'
import { Button, Modal, Input, message, Layout, Menu, Breadcrumb } from 'antd'
import { CommonStore } from '../../store/common'
// import {Song} from 'react-music'

interface Props extends RouteComponentProps<any> {
  commonStore: CommonStore,
}

@inject('commonStore')
@observer
export class Music extends React.Component<Props, {}> {

  public state = {
    type: 'update',
  }

  render() {
    return (
      <div className='panel'>
      </div>
    )
  }
}




// import ReactAplayer from 'react-aplayer'

// const props = {
//       "autoplay": true,
//       "mutex": true,
//       "preload": "metadata",
//       "music": {
//         "author": "Hans Zimmer/Richard Harvey",
//         "url": "http://devtest.qiniudn.com/Preparation.mp3",
//         "pic": "http://devtest.qiniudn.com/Preparation.jpg"
//       }
//     }
//  <ReactAplayer {...props} />