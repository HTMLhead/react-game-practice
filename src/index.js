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
      //매직넘버 처리 어떻게? 전역변수로?
      ranArr: makeRanArr(7),
    };
  }

  addClass() {
    this.setState({ addClass: true });
  }

  renderSquare(i, className) {
    return (
      <MakeSquare
        key={i}
                className={classList.join(' ')}
                onClick={() => this.addClass}
              />
            );
  }

  renderSoom(i, className) {
    return (
              <MakeSquare
                key={i}
        className={className.join(' ')}
        onClick={() => this.addClass(i)}
      />
    );
  }
        })}
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById('root'));
