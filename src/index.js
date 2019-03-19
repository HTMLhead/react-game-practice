import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function makeRanArr(num) {
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
      //매직넘버 어떻게 처리?
      ranArr: makeRanArr(7),
    };
  }

  

  render() {
    let classList = "square"
    const title = `숨을 찾으면 당첨!`;
    return (
      <div className="title">
        {title}
        <div className="game-board">
          {this.state.ranArr.map((bool, i) => {
            if (bool === 'soom') {
              return this.renderSoom(i, classList);
            } else {
              return this.renderSquare(i, classList);
            }
          })}
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Game />, document.getElementById('root'));
