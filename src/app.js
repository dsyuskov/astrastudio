import React from 'react';
import './app.scss';

import Task from './ui/task/task';
import Timer from './ui/timer/timer';

const arr = [
  {
      "type": "time",
      "progress": 30
  },
  {
      "type": "tournaments",
      "progress": 100
  },
  {
      "type": "kings",
      "progress": 60
  },
  {
    "type": "kings",
    "progress": 60
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showShirt: false
    }
  }

  showShirt = () => {
    this.setState({showShirt: true});
  }

  render() {
    const { showShirt } = this.state;
    if ( showShirt ) return <div className="app"></div>;

    return (
      <div className="app">
        <header className="header">
          <Timer />
        </header>
        <main className="main">
          {arr.slice(0, 3).map(task => {
            return <Task
            type = { task.type }
            progress = { task.progress }
            onButtonClick = { this.showShirt }
          />
          })}
        </main>
      </div>
    );
  }
}
