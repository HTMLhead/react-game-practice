import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function makeRanBoolArr(num) {
  const randomArr = Array(num).fill(false);
  randomArr[Math.floor(Math.random() * num)] = 'soom';
  return randomArr;
}

function MakeSquare(props) {
  const element = <div className="square" onClick={props.onClick} />;
  return element;
}

function MakeSoom(props) {
  const element = (
    <div className="square" onClick={props.onClick}>
      <div className="soom" />
    </div>
  );
  return element;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addClass: false,
      ranArr: makeRanBoolArr(7),
    };
  }

  addClass() {
    this.setState({ addClass: true });
  }

  render() {
    let classList = ['square'];
    if (this.state.addClass) {
      classList = classList.concat(['square-click-ani']);
    }
    return (
      <div className="game-board">
        {this.state.ranArr.map((bool, i) => {
          if (bool === 'soom') {
            return (
              <MakeSoom
                key={i}
                className={classList.join(' ')}
                onClick={() => this.addClass}
              />
            );
          } else {
            return (
              <MakeSquare
                key={i}
                className={classList.join(' ')}
                onClick={() => this.addClass}
              />
            );
          }
        })}
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
