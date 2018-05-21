import React from 'react';
import ReactDOM from 'react-dom';

//Create a new Component, this component should produce
//some HTML

const App = () => {
    return <div>Hi! Test</div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));


