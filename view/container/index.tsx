import * as React from 'react';
import {observer} from 'mobx-react';
import { RouteComponentProps } from 'react-router-dom';
import "antd/dist/antd.less";
import './index.css'

interface Props extends RouteComponentProps<any> {
  children: any,
  params: any,
}

@observer
export class App extends React.Component<Props, {}> {
  render() {
    return (
      <div className="container">
        <header className="main-header"></header>
        <main>
          {this.props.children}
        </main>
        <footer className="main-footer"></footer>
      </div>
      );
    }
};
