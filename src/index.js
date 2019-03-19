import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function makeRanBoolArr(num) {
  const randomArr = Array(num).fill(false);
  randomArr[Math.floor(Math.random() * num)] = 'soom';
  return randomArr;
}

function makeSquare(props) {
  const element = (
    <div className='square' onClick={this.props.onClick}></div>
  )
  return element
}

function makeSoom(props) {
  const element = (
    <div className='square' onClick={this.props.onClick}>
      <div className='soom'></div>
    </div>
  )
  return element
}


