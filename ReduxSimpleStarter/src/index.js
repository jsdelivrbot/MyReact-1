import React from 'react';
import ReactDOM from 'react-dom';

import Searchbar from './components/search_bar';

const API_KEY = 'AIzaSyA2PK1IAHpWT--LEGuL24V8oxor4W6PCqo';

//Create a new Component, this component should produce
//some HTML

const App = () => {
    return <div>
        <Searchbar />
    </div>;
}

ReactDOM.render(< App /> , document.querySelector('.container')); 