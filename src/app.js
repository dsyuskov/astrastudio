import React from 'react';
import './app.scss';

function App() {
  
  return (
    <div className="app">
      <header className="header">
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
      </header>
      <main className="main">
        <div className="task">
          <div className="task__avatar">
            <img className="avatar" src={require("./assets/task-time.png")} alt="avatar"/>
          </div>
          <div className="task__descreption">
            <div className="descreption">
              Выиграть три игры разложив всех королей
            </div>
            <div className="progress-bar">
              <div className="progress-bar__load">
              </div>
            </div>
          </div>
          <div className="task__button">
            <button className="button">Поставить рубашку</button>
          </div>
        </div>
        <div className="task">
          <div className="task__avatar">
            <img className="avatar" src={require("./assets/task-time.png")} alt="avatar"/>
          </div>
          <div className="task__descreption">
            <div className="descreption">
              Выиграть три игры разложив всех королей
            </div>
            <div className="progress-bar">
              <div className="progress-bar__load">
              </div>
            </div>
          </div>
          <div className="task__button">
            <button className="button">Поставить рубашку</button>
          </div>
        </div>
        <div className="task">
          <div className="task__avatar">
            <img className="avatar" src={require("./assets/task-time.png")} alt="avatar"/>
          </div>
          <div className="task__descreption">
            <div className="descreption">
              Выиграть три игры разложив всех королей
            </div>
            <div className="progress-bar">
              <div className="progress-bar__load">
              </div>
            </div>
          </div>
          <div className="task__button">
            <button className="button">Поставить рубашку</button>
          </div>
        </div>

      </main>

    </div>
  );
}

export default App;
