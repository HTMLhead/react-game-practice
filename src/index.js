import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function makeRanArr(num) {
  const randomArr = Array(num).fill(false);
  randomArr[Math.floor(Math.random() * num)] = 'soom';
  return randomArr;
}

function MakeSquare(props) {
  const element = <div className={props.className} onClick={props.onClick} />;
  return element;
}

function MakeSoom(props) {
  const element = (
    <div className="square" onClick={props.onClick}>
      <div className={props.className} />
    </div>
  );
  return element;
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //매직넘버 어떻게 처리?
      isGameEnd : false,
      ranArr: makeRanArr(7),
    };
  }

  clickHandler(i) {
    if (this.state.isGameEnd) return;
    const ranArr = this.state.ranArr.slice();
    if (ranArr[i] === true) return;
    if (ranArr[i] === 'soom' || ranArr[i] === 'checked') {
      ranArr[i] = 'checked'
      this.setState({
        isGameEnd : true,
        ranArr: ranArr
      })
      return;
    }
    ranArr[i] = true;
    this.setState({
      ranArr: ranArr,
    });
  }

  renderSoom(i, classList) {
    if(this.state.ranArr[i] === "checked") classList += ' soom-click-ani'
    return (
      <MakeSoom
        key={i}
        className={classList}
        onClick={() => this.clickHandler(i)}
      />
    );
  }

  renderSquare(i, classList) {
    if(this.state.ranArr[i] === true) classList += ' square-click-ani';
    return (
      <MakeSquare
        key={i}
        className={classList}
        onClick={() => this.clickHandler(i)}
      />
    );
  }

  render() {
    let classList = "square"
    const title = `숨을 찾으면 당첨!`;
    return (
      <div className="title">
        {title}
        <div className="game-board">
          {this.state.ranArr.map((bool, i) => {
            if (bool === 'soom' || bool === 'checked') {
              return this.renderSoom(i, 'soom');
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