import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Swiper from 'react-id-swiper';

class App extends Component {
  render() {

    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      spaceBetween: 30
    }

    return (
      <div className="App">
        <Swiper {...params}>
          <div className="slide">Slide 1</div>
          <div className="slide">Slide 2</div>
          <div className="slide">Slide 3</div>
          <div className="slide">Slide 4</div>
          <div className="slide">Slide 5</div>
          <div className="slide">Slide 6</div>
          <div className="slide">Slide 7</div>
          <div className="slide">Slide 8</div>
          <div className="slide">Slide 9</div>
        </Swiper>
      </div>
    );
  }
}

export default App;
