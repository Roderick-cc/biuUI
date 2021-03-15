import React, { useState } from 'react';
import { Curtain } from '../src';
import './index.less';

const Index = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [closeBtnPosition, setCloseBtnPosition] = useState('bottom');

  return (
    <div className="page-layout">
      <div
        onClick={() => {
          setIsModalVisible(true);
        }}
      >
        点击幕帘
      </div>

      <Curtain
        visible={isModalVisible}
        onClose={() => {
          setIsModalVisible(false);
        }}
        closeBtnPosition="bottom"
      >
        <div className="layout">这是内容这是内容这是内容这是内容</div>
      </Curtain>
    </div>
  );
};

export default Index;
