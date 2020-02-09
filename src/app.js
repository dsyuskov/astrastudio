import React from 'react';
import './app.scss';

import Task from './ui/task/task';
import Timer from './ui/timer/timer';
import Spinner from './ui/spinner/spinner';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showShirt: false,
      onLoad: true,
      onError: false,
      data: {},
    }
  }

  showShirt = () => {
    this.setState({showShirt: true});
  }

  componentDidMount() {
    this.setState({onLoad: true});
    fetch("https://sol-tst.herokuapp.com/api/v1/tasks/")
      .then(response => {
        if (!response.ok) {
          this.setState({onLoad: false, onError: true });
          throw new Error("Error load data");
        }
        return response.json();
      })
      .then(data => {
        this.setState({
          onLoad: false,
          data: data,
        })
      })
      .catch((e) => {console.log(e)})
  }

  render() {
    const { showShirt, onLoad, onError, data } = this.state;
    if ( showShirt || onError ) return <div className="app"></div>;

    if (onLoad || !data) return (
      <div className="app">
        <header className="header">
        </header>
        <main className="main">
          <Spinner />
        </main>
      </div>
    )

    return (
      <div className="app">
        <header className="header">
          <Timer
            date = {data.endsAt}
          />
        </header>
        <main className="main">
          {data.tasks.slice(0, 3).map(task => {
            return <Task
            key = { `${task.type} ${new Date()}`}
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
