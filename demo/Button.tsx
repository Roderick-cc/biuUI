import React from 'react';
import { Button } from '../src';
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
      <Button>按钮</Button>&nbsp;&nbsp;
      <Button typeModel="slide" type="slider1">
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button typeModel="slide" type="slider2">
        按钮
      </Button>
    </div>
  );
}

export default ButtonDemo;
