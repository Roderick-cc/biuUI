import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { AtCountDownProps, AtCountdownState } from '@/types/countdown';
import AtCountdownItem from './Com';
import './index.less';

const toSeconds = (
  day: number,
  hours: number,
  minutes: number,
  seconds: number
): number => day * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

class AtCountdown extends Component<AtCountDownProps, AtCountdownState> {
  public static defaultProps: AtCountDownProps;

  private seconds: number;
  private timer: NodeJS.Timeout | number | undefined;

  public constructor(props: AtCountDownProps) {
    super(props);
    const { day, hours, minutes, seconds } = this.props;
    this.seconds = toSeconds(day!, hours!, minutes!, seconds!);

    console.log('2232323', this.seconds);

    const {
      day: _day,
      hours: _hours,
      minutes: _minutes,
      seconds: _seconds
    } = this.calculateTime();
    this.state = {
      _day,
      _hours,
      _minutes,
      _seconds
    };
    this.timer = undefined;
  }

  private setTimer(): void {
    if (!this.timer) this.countdonwn();
  }

  private clearTimer(): void {
    if (this.timer) {
      clearTimeout(this.timer as number);
      this.timer = undefined;
    }
  }

  private calculateTime() {
    let [day, hours, minutes, seconds] = [0, 0, 0, 0];

    // console.log('this.seconds', this.seconds);

    if (this.seconds > 0) {
      day = this.props.isShowDay
        ? Math.floor(this.seconds / (60 * 60 * 24))
        : 0;
      hours = Math.floor(this.seconds / (60 * 60)) - day * 24;
      minutes = Math.floor(this.seconds / 60) - day * 24 * 60 - hours * 60;
      seconds =
        Math.floor(this.seconds) -
        day * 24 * 60 * 60 -
        hours * 60 * 60 -
        minutes * 60;
    }
    // console.log('hours', hours)
    return {
      day,
      hours,
      minutes,
      seconds
    };
  }

  // 倒计时
  private countdonwn(): void {
    // console.log('123')
    const { day, hours, minutes, seconds } = this.calculateTime();

    this.setState({
      _day: day,
      _hours: hours,
      _minutes: minutes,
      _seconds: seconds
    });
    this.seconds--;

    if (this.seconds < 0) {
      this.clearTimer();
      this.props.onTimeUp && this.props.onTimeUp();
      return;
    }

    this.timer = setTimeout(() => {
      this.countdonwn();
    }, 1000);
  }

  public componentWillReceiveProps(nextProps: AtCountDownProps): void {
    if (JSON.stringify(this.props) === JSON.stringify(nextProps)) return;

    const { day, hours, minutes, seconds } = nextProps;
    this.seconds = toSeconds(day!, hours!, minutes!, seconds!);
    this.clearTimer();
    this.setTimer();
  }

  public componentDidMount(): void {
    this.setTimer();
  }

  public componentWillUnmount(): void {
    this.clearTimer();
  }

  render(): JSX.Element {
    const {
      className,
      customStyle,
      format, //  day: '天',hours: '时',minutes: '分',seconds: '秒'
      isShowDay, //	是否显示天数
      isShowHour //是否显示小时
    } = this.props;

    const { _day, _hours, _minutes, _seconds } = this.state;

    return (
      <div
        className={classNames(
          {
            'biu-countdown': true
          },
          className
        )}
        style={{ customStyle }}
      >
        {isShowDay && <AtCountdownItem num={_day} separator={format!.day} />}
        {isShowHour && (
          <AtCountdownItem num={_hours} separator={format!.hours} />
        )}
        <AtCountdownItem num={_minutes} separator={format!.minutes} />
        <AtCountdownItem num={_seconds} separator={format!.seconds} />
      </div>
    );
  }
}
AtCountdown.defaultProps = {
  customStyle: '',
  className: '',
  isShowDay: false,
  isShowHour: true,
  format: {
    day: '天',
    hours: '时',
    minutes: '分',
    seconds: '秒'
  },
  day: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
  onTimeUp() {}
};

export default AtCountdown;
