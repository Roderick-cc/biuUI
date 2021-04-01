import React from 'react';
import { Countdown } from '../src';
import './index.less';

function CountdownDemo() {
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style={{ marginBottom: '10px' }}>
        <h6>默认格式：时 : 分 : 秒</h6>
        <Countdown seconds={10000} />
        <h6>显示天数</h6>
        <Countdown isShowDay seconds={10000} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <h6>自定义格式： 天 : hh : mm : ss</h6>
        <Countdown
          isShowHour
          format={{ day: '天', hours: ':', minutes: ':', seconds: '' }}
          seconds={10000}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <h6> 倒计时时间到，执行的回调函数</h6>
        <Countdown
          isShowHour
          format={{ day: '天', hours: ':', minutes: ':', seconds: '' }}
          seconds={20}
          onTimeUp={() => {
            console.log('biu~');
          }}
        />
      </div>
    </div>
  );
}
export default CountdownDemo;
