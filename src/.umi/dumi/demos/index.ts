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
            'import React from \'react\';\nimport { Button, FloatLayout } from \'../src\';\n/**\n * title: Basic Modal\n * title.zh-CN: 基础 Modal\n * desc: This is a basic example of the antd Modal component\n * desc.zh-CN: 这是 antd Modal 组件的基础示例\n */\n\nfunction ButtonDemo() {\n  return (\n    <div>\n      默认：\n      <Button>按钮</Button>&nbsp;&nbsp;\n      <Button type="warning">按钮</Button>&nbsp;&nbsp;\n      <Button type="info">按钮</Button>&nbsp;&nbsp;\n      <Button type="default">按钮</Button>&nbsp;&nbsp;\n      <Button type="pure">按钮</Button>&nbsp;&nbsp;\n      <Button typeModel="slide" type="slider1">\n        按钮\n      </Button>\n      &nbsp;&nbsp;\n      <Button typeModel="slide" type="slider2">\n        按钮\n      </Button>\n      <FloatLayout isOpened={true} title={\'123123\'}>\n        {/* <div style={{ color: \'#fff\' }}>12312</div> */}\n        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区\n        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区\n        随你怎么写\n      </FloatLayout>\n    </div>\n  );\n}\n\nexport default ButtonDemo;\n'
        },
        'src/index.ts': {
          import: '../src',
          content:
            "export { default as Button } from './components/Button';\nexport { default as Tag } from './components/Tag';\nexport { default as FloatLayout } from './components/FloatLayout/indext'\n"
        },
        'components/Button/index.tsx': {
          import: './components/Button',
          content:
            "import * as React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * @param {onClick} func 对外暴露的点击事件\n * @param {className} string 自定义类名\n * @param {type} string 按钮类型 primary | warning | info | default | pure\n * @param {shape} string 按钮形状 circle | radius(默认)\n */\ntype ButtonType =\n  | 'primary'\n  | 'warning'\n  | 'info'\n  | 'default'\n  | 'pure'\n  | 'slider1'\n  | 'slider2';\n\ntype typeModel = 'nomal' | 'slide' | undefined;\n\ninterface IButton {\n  typeModel?: typeModel;\n  type?: ButtonType;\n  children?: React.ReactNode;\n  shape?: string;\n  block?: string;\n  className?: string;\n  onClick?: React.MouseEventHandler<HTMLElement>;\n}\nconst typeModelArr = {\n  nomal: 'biu-btn',\n  slide: 'bit-btn-slide'\n};\nfunction Button(props: IButton) {\n  const { children, onClick, className, type, shape, block, typeModel } = props;\n\n  const handTypeModal = (typeModel: typeModel): string => {\n    switch (true) {\n      case typeModel === 'slide':\n        return typeModelArr['slide'];\n      default:\n        return typeModelArr['nomal'];\n    }\n  };\n\n  return (\n    <button\n      className={classnames(\n        `${handTypeModal(typeModel)}`,\n        'ripple',\n        type,\n        shape,\n        block ? 'block' : '',\n        className\n      )}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n}\n\nexport default Button;\n"
        },
        'index.less': {
          import: './index.less',
          content:
            ".mask-con {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  visibility: hidden;\n  z-index: 810;\n  -webkit-transition: visibility 300ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  -o-transition: visibility 300ms cubic-bezier(0.36, 0.66, 0.04, 1);\n  transition: visibility 300ms cubic-bezier(0.36, 0.66, 0.04, 1);\n}\n.layout__overlay {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background-color: rgba(0, 0, 0, 0.8);\n  -webkit-transition: opacity 150ms ease-in;\n  -o-transition: opacity 150ms ease-in;\n  transition: opacity 150ms ease-in;\n  z-index: -1;\n}\n\n.select-radio {\n  width: 15px;\n  height: 15px;\n  border: 1px solid #e5e5e5;\n  border-radius: 50%;\n  margin-right: 5px;\n  margin-right: 6px;\n}\n.select {\n  background-color: #ffff;\n  border: 1px solid #ffff;\n  position: relative;\n  &::before {\n    content: '';\n    width: 4px;\n    height: 8px;\n    border-color: rgba(0, 0, 0, 0.5);\n    border-style: solid;\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg);\n    position: absolute;\n    left: 5px;\n    top: 1px;\n  }\n}\n.poster-con {\n  padding-top: 58px;\n  display: flex;\n  width: 223px;\n  margin: 0 auto;\n  .poster-header {\n    margin: 0 auto;\n    display: flex;\n    align-items: center;\n    .txt {\n      font-size: 14px;\n      font-weight: 500;\n      color: #ffffff;\n    }\n  }\n}\n"
        },
        'components/Tag/index.tsx': {
          import: './components/Tag',
          content:
            "import React from 'react';\nimport classnames from 'classnames';\nimport './index.less';\n\n/**\n * 标签组件\n * @param {closable} boolean 是否可关闭\n * @param {onClose} func 标签关闭时的回调\n * @param {color} string 标签的颜色,不设置则为默认颜色\n */\nfunction Tag(props) {\n  let { children, closable, onClose, color } = props;\n  let tag = React.createRef();\n  let handleClose = () => {\n    onClose && onClose();\n    tag.current.style.display = 'none';\n  };\n  return (\n    <div\n      className={classnames('xTag', color ? 'xTagHasColor' : '')}\n      style={{ backgroundColor: color }}\n      ref={tag}\n    >\n      {children}\n      {closable && (\n        <span className=\"closeBtn\" onClick={handleClose}>\n          x\n        </span>\n      )}\n    </div>\n  );\n}\n\nexport default Tag;\n"
        },
        'components/FloatLayout/indext.tsx': {
          import: './components/FloatLayout/indext',
          content:
            "\nimport React from 'react';\n\n\nimport './index.less';\n\n\n\nclass Index extends React.Component {\n\n  constructor(props) {\n    super(props);\n    const { isOpened } = props\n    this.state = {\n      _isOpened: isOpened\n    }\n  }\n\n  componentWillReceiveProps(nextProps) {\n    const { isOpened } = nextProps\n    if (isOpened !== this.state._isOpened) {\n      this.setState({\n        _isOpened: isOpened\n      })\n    }\n  }\n\n  handleClose = () => {\n    if (typeof this.props.onClose === 'function') {\n      this.props.onClose()\n    }\n  }\n\n  close = () => {\n    this.setState(\n      {\n        _isOpened: false\n      },\n      this.handleClose\n    )\n  }\n\n  render() {\n    const { _isOpened, } = this.state;\n    const {\n      isOpened,\n      title\n    } = this.props;\n    if (!isOpened) return null;\n    return (\n      <div className='mask-con' style={{ visibility: _isOpened ? 'visible' : '' }} onClick={this.close} >\n        <div className='layout__overlay' />\n        {this.props.children}\n      </div>\n    )\n  }\n}\n\nexport default Index;\n"
        }
      },
      dependencies: {
        react: { version: '17.0.1' },
        classnames: { version: '2.2.6' }
      },
      identifier: 'biuui-button'
    }
  }
};
