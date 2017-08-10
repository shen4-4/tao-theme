import * as React from 'react'
import {observer} from 'mobx-react'
import { RouteProps } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import Particles from 'react-particles-js'
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
        <Particles style={{'position':'fixed'}} params={{
          particles: {
            "number": {
              "value": 10,
              "density": {
                "enable": true,
                "value_area": 800
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "star",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 2
              },
              "image": {
                "src": "img/github.svg",
                "width": 200,
                "height": 200
              }
            },
            "opacity": {
              "value": 0.5,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 10,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 80,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 300,
              "color": "#865aad",
              "opacity": 0.4,
              "width": 2,
            },
            "move": {
              "enable": true,
              "speed": 5,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          interactivity: {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": false,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 800,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 800,
                "size": 80,
                "duration": 2,
              },
              "repulse": {
                "distance": 400,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            },
          },
        }}/>
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
