import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './Allroutes/MainRoutes';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <MainRoutes />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
