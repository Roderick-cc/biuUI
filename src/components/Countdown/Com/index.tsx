import React, { Component } from 'react';
import PropTypes, { InferProps } from 'prop-types';
import { AtCountdownItemProps } from '@/types/countdown';

class AtCountdownItem extends Component<AtCountdownItemProps> {
  public static defaultProps: AtCountdownItemProps;
  public static propTypes: InferProps<AtCountdownItemProps>;

  private formatNum(num: number): string {
    return num <= 9 ? `0${num}` : `${num}`;
  }

  public render(): JSX.Element {
    const { num, separator } = this.props;

    return (
      <div className="biu-countdown__item">
        <div className="biu-countdown__time-box">
          <span className="biu-countdown__time">{this.formatNum(num)}</span>
        </div>
        <span className="biu-countdown__separator">{separator}</span>
      </div>
    );
  }
}

export default AtCountdownItem;

AtCountdownItem.defaultProps = {
  num: 0,
  separator: ':'
};

AtCountdownItem.propTypes = {
  num: PropTypes.number.isRequired,
  separator: PropTypes.string
};
