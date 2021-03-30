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
            "export { default as Button } from './components/Button';\nexport { default as Tag } from './components/Tag';\nexport { default as Curtain } from './components/Curtain';\nexport { default as ArrowButton } from './components/ArrowButton';\n\n"
        },
        'components/Button/index.tsx': {
          import: './components/Button',
          content:
            "import * as React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * @param {onClick} func 对外暴露的点击事件\n * @param {className} string 自定义类名\n * @param {type} string 按钮类型 primary | warning | info | default | pure\n * @param {shape} string 按钮形状 circle | radius(默认)\n */\ntype ButtonType =\n  | 'primary'\n  | 'warning'\n  | 'info'\n  | 'default'\n  | 'pure'\n  | 'slider1'\n  | 'slider2';\n\ntype typeModel = 'nomal' | 'slide' | undefined;\n\ninterface IButton {\n  typeModel?: typeModel;\n  type?: ButtonType;\n  children?: React.ReactNode;\n  shape?: string;\n  block?: string;\n  className?: string;\n  onClick?: React.MouseEventHandler<HTMLElement>;\n}\nconst typeModelArr = {\n  nomal: 'biu-btn',\n  slide: 'bit-btn-slide'\n};\nfunction Button(props: IButton) {\n  const { children, onClick, className, type, shape, block, typeModel } = props;\n\n  const handTypeModal = (typeModel: typeModel): string => {\n    switch (true) {\n      case typeModel === 'slide':\n        return typeModelArr['slide'];\n      default:\n        return typeModelArr['nomal'];\n    }\n  };\n\n  return (\n    <button\n      className={classnames(\n        `${handTypeModal(typeModel)}`,\n        'ripple',\n        type,\n        shape,\n        block ? 'block' : '',\n        className\n      )}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n}\n\nexport default Button;\n"
        },
        'index.less': {
          import: './index.less',
          content:
            '.btn-wrap {\n  margin: auto;\n  & > div {\n      filter: url(#outline);\n  }\n}\n\n.btn {\n  content: "";\n  width: 200px;\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  background: linear-gradient(#f49714, #fbe8c8, #f49714);\n  color: #be9451;\n  font-size: 24px;\n}\n\n.arc {\n  width: 200px;\n  height: 64px;\n  background: radial-gradient(circle at top left, transparent 15px, #f49714 0)\n          top left,\n      radial-gradient(circle at top right, transparent 15px, #f49714 0) top\n          right,\n      radial-gradient(circle at bottom right, transparent 15px, #f49714 0)\n          bottom right,\n      radial-gradient(circle at bottom left, transparent 15px, #f49714 0)\n          bottom left;\n  background-size: 50% 50%;\n  background-repeat: no-repeat;\n  // filter: url(#outline);\n}\n\n.notching {\n  width: 200px;\n  height: 64px;\n  background: linear-gradient(135deg, transparent 15px, #f49714 0) top left,\n      linear-gradient(-135deg, transparent 15px, #f49714 0) top right,\n      linear-gradient(-45deg, transparent 15px, #f49714 0) bottom right,\n      linear-gradient(45deg, transparent 15px, #f49714 0) bottom left;\n  background-size: 50% 50%;\n  background-repeat: no-repeat;\n  // filter: url(#outline);\n}\n\n.arrow {\n  position: relative;\n  width: 180px;\n  height: 64px;\n  background: #f49714;\n  // filter: url(#outline);\n\n  &::after {\n      content: "";\n      position: absolute;\n      width: 32px;\n      height: 64px;\n      top: 0;\n      right: -32px;\n      background: \n          linear-gradient(-45deg, transparent 0, transparent 22px, #f49714 22px, #f49714 100%),\n          linear-gradient(-135deg, transparent 0, transparent 22px, #f49714 22px, #f49714 100%);\n      background-size: 32px 32px;\n      background-repeat: no-repeat;\n      background-position: 0 bottom, 0 top;\n  }\n}\n\n.arrow2 {\n  position: relative;\n  width: 150px;\n  height: 64px;\n  background: #f49714;\n  // filter: url(#outline);\n\n  &::before {\n      content: "";\n      position: absolute;\n      width: 32px;\n      height: 64px;\n      top: 0;\n      left: -32px;\n      background: #000;\n      background: \n          linear-gradient(-45deg, #f49714 0, #f49714 24px, transparent 24px, transparent),\n          linear-gradient(-135deg, #f49714 0, #f49714 24px, transparent 24px, transparent);\n  }\n  \n  &::after {\n      content: "";\n      position: absolute;\n      width: 32px;\n      height: 64px;\n      top: 0;\n      right: -32px;\n      background: #000;\n      background: \n          linear-gradient(-45deg, transparent 0, transparent 22px, #f49714 22px, #f49714 1px),\n          linear-gradient(-135deg, transparent 0, transparent 22px, #f49714 22px, #f49714 1px);\n      background-size: 32px 32px;\n      background-repeat: no-repeat;\n      background-position: 0 bottom, 0 top;\n  }\n}\n\n.coupon {\n  position: relative;\n  width: 200px;\n  height: 64px;\n  background-image: \n      radial-gradient(circle at 1px 11px, transparent 8px, #f49714 8px, #f49714 0px),\n      radial-gradient(circle at 99px 11px, transparent 8px, #f49714 8px, #f49714 0px);\n  background-size: 100px 21px;\n  background-position: 0 0, 100px 0;\n  background-repeat-x: no-repeat;\n  cursor: pointer;\n}\n\n\n\n'
        },
        'components/Tag/index.tsx': {
          import: './components/Tag',
          content:
            "import React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * 标签组件\n * @param {closable} boolean 是否可关闭\n * @param {onClose} func 标签关闭时的回调\n * @param {color} string 标签的颜色,不设置则为默认颜色\n */\nfunction Tag(props) {\n  let { children, closable, onClose, color } = props;\n  let tag = React.createRef();\n  let handleClose = () => {\n    onClose && onClose();\n    tag.current.style.display = 'none';\n  };\n  return (\n    <div\n      className={classnames('xTag', color ? 'xTagHasColor' : '')}\n      style={{ backgroundColor: color }}\n      ref={tag}\n    >\n      {children}\n      {closable && (\n        <span className=\"closeBtn\" onClick={handleClose}>\n          x\n        </span>\n      )}\n    </div>\n  );\n}\n\nexport default Tag;\n"
        },
        'components/Curtain/index.tsx': {
          import: './components/Curtain',
          content:
            "import React from 'react';\n\nimport './index.less';\n\ninterface IProps {\n  visible?: boolean;\n  title?: string;\n  onClose?: () => void;\n  closeBtnPosition?:\n    | 'top'\n    | 'top-left'\n    | 'top-right'\n    | 'bottom'\n    | 'bottom-left'\n    | 'bottom-right'\n    | 'none'\n    | undefined;\n}\n\ninterface IState {\n  _visible?: boolean;\n}\nclass Index extends React.Component<IProps, IState> {\n  public constructor(props: IProps) {\n    super(props);\n    const { visible } = props;\n    this.state = {\n      _visible: visible\n    };\n  }\n\n  public componentWillReceiveProps(nextProps: IProps) {\n    const { visible } = nextProps;\n    if (visible !== this.state._visible) {\n      this.setState({\n        _visible: visible\n      });\n    }\n  }\n\n  private handleClose = () => {\n    if (typeof this.props.onClose === 'function') {\n      this.props.onClose();\n    }\n  };\n\n  private close = () => {\n    this.setState(\n      {\n        _visible: false\n      },\n      this.handleClose\n    );\n  };\n\n  render(): JSX.Element | null {\n    const { _visible } = this.state;\n    const { visible, title, closeBtnPosition = 'bottom' } = this.props;\n    if (!visible) return null;\n    return (\n      <div\n        className=\"mask-con\"\n        style={{ visibility: _visible ? 'visible' : '' }}\n      >\n        <div className=\"layout__overlay\" onClick={this.close} />\n        <div className=\"layout__center\">\n          {this.props.children}\n          <div\n            className={`at-curtain__btn-close at-curtain__btn-close--${closeBtnPosition}`}\n            onClick={this.close}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default Index;\n"
        },
        'components/ArrowButton/index.tsx': {
          import: './components/ArrowButton',
          content:
            "import React, { Component } from 'react'\nimport classnames from 'classnames';\nimport './index.less';\n\ntype type = 'arc' | 'notching' | 'arrow' | 'arrow2' | 'coupon' | 'notching'\ninterface IProps {\n  type: type\n}\n\nfunction ArrowButton(props: IProps) {\n  const { type = 'arrow' } = props;\n\n  return (\n    <div className=\"btn-wrap\">\n      <div className={`${type}`}></div>\n    </div>\n  )\n}\n\nexport default ArrowButton;\n"
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
            "import React, { useState } from 'react';\nimport { Curtain } from '../src';\nimport './index.less';\n\nconst Index = () => {\n  const [isModalVisible, setIsModalVisible] = useState(true);\n  const [closeBtnPosition, setCloseBtnPosition] = useState('bottom');\n\n  return (\n    <div className=\"page-layout\">\n      <div\n        onClick={() => {\n          setIsModalVisible(true);\n        }}\n      >\n        点击幕帘\n      </div>\n\n      <Curtain\n        visible={isModalVisible}\n        onClose={() => {\n          setIsModalVisible(false);\n        }}\n        closeBtnPosition=\"bottom\"\n      >\n        <div className=\"layout\">这是内容这是内容这是内容这是内容</div>\n      </Curtain>\n    </div>\n  );\n};\n\nexport default Index;\n"
        },
        'src/index.ts': {
          import: '../src',
          content:
            "export { default as Button } from './components/Button';\nexport { default as Tag } from './components/Tag';\nexport { default as Curtain } from './components/Curtain';\nexport { default as ArrowButton } from './components/ArrowButton';\n\n"
        },
        'components/Button/index.tsx': {
          import: './components/Button',
          content:
            "import * as React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * @param {onClick} func 对外暴露的点击事件\n * @param {className} string 自定义类名\n * @param {type} string 按钮类型 primary | warning | info | default | pure\n * @param {shape} string 按钮形状 circle | radius(默认)\n */\ntype ButtonType =\n  | 'primary'\n  | 'warning'\n  | 'info'\n  | 'default'\n  | 'pure'\n  | 'slider1'\n  | 'slider2';\n\ntype typeModel = 'nomal' | 'slide' | undefined;\n\ninterface IButton {\n  typeModel?: typeModel;\n  type?: ButtonType;\n  children?: React.ReactNode;\n  shape?: string;\n  block?: string;\n  className?: string;\n  onClick?: React.MouseEventHandler<HTMLElement>;\n}\nconst typeModelArr = {\n  nomal: 'biu-btn',\n  slide: 'bit-btn-slide'\n};\nfunction Button(props: IButton) {\n  const { children, onClick, className, type, shape, block, typeModel } = props;\n\n  const handTypeModal = (typeModel: typeModel): string => {\n    switch (true) {\n      case typeModel === 'slide':\n        return typeModelArr['slide'];\n      default:\n        return typeModelArr['nomal'];\n    }\n  };\n\n  return (\n    <button\n      className={classnames(\n        `${handTypeModal(typeModel)}`,\n        'ripple',\n        type,\n        shape,\n        block ? 'block' : '',\n        className\n      )}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n}\n\nexport default Button;\n"
        },
        'index.less': {
          import: './index.less',
          content:
            '.page-layout {\n  padding-top: 30px;\n  .layout {\n    width: 200px;\n    height: 200px;\n    background-color: #fff;\n    border-radius: 10px;\n  }\n}\n'
        },
        'components/Tag/index.tsx': {
          import: './components/Tag',
          content:
            "import React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * 标签组件\n * @param {closable} boolean 是否可关闭\n * @param {onClose} func 标签关闭时的回调\n * @param {color} string 标签的颜色,不设置则为默认颜色\n */\nfunction Tag(props) {\n  let { children, closable, onClose, color } = props;\n  let tag = React.createRef();\n  let handleClose = () => {\n    onClose && onClose();\n    tag.current.style.display = 'none';\n  };\n  return (\n    <div\n      className={classnames('xTag', color ? 'xTagHasColor' : '')}\n      style={{ backgroundColor: color }}\n      ref={tag}\n    >\n      {children}\n      {closable && (\n        <span className=\"closeBtn\" onClick={handleClose}>\n          x\n        </span>\n      )}\n    </div>\n  );\n}\n\nexport default Tag;\n"
        },
        'components/Curtain/index.tsx': {
          import: './components/Curtain',
          content:
            "import React from 'react';\n\nimport './index.less';\n\ninterface IProps {\n  visible?: boolean;\n  title?: string;\n  onClose?: () => void;\n  closeBtnPosition?:\n    | 'top'\n    | 'top-left'\n    | 'top-right'\n    | 'bottom'\n    | 'bottom-left'\n    | 'bottom-right'\n    | 'none'\n    | undefined;\n}\n\ninterface IState {\n  _visible?: boolean;\n}\nclass Index extends React.Component<IProps, IState> {\n  public constructor(props: IProps) {\n    super(props);\n    const { visible } = props;\n    this.state = {\n      _visible: visible\n    };\n  }\n\n  public componentWillReceiveProps(nextProps: IProps) {\n    const { visible } = nextProps;\n    if (visible !== this.state._visible) {\n      this.setState({\n        _visible: visible\n      });\n    }\n  }\n\n  private handleClose = () => {\n    if (typeof this.props.onClose === 'function') {\n      this.props.onClose();\n    }\n  };\n\n  private close = () => {\n    this.setState(\n      {\n        _visible: false\n      },\n      this.handleClose\n    );\n  };\n\n  render(): JSX.Element | null {\n    const { _visible } = this.state;\n    const { visible, title, closeBtnPosition = 'bottom' } = this.props;\n    if (!visible) return null;\n    return (\n      <div\n        className=\"mask-con\"\n        style={{ visibility: _visible ? 'visible' : '' }}\n      >\n        <div className=\"layout__overlay\" onClick={this.close} />\n        <div className=\"layout__center\">\n          {this.props.children}\n          <div\n            className={`at-curtain__btn-close at-curtain__btn-close--${closeBtnPosition}`}\n            onClick={this.close}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default Index;\n"
        },
        'components/ArrowButton/index.tsx': {
          import: './components/ArrowButton',
          content:
            "import React, { Component } from 'react'\nimport classnames from 'classnames';\nimport './index.less';\n\ntype type = 'arc' | 'notching' | 'arrow' | 'arrow2' | 'coupon' | 'notching'\ninterface IProps {\n  type: type\n}\n\nfunction ArrowButton(props: IProps) {\n  const { type = 'arrow' } = props;\n\n  return (\n    <div className=\"btn-wrap\">\n      <div className={`${type}`}></div>\n    </div>\n  )\n}\n\nexport default ArrowButton;\n"
        }
      },
      dependencies: {
        react: { version: '17.0.1' },
        classnames: { version: '2.2.6' }
      },
      identifier: 'biuui-curtain'
    }
  },
  'biuui-tag': {
    component: require('/Users/shide/PROJ/biuUI/demo/Tag.tsx').default,
    previewerProps: {
      sources: {
        _: {
          tsx:
            'import React from \'react\';\nimport { Tag, ArrowButton } from \'../src\';\n\n\nfunction TagDemo() {\n  return (\n    <div>\n      <Tag color="#06c">标签</Tag>\n      <Tag color="red">标签</Tag>\n      <Tag color="orange">标签</Tag>\n      <Tag >标签</Tag><br />\n      <Tag color="green" closable>标签</Tag>\n      <Tag closable>标签</Tag>\n    </div>\n  );\n}\n\nexport default TagDemo\n\n\n'
        },
        'src/index.ts': {
          import: '../src',
          content:
            "export { default as Button } from './components/Button';\nexport { default as Tag } from './components/Tag';\nexport { default as Curtain } from './components/Curtain';\nexport { default as ArrowButton } from './components/ArrowButton';\n\n"
        },
        'components/Button/index.tsx': {
          import: './components/Button',
          content:
            "import * as React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * @param {onClick} func 对外暴露的点击事件\n * @param {className} string 自定义类名\n * @param {type} string 按钮类型 primary | warning | info | default | pure\n * @param {shape} string 按钮形状 circle | radius(默认)\n */\ntype ButtonType =\n  | 'primary'\n  | 'warning'\n  | 'info'\n  | 'default'\n  | 'pure'\n  | 'slider1'\n  | 'slider2';\n\ntype typeModel = 'nomal' | 'slide' | undefined;\n\ninterface IButton {\n  typeModel?: typeModel;\n  type?: ButtonType;\n  children?: React.ReactNode;\n  shape?: string;\n  block?: string;\n  className?: string;\n  onClick?: React.MouseEventHandler<HTMLElement>;\n}\nconst typeModelArr = {\n  nomal: 'biu-btn',\n  slide: 'bit-btn-slide'\n};\nfunction Button(props: IButton) {\n  const { children, onClick, className, type, shape, block, typeModel } = props;\n\n  const handTypeModal = (typeModel: typeModel): string => {\n    switch (true) {\n      case typeModel === 'slide':\n        return typeModelArr['slide'];\n      default:\n        return typeModelArr['nomal'];\n    }\n  };\n\n  return (\n    <button\n      className={classnames(\n        `${handTypeModal(typeModel)}`,\n        'ripple',\n        type,\n        shape,\n        block ? 'block' : '',\n        className\n      )}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n}\n\nexport default Button;\n"
        },
        'index.less': {
          import: './index.less',
          content:
            '.btn-wrap {\n  margin: auto;\n  & > div {\n      filter: url(#outline);\n  }\n}\n\n.btn {\n  content: "";\n  width: 200px;\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  background: linear-gradient(#f49714, #fbe8c8, #f49714);\n  color: #be9451;\n  font-size: 24px;\n}\n\n.arc {\n  width: 200px;\n  height: 64px;\n  background: radial-gradient(circle at top left, transparent 15px, #f49714 0)\n          top left,\n      radial-gradient(circle at top right, transparent 15px, #f49714 0) top\n          right,\n      radial-gradient(circle at bottom right, transparent 15px, #f49714 0)\n          bottom right,\n      radial-gradient(circle at bottom left, transparent 15px, #f49714 0)\n          bottom left;\n  background-size: 50% 50%;\n  background-repeat: no-repeat;\n  // filter: url(#outline);\n}\n\n.notching {\n  width: 200px;\n  height: 64px;\n  background: linear-gradient(135deg, transparent 15px, #f49714 0) top left,\n      linear-gradient(-135deg, transparent 15px, #f49714 0) top right,\n      linear-gradient(-45deg, transparent 15px, #f49714 0) bottom right,\n      linear-gradient(45deg, transparent 15px, #f49714 0) bottom left;\n  background-size: 50% 50%;\n  background-repeat: no-repeat;\n  // filter: url(#outline);\n}\n\n.arrow {\n  position: relative;\n  width: 180px;\n  height: 64px;\n  background: #f49714;\n  // filter: url(#outline);\n\n  &::after {\n      content: "";\n      position: absolute;\n      width: 32px;\n      height: 64px;\n      top: 0;\n      right: -32px;\n      background: \n          linear-gradient(-45deg, transparent 0, transparent 22px, #f49714 22px, #f49714 100%),\n          linear-gradient(-135deg, transparent 0, transparent 22px, #f49714 22px, #f49714 100%);\n      background-size: 32px 32px;\n      background-repeat: no-repeat;\n      background-position: 0 bottom, 0 top;\n  }\n}\n\n.arrow2 {\n  position: relative;\n  width: 150px;\n  height: 64px;\n  background: #f49714;\n  // filter: url(#outline);\n\n  &::before {\n      content: "";\n      position: absolute;\n      width: 32px;\n      height: 64px;\n      top: 0;\n      left: -32px;\n      background: #000;\n      background: \n          linear-gradient(-45deg, #f49714 0, #f49714 24px, transparent 24px, transparent),\n          linear-gradient(-135deg, #f49714 0, #f49714 24px, transparent 24px, transparent);\n  }\n  \n  &::after {\n      content: "";\n      position: absolute;\n      width: 32px;\n      height: 64px;\n      top: 0;\n      right: -32px;\n      background: #000;\n      background: \n          linear-gradient(-45deg, transparent 0, transparent 22px, #f49714 22px, #f49714 1px),\n          linear-gradient(-135deg, transparent 0, transparent 22px, #f49714 22px, #f49714 1px);\n      background-size: 32px 32px;\n      background-repeat: no-repeat;\n      background-position: 0 bottom, 0 top;\n  }\n}\n\n.coupon {\n  position: relative;\n  width: 200px;\n  height: 64px;\n  background-image: \n      radial-gradient(circle at 1px 11px, transparent 8px, #f49714 8px, #f49714 0px),\n      radial-gradient(circle at 99px 11px, transparent 8px, #f49714 8px, #f49714 0px);\n  background-size: 100px 21px;\n  background-position: 0 0, 100px 0;\n  background-repeat-x: no-repeat;\n  cursor: pointer;\n}\n\n\n\n'
        },
        'components/Tag/index.tsx': {
          import: './components/Tag',
          content:
            "import React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * 标签组件\n * @param {closable} boolean 是否可关闭\n * @param {onClose} func 标签关闭时的回调\n * @param {color} string 标签的颜色,不设置则为默认颜色\n */\nfunction Tag(props) {\n  let { children, closable, onClose, color } = props;\n  let tag = React.createRef();\n  let handleClose = () => {\n    onClose && onClose();\n    tag.current.style.display = 'none';\n  };\n  return (\n    <div\n      className={classnames('xTag', color ? 'xTagHasColor' : '')}\n      style={{ backgroundColor: color }}\n      ref={tag}\n    >\n      {children}\n      {closable && (\n        <span className=\"closeBtn\" onClick={handleClose}>\n          x\n        </span>\n      )}\n    </div>\n  );\n}\n\nexport default Tag;\n"
        },
        'components/Curtain/index.tsx': {
          import: './components/Curtain',
          content:
            "import React from 'react';\n\nimport './index.less';\n\ninterface IProps {\n  visible?: boolean;\n  title?: string;\n  onClose?: () => void;\n  closeBtnPosition?:\n    | 'top'\n    | 'top-left'\n    | 'top-right'\n    | 'bottom'\n    | 'bottom-left'\n    | 'bottom-right'\n    | 'none'\n    | undefined;\n}\n\ninterface IState {\n  _visible?: boolean;\n}\nclass Index extends React.Component<IProps, IState> {\n  public constructor(props: IProps) {\n    super(props);\n    const { visible } = props;\n    this.state = {\n      _visible: visible\n    };\n  }\n\n  public componentWillReceiveProps(nextProps: IProps) {\n    const { visible } = nextProps;\n    if (visible !== this.state._visible) {\n      this.setState({\n        _visible: visible\n      });\n    }\n  }\n\n  private handleClose = () => {\n    if (typeof this.props.onClose === 'function') {\n      this.props.onClose();\n    }\n  };\n\n  private close = () => {\n    this.setState(\n      {\n        _visible: false\n      },\n      this.handleClose\n    );\n  };\n\n  render(): JSX.Element | null {\n    const { _visible } = this.state;\n    const { visible, title, closeBtnPosition = 'bottom' } = this.props;\n    if (!visible) return null;\n    return (\n      <div\n        className=\"mask-con\"\n        style={{ visibility: _visible ? 'visible' : '' }}\n      >\n        <div className=\"layout__overlay\" onClick={this.close} />\n        <div className=\"layout__center\">\n          {this.props.children}\n          <div\n            className={`at-curtain__btn-close at-curtain__btn-close--${closeBtnPosition}`}\n            onClick={this.close}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default Index;\n"
        },
        'components/ArrowButton/index.tsx': {
          import: './components/ArrowButton',
          content:
            "import React, { Component } from 'react'\nimport classnames from 'classnames';\nimport './index.less';\n\ntype type = 'arc' | 'notching' | 'arrow' | 'arrow2' | 'coupon' | 'notching'\ninterface IProps {\n  type: type\n}\n\nfunction ArrowButton(props: IProps) {\n  const { type = 'arrow' } = props;\n\n  return (\n    <div className=\"btn-wrap\">\n      <div className={`${type}`}></div>\n    </div>\n  )\n}\n\nexport default ArrowButton;\n"
        }
      },
      dependencies: {
        react: { version: '17.0.1' },
        classnames: { version: '2.2.6' }
      },
      identifier: 'biuui-tag'
    }
  },
  'biuui-arrowbutton': {
    component: require('/Users/shide/PROJ/biuUI/demo/ArrowButton.tsx').default,
    previewerProps: {
      sources: {
        _: {
          tsx:
            "import React from 'react';\nimport { ArrowButton } from '../src';\n\n\nfunction ArrowButtonDemo() {\n  return (\n    <div>\n      <ArrowButton type='arc' />\n      <br />\n      <ArrowButton type='notching' />\n      <br />\n      <ArrowButton type='arrow' />\n      <br />\n      <ArrowButton type='arrow2' />\n      <br />\n      <ArrowButton type='coupon' />\n    </div>\n  );\n}\nexport default ArrowButtonDemo"
        },
        'src/index.ts': {
          import: '../src',
          content:
            "export { default as Button } from './components/Button';\nexport { default as Tag } from './components/Tag';\nexport { default as Curtain } from './components/Curtain';\nexport { default as ArrowButton } from './components/ArrowButton';\n\n"
        },
        'components/Button/index.tsx': {
          import: './components/Button',
          content:
            "import * as React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * @param {onClick} func 对外暴露的点击事件\n * @param {className} string 自定义类名\n * @param {type} string 按钮类型 primary | warning | info | default | pure\n * @param {shape} string 按钮形状 circle | radius(默认)\n */\ntype ButtonType =\n  | 'primary'\n  | 'warning'\n  | 'info'\n  | 'default'\n  | 'pure'\n  | 'slider1'\n  | 'slider2';\n\ntype typeModel = 'nomal' | 'slide' | undefined;\n\ninterface IButton {\n  typeModel?: typeModel;\n  type?: ButtonType;\n  children?: React.ReactNode;\n  shape?: string;\n  block?: string;\n  className?: string;\n  onClick?: React.MouseEventHandler<HTMLElement>;\n}\nconst typeModelArr = {\n  nomal: 'biu-btn',\n  slide: 'bit-btn-slide'\n};\nfunction Button(props: IButton) {\n  const { children, onClick, className, type, shape, block, typeModel } = props;\n\n  const handTypeModal = (typeModel: typeModel): string => {\n    switch (true) {\n      case typeModel === 'slide':\n        return typeModelArr['slide'];\n      default:\n        return typeModelArr['nomal'];\n    }\n  };\n\n  return (\n    <button\n      className={classnames(\n        `${handTypeModal(typeModel)}`,\n        'ripple',\n        type,\n        shape,\n        block ? 'block' : '',\n        className\n      )}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n}\n\nexport default Button;\n"
        },
        'index.less': {
          import: './index.less',
          content:
            '.btn-wrap {\n  margin: auto;\n  & > div {\n      filter: url(#outline);\n  }\n}\n\n.btn {\n  content: "";\n  width: 200px;\n  height: 64px;\n  line-height: 64px;\n  text-align: center;\n  background: linear-gradient(#f49714, #fbe8c8, #f49714);\n  color: #be9451;\n  font-size: 24px;\n}\n\n.arc {\n  width: 200px;\n  height: 64px;\n  background: radial-gradient(circle at top left, transparent 15px, #f49714 0)\n          top left,\n      radial-gradient(circle at top right, transparent 15px, #f49714 0) top\n          right,\n      radial-gradient(circle at bottom right, transparent 15px, #f49714 0)\n          bottom right,\n      radial-gradient(circle at bottom left, transparent 15px, #f49714 0)\n          bottom left;\n  background-size: 50% 50%;\n  background-repeat: no-repeat;\n  // filter: url(#outline);\n}\n\n.notching {\n  width: 200px;\n  height: 64px;\n  background: linear-gradient(135deg, transparent 15px, #f49714 0) top left,\n      linear-gradient(-135deg, transparent 15px, #f49714 0) top right,\n      linear-gradient(-45deg, transparent 15px, #f49714 0) bottom right,\n      linear-gradient(45deg, transparent 15px, #f49714 0) bottom left;\n  background-size: 50% 50%;\n  background-repeat: no-repeat;\n  // filter: url(#outline);\n}\n\n.arrow {\n  position: relative;\n  width: 180px;\n  height: 64px;\n  background: #f49714;\n  // filter: url(#outline);\n\n  &::after {\n      content: "";\n      position: absolute;\n      width: 32px;\n      height: 64px;\n      top: 0;\n      right: -32px;\n      background: \n          linear-gradient(-45deg, transparent 0, transparent 22px, #f49714 22px, #f49714 100%),\n          linear-gradient(-135deg, transparent 0, transparent 22px, #f49714 22px, #f49714 100%);\n      background-size: 32px 32px;\n      background-repeat: no-repeat;\n      background-position: 0 bottom, 0 top;\n  }\n}\n\n.arrow2 {\n  position: relative;\n  width: 150px;\n  height: 64px;\n  background: #f49714;\n  // filter: url(#outline);\n\n  &::before {\n      content: "";\n      position: absolute;\n      width: 32px;\n      height: 64px;\n      top: 0;\n      left: -32px;\n      background: #000;\n      background: \n          linear-gradient(-45deg, #f49714 0, #f49714 24px, transparent 24px, transparent),\n          linear-gradient(-135deg, #f49714 0, #f49714 24px, transparent 24px, transparent);\n  }\n  \n  &::after {\n      content: "";\n      position: absolute;\n      width: 32px;\n      height: 64px;\n      top: 0;\n      right: -32px;\n      background: #000;\n      background: \n          linear-gradient(-45deg, transparent 0, transparent 22px, #f49714 22px, #f49714 1px),\n          linear-gradient(-135deg, transparent 0, transparent 22px, #f49714 22px, #f49714 1px);\n      background-size: 32px 32px;\n      background-repeat: no-repeat;\n      background-position: 0 bottom, 0 top;\n  }\n}\n\n.coupon {\n  position: relative;\n  width: 200px;\n  height: 64px;\n  background-image: \n      radial-gradient(circle at 1px 11px, transparent 8px, #f49714 8px, #f49714 0px),\n      radial-gradient(circle at 99px 11px, transparent 8px, #f49714 8px, #f49714 0px);\n  background-size: 100px 21px;\n  background-position: 0 0, 100px 0;\n  background-repeat-x: no-repeat;\n  cursor: pointer;\n}\n\n\n\n'
        },
        'components/Tag/index.tsx': {
          import: './components/Tag',
          content:
            "import React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * 标签组件\n * @param {closable} boolean 是否可关闭\n * @param {onClose} func 标签关闭时的回调\n * @param {color} string 标签的颜色,不设置则为默认颜色\n */\nfunction Tag(props) {\n  let { children, closable, onClose, color } = props;\n  let tag = React.createRef();\n  let handleClose = () => {\n    onClose && onClose();\n    tag.current.style.display = 'none';\n  };\n  return (\n    <div\n      className={classnames('xTag', color ? 'xTagHasColor' : '')}\n      style={{ backgroundColor: color }}\n      ref={tag}\n    >\n      {children}\n      {closable && (\n        <span className=\"closeBtn\" onClick={handleClose}>\n          x\n        </span>\n      )}\n    </div>\n  );\n}\n\nexport default Tag;\n"
        },
        'components/Curtain/index.tsx': {
          import: './components/Curtain',
          content:
            "import React from 'react';\n\nimport './index.less';\n\ninterface IProps {\n  visible?: boolean;\n  title?: string;\n  onClose?: () => void;\n  closeBtnPosition?:\n    | 'top'\n    | 'top-left'\n    | 'top-right'\n    | 'bottom'\n    | 'bottom-left'\n    | 'bottom-right'\n    | 'none'\n    | undefined;\n}\n\ninterface IState {\n  _visible?: boolean;\n}\nclass Index extends React.Component<IProps, IState> {\n  public constructor(props: IProps) {\n    super(props);\n    const { visible } = props;\n    this.state = {\n      _visible: visible\n    };\n  }\n\n  public componentWillReceiveProps(nextProps: IProps) {\n    const { visible } = nextProps;\n    if (visible !== this.state._visible) {\n      this.setState({\n        _visible: visible\n      });\n    }\n  }\n\n  private handleClose = () => {\n    if (typeof this.props.onClose === 'function') {\n      this.props.onClose();\n    }\n  };\n\n  private close = () => {\n    this.setState(\n      {\n        _visible: false\n      },\n      this.handleClose\n    );\n  };\n\n  render(): JSX.Element | null {\n    const { _visible } = this.state;\n    const { visible, title, closeBtnPosition = 'bottom' } = this.props;\n    if (!visible) return null;\n    return (\n      <div\n        className=\"mask-con\"\n        style={{ visibility: _visible ? 'visible' : '' }}\n      >\n        <div className=\"layout__overlay\" onClick={this.close} />\n        <div className=\"layout__center\">\n          {this.props.children}\n          <div\n            className={`at-curtain__btn-close at-curtain__btn-close--${closeBtnPosition}`}\n            onClick={this.close}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default Index;\n"
        },
        'components/ArrowButton/index.tsx': {
          import: './components/ArrowButton',
          content:
            "import React, { Component } from 'react'\nimport classnames from 'classnames';\nimport './index.less';\n\ntype type = 'arc' | 'notching' | 'arrow' | 'arrow2' | 'coupon' | 'notching'\ninterface IProps {\n  type: type\n}\n\nfunction ArrowButton(props: IProps) {\n  const { type = 'arrow' } = props;\n\n  return (\n    <div className=\"btn-wrap\">\n      <div className={`${type}`}></div>\n    </div>\n  )\n}\n\nexport default ArrowButton;\n"
        }
      },
      dependencies: {
        react: { version: '17.0.1' },
        classnames: { version: '2.2.6' }
      },
      identifier: 'biuui-arrowbutton'
    }
  }
};
