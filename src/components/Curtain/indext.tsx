import React from 'react';

import './index.less';

interface IProps {
  visible?: boolean;
  title?: string;
  onClose?: () => void;
  closeBtnPosition?:
    | 'top'
    | 'top-left'
    | 'top-right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'none'
    | undefined;
}

interface IState {
  _visible?: boolean;
}
class Index extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    const { visible } = props;
    this.state = {
      _visible: visible
    };
  }

  public componentWillReceiveProps(nextProps: IProps) {
    const { visible } = nextProps;
    if (visible !== this.state._visible) {
      this.setState({
        _visible: visible
      });
    }
  }

  private handleClose = () => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  };

  private close = () => {
    this.setState(
      {
        _visible: false
      },
      this.handleClose
    );
  };

  render(): JSX.Element | null {
    const { _visible } = this.state;
    const { visible, title, closeBtnPosition = 'bottom' } = this.props;
    if (!visible) return null;
    return (
      <div
        className="mask-con"
        style={{ visibility: _visible ? 'visible' : '' }}
      >
        <div className="layout__overlay" onClick={this.close} />
        <div className="layout__center">
          {this.props.children}
          <div
            className={`at-curtain__btn-close at-curtain__btn-close--${closeBtnPosition}`}
            onClick={this.close}
          />
        </div>
      </div>
    );
  }
}

export default Index;
