import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chart, Axis, Series, Tooltip, Cursor, Line, Bar } from "react-charts";

class App extends Component {
  render() {
    const data = [
      {
        label: "Series 1",
        data: [["Test", 12], [1, 26], [2, 411], [3, 22], [4, 75]]
      }
    ]
    return (
      <div className="App">
        <div style={{ width:"700px", height:"300px" }}>
          <Chart data={data}>
            <Axis primary type="ordinal" position="left" />
            <Axis type="linear" stacked position="bottom" />
            <Series type={Bar} />
            <Cursor primary />
            <Cursor />
            <Tooltip />
          </Chart>   
        </div>
      </div>
    );
  }
}

export default App;
