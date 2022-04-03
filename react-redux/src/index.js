import React from 'react';
import ReactDOM from 'react-dom';
import {store} from './store';
import { Provider } from 'react-redux';
import App from './components/App';

// store의 변화를 감지하여 다시렌더링 하기 위해 Provider를 이용한다. 
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

