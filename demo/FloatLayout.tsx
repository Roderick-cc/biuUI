import React from 'react';
import { Button, FloatLayout } from '../src';
/**
 * title: Basic Modal
 * title.zh-CN: 基础 Modal
 * desc: This is a basic example of the antd Modal component
 * desc.zh-CN: 这是 antd Modal 组件的基础示例
 */

function ButtonDemo() {
  return (
    <div>
      默认：
      <br />
      <Button>按钮</Button>&nbsp;&nbsp;
      <Button type="warning">按钮</Button>&nbsp;&nbsp;
      <Button type="info">按钮</Button>&nbsp;&nbsp;
      <Button type="default">按钮</Button>&nbsp;&nbsp;
      <Button type="pure">按钮</Button>&nbsp;&nbsp;
      <div>PC 悬浮效果</div>
      <div>
        <Button typeModel="slide" type="slider1">
          {' '}
          按钮
        </Button>
        <Button typeModel="slide" type="slider2">
          按钮
        </Button>
      </div>
    </div>
  );
}

export default ButtonDemo;
