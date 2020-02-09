import React from 'react';

import './task.scss';

import ProgressBar from '../progress-bar/progress-bar';

export default function Task(props) {
  const desc = {
    time: "Выйграть три игры, каждую менее чем за 3 минуты",
    kings: "Выйграть три игры, разложив всех королей",
    tournaments: "Выйграть пять турниров подряд",
  }

  return (
    <div className="task">
      <div className="task__avatar">
        <img className="avatar" src={require(`./task-${props.type}.png`)} alt="avatar"/>
      </div>
      <div className="task__descreption">
        <div className="descreption">
          {desc[props.type]}
        </div>
        <ProgressBar 
          progress = { props.progress }
        />
      </div>
      {props.progress === 100 ? (
        <div className="task__button">
          <button
            className="button"
            onClick = { props.onButtonClick }
          >Поставить рубашку</button>
        </div>)
       : null}
    </div>
  )
}