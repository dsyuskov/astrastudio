import React from 'react';
import moment from 'moment';

import './timer.scss';

export default class Timer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: null,
    }
  }

  componentDidMount() {
    this.setState({date: moment(this.props.date)}, this.tick);

    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    const hoursToDay = 24;
    const minutesToHour = 60;
    const secondsToMinute = 60;

    const { date } = this.state;

    const days = date.diff(moment(), 'days');
    const hours = date.diff(moment(), 'hours')
      - hoursToDay * days;
    const minutes = date.diff(moment(), 'minutes')
      - (hoursToDay * minutesToHour * days + hours * minutesToHour);
    const seconds = date.diff(moment(), 'seconds')
      - (hoursToDay * minutesToHour * secondsToMinute * days + hours * minutesToHour * secondsToMinute + secondsToMinute * minutes);

    this.setState({
      days,
      hours,
      minutes,
      seconds
    })
  }

  render() {
    const { date, days, hours, minutes, seconds } = this.state
    if (!date) return null;
    return (
      <div className="timer header__timer">
        <div className="timer__column">
          <span className="timer__number">{days}</span>
          <span className="timer__sign">дней</span>
        </div>
        <div className="timer__column">
          <span className="timer__split">:</span>
        </div>
        <div className="timer__column">
          <span className="timer__number">{hours}</span>
          <span className="timer__sign">часов</span>
        </div>
        <div className="timer__column">
          <span className="timer__split">:</span>
        </div>
        <div className="timer__column">
          <span className="timer__number">{minutes}</span>
          <span className="timer__sign">минут</span>
        </div>
        <div className="timer__column">
          <span className="timer__split">:</span>
        </div>
        <div className="timer__column">
          <span className="timer__number">{seconds}</span>
          <span className="timer__sign">секунд</span>
        </div>
      </div>
    )
  }
}
