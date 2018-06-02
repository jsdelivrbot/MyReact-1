import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
import reducers from './reducers';
import routes from './routes';

// browserHistory는 url이 바뀔 떄 어떤 컴포넌트를 랜더링할지 결정
import { Router, browserHistory } from 'react-router';

// hashHistory는 url이 바뀔 때 해쉬 심볼 이후의 것을 감지할 수 있도록 결정
// import { Router, hashHistory } from 'react-router';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
