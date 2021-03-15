// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'biuui-button': {
    component: require('/Users/shide/PROJ/biuUI/demo/Button.tsx').default,
    previewerProps: {
      sources: {
        _: {
          tsx:
            'import React from \'react\';\nimport { Button, FloatLayout } from \'../src\';\n/**\n * title: Basic Modal\n * title.zh-CN: 基础 Modal\n * desc: This is a basic example of the antd Modal component\n * desc.zh-CN: 这是 antd Modal 组件的基础示例\n */\n\nfunction ButtonDemo() {\n  return (\n    <div>\n      默认：\n      <br />\n      <br />\n      <div>\n        <Button>按钮</Button>&nbsp;&nbsp;\n        <Button type="warning">按钮</Button>&nbsp;&nbsp;\n        <Button type="info">按钮</Button>&nbsp;&nbsp;\n        <Button type="default">按钮</Button>&nbsp;&nbsp;\n        <Button type="pure">按钮</Button>&nbsp;&nbsp;\n      </div>\n      <br />\n      <div>PC 悬浮效果</div>\n      <br />\n      <div>\n        <Button typeModel="slide" type="slider1">\n          {\' \'}\n          按钮\n        </Button>\n        <Button typeModel="slide" type="slider2">\n          按钮\n        </Button>\n      </div>\n    </div>\n  );\n}\n\nexport default ButtonDemo;\n'
        },
        'src/index.ts': {
          import: '../src',
          content:
            "export { default as Button } from './components/Button';\nexport { default as Tag } from './components/Tag';\nexport { default as Curtain } from './components/Curtain/indext';\n"
        },
        'components/Button/index.tsx': {
          import: './components/Button',
          content:
            "import * as React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * @param {onClick} func 对外暴露的点击事件\n * @param {className} string 自定义类名\n * @param {type} string 按钮类型 primary | warning | info | default | pure\n * @param {shape} string 按钮形状 circle | radius(默认)\n */\ntype ButtonType =\n  | 'primary'\n  | 'warning'\n  | 'info'\n  | 'default'\n  | 'pure'\n  | 'slider1'\n  | 'slider2';\n\ntype typeModel = 'nomal' | 'slide' | undefined;\n\ninterface IButton {\n  typeModel?: typeModel;\n  type?: ButtonType;\n  children?: React.ReactNode;\n  shape?: string;\n  block?: string;\n  className?: string;\n  onClick?: React.MouseEventHandler<HTMLElement>;\n}\nconst typeModelArr = {\n  nomal: 'biu-btn',\n  slide: 'bit-btn-slide'\n};\nfunction Button(props: IButton) {\n  const { children, onClick, className, type, shape, block, typeModel } = props;\n\n  const handTypeModal = (typeModel: typeModel): string => {\n    switch (true) {\n      case typeModel === 'slide':\n        return typeModelArr['slide'];\n      default:\n        return typeModelArr['nomal'];\n    }\n  };\n\n  return (\n    <button\n      className={classnames(\n        `${handTypeModal(typeModel)}`,\n        'ripple',\n        type,\n        shape,\n        block ? 'block' : '',\n        className\n      )}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n}\n\nexport default Button;\n"
        },
        'index.less': {
          import: './index.less',
          content:
            '.mask-con {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  visibility: hidden;\n  z-index: 810;\n  -webkit-transition: visibility 300ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  -o-transition: visibility 300ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: visibility 300ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.layout__overlay {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.8);\n  -webkit-transition: opacity 150ms ease-in;\n  -o-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n  z-index: -1;\n\n}\n.layout__center{\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n\n}\n\n.at-curtain__btn-close {\n  display: flex;\n  position: absolute;\n  width: 24px;\n  height: 24px;\n  margin-left: -12px;\n  left: 50%;\n  bottom: -40px;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #fff;\n  border-radius: 50%;\n  box-sizing: border-box;\n  z-index: 1080;\n}\n\n.at-curtain__btn-close--none {\n  display: none;\n}\n.at-curtain__btn-close--top {\n  margin-left: -14px;\n  top: -40px;\n  left: 50%;\n  bottom: auto;\n}\n.at-curtain__btn-close--top-left {\n  top: -40px;\n  left: 0;\n  bottom: auto;\n  transform: translateX(-100%);\n}\n.at-curtain__btn-close--top-right {\n  top: -40px;\n  left: auto;\n  right: 0;\n  bottom: auto;\n  transform: translateX(100%);\n}\n.at-curtain__btn-close--bottom {\n  margin-left: -14px;\n  bottom: -40px;\n  left: 50%;\n}\n.at-curtain__btn-close--bottom-left {\n  bottom: -40px;\n  left: 0;\n}\n.at-curtain__btn-close--bottom-right {\n  bottom: -40px;\n  left: auto;\n  right: 0;\n}\n\n.at-curtain__btn-close::before {\n  transform: translate3d(-50%, -50%, 0) rotate(45deg);\n}\n.at-curtain__btn-close::after {\n  transform: translate3d(-50%, -50%, 0) rotate(-45deg);\n}\n\n.at-curtain__btn-close::before,\n.at-curtain__btn-close::after {\n  content: "";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: inline-block;\n  width: 12px;\n  height: 1px;\n  border-radius: 1px;\n  background: #fff;\n}'
        },
        'components/Tag/index.tsx': {
          import: './components/Tag',
          content:
            "import React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * 标签组件\n * @param {closable} boolean 是否可关闭\n * @param {onClose} func 标签关闭时的回调\n * @param {color} string 标签的颜色,不设置则为默认颜色\n */\nfunction Tag(props) {\n  let { children, closable, onClose, color } = props;\n  let tag = React.createRef();\n  let handleClose = () => {\n    onClose && onClose();\n    tag.current.style.display = 'none';\n  };\n  return (\n    <div\n      className={classnames('xTag', color ? 'xTagHasColor' : '')}\n      style={{ backgroundColor: color }}\n      ref={tag}\n    >\n      {children}\n      {closable && (\n        <span className=\"closeBtn\" onClick={handleClose}>\n          x\n        </span>\n      )}\n    </div>\n  );\n}\n\nexport default Tag;\n"
        },
        'components/Curtain/indext.tsx': {
          import: './components/Curtain/indext',
          content:
            "import React from 'react';\n\nimport './index.less';\n\ninterface IProps {\n  visible?: boolean;\n  title?: string;\n  onClose?: () => void;\n  closeBtnPosition?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'none' | undefined;\n}\n\ninterface IState {\n  _visible?: boolean;\n}\nclass Index extends React.Component<IProps, IState> {\n  public constructor(props: IProps) {\n    super(props);\n    const { visible } = props;\n    this.state = {\n      _visible: visible\n    };\n  }\n\n  public componentWillReceiveProps(nextProps: IProps) {\n    const { visible } = nextProps;\n    if (visible !== this.state._visible) {\n      this.setState({\n        _visible: visible\n      });\n    }\n  }\n\n  private handleClose = () => {\n    if (typeof this.props.onClose === 'function') {\n      this.props.onClose();\n    }\n  };\n\n  private close = () => {\n    this.setState(\n      {\n        _visible: false\n      },\n      this.handleClose\n    );\n  };\n\n  render(): JSX.Element | null {\n    const { _visible } = this.state;\n    const { visible, title, closeBtnPosition = 'bottom' } = this.props;\n    if (!visible) return null;\n    return (\n      <div\n        className=\"mask-con\"\n        style={{ visibility: _visible ? 'visible' : '' }}\n      >\n        <div className=\"layout__overlay\" onClick={this.close} />\n        <div className='layout__center'>\n          {this.props.children}\n          <div\n            className={`at-curtain__btn-close at-curtain__btn-close--${closeBtnPosition}`}\n            onClick={this.close}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default Index;\n"
        }
      },
      dependencies: {
        react: { version: '17.0.1' },
        classnames: { version: '2.2.6' }
      },
      identifier: 'biuui-button'
    }
  },
  'biuui-curtain': {
    component: require('/Users/shide/PROJ/biuUI/demo/Curtain.tsx').default,
    previewerProps: {
      sources: {
        _: {
          tsx:
            "import React, { useState } from 'react';\nimport { Curtain } from '../src';\nimport './index.less'\n\n\nconst Index = () => {\n  const [isModalVisible, setIsModalVisible] = useState(true);\n  const [closeBtnPosition, setCloseBtnPosition] = useState('bottom');\n\n  return (\n    <div className='page-layout'>\n      <div onClick={() => { setIsModalVisible(true) }}>点击幕帘</div>\n\n      <Curtain\n        visible={isModalVisible}\n        onClose={() => { setIsModalVisible(false); }}\n        closeBtnPosition='bottom'\n      >\n        <div className='layout'>这是内容这是内容这是内容这是内容</div>\n      </Curtain>\n    </div>\n  );\n}\n\nexport default Index;\n"
        },
        'src/index.ts': {
          import: '../src',
          content:
            "export { default as Button } from './components/Button';\nexport { default as Tag } from './components/Tag';\nexport { default as Curtain } from './components/Curtain/indext';\n"
        },
        'components/Button/index.tsx': {
          import: './components/Button',
          content:
            "import * as React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * @param {onClick} func 对外暴露的点击事件\n * @param {className} string 自定义类名\n * @param {type} string 按钮类型 primary | warning | info | default | pure\n * @param {shape} string 按钮形状 circle | radius(默认)\n */\ntype ButtonType =\n  | 'primary'\n  | 'warning'\n  | 'info'\n  | 'default'\n  | 'pure'\n  | 'slider1'\n  | 'slider2';\n\ntype typeModel = 'nomal' | 'slide' | undefined;\n\ninterface IButton {\n  typeModel?: typeModel;\n  type?: ButtonType;\n  children?: React.ReactNode;\n  shape?: string;\n  block?: string;\n  className?: string;\n  onClick?: React.MouseEventHandler<HTMLElement>;\n}\nconst typeModelArr = {\n  nomal: 'biu-btn',\n  slide: 'bit-btn-slide'\n};\nfunction Button(props: IButton) {\n  const { children, onClick, className, type, shape, block, typeModel } = props;\n\n  const handTypeModal = (typeModel: typeModel): string => {\n    switch (true) {\n      case typeModel === 'slide':\n        return typeModelArr['slide'];\n      default:\n        return typeModelArr['nomal'];\n    }\n  };\n\n  return (\n    <button\n      className={classnames(\n        `${handTypeModal(typeModel)}`,\n        'ripple',\n        type,\n        shape,\n        block ? 'block' : '',\n        className\n      )}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n}\n\nexport default Button;\n"
        },
        'index.less': {
          import: './index.less',
          content:
            '\n\n.page-layout{\n  padding-top: 30px;\n  .layout{\n    width: 200px;\n    height: 200px;\n    background-color: #fff;\n    border-radius: 10px;\n  }\n}'
        },
        'components/Tag/index.tsx': {
          import: './components/Tag',
          content:
            "import React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * 标签组件\n * @param {closable} boolean 是否可关闭\n * @param {onClose} func 标签关闭时的回调\n * @param {color} string 标签的颜色,不设置则为默认颜色\n */\nfunction Tag(props) {\n  let { children, closable, onClose, color } = props;\n  let tag = React.createRef();\n  let handleClose = () => {\n    onClose && onClose();\n    tag.current.style.display = 'none';\n  };\n  return (\n    <div\n      className={classnames('xTag', color ? 'xTagHasColor' : '')}\n      style={{ backgroundColor: color }}\n      ref={tag}\n    >\n      {children}\n      {closable && (\n        <span className=\"closeBtn\" onClick={handleClose}>\n          x\n        </span>\n      )}\n    </div>\n  );\n}\n\nexport default Tag;\n"
        },
        'components/Curtain/indext.tsx': {
          import: './components/Curtain/indext',
          content:
            "import React from 'react';\n\nimport './index.less';\n\ninterface IProps {\n  visible?: boolean;\n  title?: string;\n  onClose?: () => void;\n  closeBtnPosition?: 'top' | 'top-left' | 'top-right' | 'bottom' | 'bottom-left' | 'bottom-right' | 'none' | undefined;\n}\n\ninterface IState {\n  _visible?: boolean;\n}\nclass Index extends React.Component<IProps, IState> {\n  public constructor(props: IProps) {\n    super(props);\n    const { visible } = props;\n    this.state = {\n      _visible: visible\n    };\n  }\n\n  public componentWillReceiveProps(nextProps: IProps) {\n    const { visible } = nextProps;\n    if (visible !== this.state._visible) {\n      this.setState({\n        _visible: visible\n      });\n    }\n  }\n\n  private handleClose = () => {\n    if (typeof this.props.onClose === 'function') {\n      this.props.onClose();\n    }\n  };\n\n  private close = () => {\n    this.setState(\n      {\n        _visible: false\n      },\n      this.handleClose\n    );\n  };\n\n  render(): JSX.Element | null {\n    const { _visible } = this.state;\n    const { visible, title, closeBtnPosition = 'bottom' } = this.props;\n    if (!visible) return null;\n    return (\n      <div\n        className=\"mask-con\"\n        style={{ visibility: _visible ? 'visible' : '' }}\n      >\n        <div className=\"layout__overlay\" onClick={this.close} />\n        <div className='layout__center'>\n          {this.props.children}\n          <div\n            className={`at-curtain__btn-close at-curtain__btn-close--${closeBtnPosition}`}\n            onClick={this.close}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default Index;\n"
        }
      },
      dependencies: {
        react: { version: '17.0.1' },
        classnames: { version: '2.2.6' }
      },
      identifier: 'biuui-curtain'
    }
  }
};
