import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function makeRanBoolArr(num) {
  const randomArr = Array(num).fill(false);
  randomArr[Math.floor(Math.random() * num)] = 'soom';
  return randomArr;
}



