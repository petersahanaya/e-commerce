import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global.styled';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
)
