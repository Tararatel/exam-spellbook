import { Provider } from 'react-redux';
import Router from './Router/Router';
import { store } from './store';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
        <Router />
    </Provider>
  );
}

export default App;
