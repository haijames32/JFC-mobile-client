import StackNavigation from './src/navigations/StackNavigation'
import { store, persistor } from './src/redux/store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <StackNavigation />
      </PersistGate>
    </Provider>
  );
}

export default App;
