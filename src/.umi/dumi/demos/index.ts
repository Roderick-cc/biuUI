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
            "import React from 'react';\nimport { Button } from '../src'\n/**\n * title: Basic Modal\n * title.zh-CN: 基础 Modal\n * desc: This is a basic example of the antd Modal component\n * desc.zh-CN: 这是 antd Modal 组件的基础示例\n */\n\nfunction ButtonDemo() {\n  return (\n    <div>\n      默认：\n      <Button>按钮</Button>&nbsp;&nbsp;\n\n      <Button typeModel='slide' type='slider1'>按钮</Button>&nbsp;&nbsp;\n\n      <Button typeModel='slide' type='slider2'>按钮</Button>\n    </div>\n  )\n}\n\nexport default ButtonDemo;"
        },
        'src/index.ts': {
          import: '../src',
          content:
            "export { default as Button } from './components/Button';\nexport { default as Tag } from './components/Tag';\n"
        },
        'components/Button/index.tsx': {
          import: './components/Button',
          content:
            "\nimport * as React from 'react';\nimport classnames from 'classnames';\nimport './index.less'\n\n/**\n * @param {onClick} func 对外暴露的点击事件\n * @param {className} string 自定义类名\n * @param {type} string 按钮类型 primary | warning | info | default | pure\n * @param {shape} string 按钮形状 circle | radius(默认)\n */\ntype ButtonType = \"primary\" | \"warning\" | \"info\" | \"default\" | \"pure\" | \"slider1\" | \"slider2\"\n\ntype typeModel = \"nomal\" | \"slide\" | undefined\n\ninterface IButton {\n  typeModel?: typeModel;\n  type?: ButtonType;\n  children?: React.ReactNode;\n  shape?: string;\n  block?: string;\n  className?: string;\n  onClick?: React.MouseEventHandler<HTMLElement>;\n}\nconst typeModelArr = {\n  \"nomal\": 'biu-btn',\n  'slide': 'bit-btn-slide'\n}\nfunction Button(props: IButton) {\n  const {\n    children, onClick, className, type, shape, block, typeModel\n  } = props\n\n  const handTypeModal = (typeModel: typeModel): string => {\n    switch (true) {\n      case typeModel === 'slide':\n        return typeModelArr['slide']\n      default:\n        return typeModelArr['nomal']\n    }\n  }\n\n  return (\n    <button\n      className={classnames(`${handTypeModal(typeModel)}`, 'ripple', type, shape, block ? 'block' : '', className)}\n      onClick={onClick}>\n      {children}\n    </button>\n  )\n}\n\nexport default Button;"
        },
        'index.less': {
          import: './index.less',
          content:
            '.xTag {\n  margin-bottom: 8px;\n  margin-right: 8px;\n  display: inline-block;\n  border-radius: 4px;\n  border: 1px solid #d9d9d9;\n  padding: 0 7px;\n  font-size: 12px;\n  line-height: 20px;\n  white-space: nowrap;\n  background-color: #fafafa;\n  &.xTagHasColor {\n    border-color: transparent;\n    color: #fff;\n    .closeBtn {\n      color: rgba(255, 255, 255, .6)\n    }\n  }\n  .closeBtn {\n    margin-left: 5px;\n    color: rgba(0, 0, 0, 0.45);\n    cursor: pointer;\n  }\n}'
        },
        'components/Tag/index.tsx': {
          import: './components/Tag',
          content:
            "import React from 'react';\nimport classnames from 'classnames';\nimport './index.less'\n\n/**\n * 标签组件\n * @param {closable} boolean 是否可关闭\n * @param {onClose} func 标签关闭时的回调\n * @param {color} string 标签的颜色,不设置则为默认颜色\n */\nfunction Tag(props) {\n  let { children, closable, onClose, color } = props\n  let tag = React.createRef()\n  let handleClose = () => {\n    onClose && onClose()\n    tag.current.style.display = 'none'\n  }\n  return <div\n    className={classnames('xTag', color ? 'xTagHasColor' : '')}\n    style={{ backgroundColor: color }}\n    ref={tag}>\n    {children}\n    {closable && <span className=\"closeBtn\" onClick={handleClose}>x</span>}\n  </div>\n}\n\nexport default Tag;"
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
