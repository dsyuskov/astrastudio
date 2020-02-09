import React from 'react';

import './timer.scss';

export default function Timer(props) {
  return (
    <div className="timer header__timer">
      <div className="timer__column">
        <span className="timer__number">6</span>
        <span className="timer__sign">дней</span>
      </div>
      <div className="timer__column">
        <span className="timer__split">:</span>
      </div>
      <div className="timer__column">
        <span className="timer__number">0</span>
        <span className="timer__sign">часов</span>
      </div>
      <div className="timer__column">
        <span className="timer__split">:</span>
      </div>
      <div className="timer__column">
        <span className="timer__number">2</span>
        <span className="timer__sign">минут</span>
      </div>
      <div className="timer__column">
        <span className="timer__split">:</span>
      </div>
      <div className="timer__column">
        <span className="timer__number">26</span>
        <span className="timer__sign">секунд</span>
      </div>
    </div>
  )
}