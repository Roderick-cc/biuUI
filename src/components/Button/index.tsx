import * as React from 'react';
import classnames from 'classnames';
import './index.less';

/**
 * @param {onClick} func 对外暴露的点击事件
 * @param {className} string 自定义类名
 * @param {type} string 按钮类型 primary | warning | info | default | pure
 * @param {shape} string 按钮形状 circle | radius(默认)
 */
type ButtonType =
  | 'primary'
  | 'warning'
  | 'info'
  | 'default'
  | 'pure'
  | 'slider1'
  | 'slider2';

type typeModel = 'nomal' | 'slide' | undefined;

interface IButton {
  typeModel?: typeModel;
  type?: ButtonType;
  children?: React.ReactNode;
  shape?: string;
  block?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
}
const typeModelArr = {
  nomal: 'biu-btn',
  slide: 'bit-btn-slide'
};
function Button(props: IButton) {
  const { children, onClick, className, type, shape, block, typeModel } = props;

  const handTypeModal = (typeModel: typeModel): string => {
    switch (true) {
      case typeModel === 'slide':
        return typeModelArr['slide'];
      default:
        return typeModelArr['nomal'];
    }
  };

  return (
    <button
      className={classnames(
        `${handTypeModal(typeModel)}`,
        'ripple',
        type,
        shape,
        block ? 'block' : '',
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
