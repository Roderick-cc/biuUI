import React from 'react';

import './index.less';

class Index extends React.Component {
  constructor(props) {
    super(props);
    const { isOpened } = props;
    this.state = {
      _isOpened: isOpened
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isOpened } = nextProps;
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      });
    }
  }

  handleClose = () => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose();
    }
  };

  close = () => {
    this.setState(
      {
        _isOpened: false
      },
      this.handleClose
    );
  };

  render() {
    const { _isOpened } = this.state;
    const { isOpened, title } = this.props;
    if (!isOpened) return null;
    return (
      <div
        className="mask-con"
        style={{ visibility: _isOpened ? 'visible' : '' }}
        onClick={this.close}
      >
        <div className="layout__overlay" />
        {this.props.children}
      </div>
    );
  }
}

export default Index;
