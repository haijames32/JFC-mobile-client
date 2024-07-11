import { store } from './src/redux/store'
import { Provider } from 'react-redux'
import StackNavigation from './src/navigations/StackNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <StackNavigation />
    </Provider>
  );
}

export default App;
