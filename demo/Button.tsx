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
      <Button>按钮</Button>&nbsp;&nbsp;
      <Button type="warning">按钮</Button>&nbsp;&nbsp;
      <Button type="info">按钮</Button>&nbsp;&nbsp;
      <Button type="default">按钮</Button>&nbsp;&nbsp;
      <Button type="pure">按钮</Button>&nbsp;&nbsp;
      <Button typeModel="slide" type="slider1">
        按钮
      </Button>
      &nbsp;&nbsp;
      <Button typeModel="slide" type="slider2">
        按钮
      </Button>
      <FloatLayout isOpened={true} title={'123123'}>
        {/* <div style={{ color: '#fff' }}>12312</div> */}
        这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写这是内容区 随你怎么写这是内容区 随你怎么写这是内容区
        随你怎么写
      </FloatLayout>
    </div>
  );
}

export default ButtonDemo;
