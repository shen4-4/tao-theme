
/// <reference types="react" />

declare interface ReactAplayerProps {
  onClick?: React.FormEventHandler<any>;
  onMouseUp?: React.FormEventHandler<any>;
  onMouseDown?: React.FormEventHandler<any>;
}

declare module 'react-aplayer' {
  export default class reactAplayer extends React.Component<ReactAplayerProps, any> {
    static propTypes: {
      listmaxheight: string;
      mode: any;
      onCanplay: Function;
      autoplay: Boolean;
      mutex: Boolean;
      preload: any;
      music: any;
    };
    constructor(props: React.Component);
    componentDidMount(): void;
    render(): JSX.Element;
  }
}
