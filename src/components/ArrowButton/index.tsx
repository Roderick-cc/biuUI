import React, { Component } from 'react';
import classnames from 'classnames';
import './index.less';

type type = 'arc' | 'notching' | 'arrow' | 'arrow2' | 'coupon' | 'notching';
interface IProps {
  type: type;
}

function ArrowButton(props: IProps) {
  const { type = 'arrow' } = props;

  return (
    <div className="btn-wrap">
      <div className={`${type}`}></div>
    </div>
  );
}

export default ArrowButton;
