import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

import { Throttle, Debounce } from 'react-throttle';

class App extends Component {
  render() {
    return (
      <Fragment>
        {/* 둘다 짧은 시간내에 대량의 이벤트가 발생할 경우 트래픽의 발생을 최소화 하기 위해
        타이머 규칙에 따른 이벤트만 발생시킴 */}

        {/* Throttle은 A이벤트가 발생후에 B이벤트가 발생하여도 timer가 진행 */}
        <Throttle time="1000" handler="onChange">
          <input onChange={(event) => console.log(event.target.value)} />
        </Throttle>
        <br />

        {/* Debounce A이벤트가 발생후에 B이벤트가 발생하면 timer가 초기화 */}
        <Debounce time="1000" handler="onChange">
          <input onChange={(event) => console.log(event.target.value)} />
        </Debounce>
      </Fragment>
    );
  }
}

export default App;
