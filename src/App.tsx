import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import AppRouter from './config/router';
import { Provider } from 'react-redux';
import store from './config/redux/store';

function App() {
  return (
    <>
      <Provider store={store}>

        <AppRouter />
      </Provider>
    </>
  );
}

export default App;
