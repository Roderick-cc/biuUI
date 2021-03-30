import React from 'react';
import { Tag, ArrowButton } from '../src';

function TagDemo() {
  return (
    <div>
      <Tag color="#06c">标签</Tag>
      <Tag color="red">标签</Tag>
      <Tag color="orange">标签</Tag>
      <Tag>标签</Tag>
      <br />
      <Tag color="green" closable>
        标签
      </Tag>
      <Tag closable>标签</Tag>
    </div>
  );
}

export default TagDemo;
