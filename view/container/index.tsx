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
          <a href="https://github.com/shen4-4/tao-theme">
            <svg width="50" height="50" viewBox="0 0 250 250" style={{"fill": "#6347a6", "color": "white","position": "absolute","top": 0,"border": 0,"right": 0}}>
              <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
              <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{"transform-origin": "130px 106px"}} className="octo-arm"></path>
              <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
            </svg>
          </a>
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
