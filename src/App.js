import React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import { store } from './store';

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen/>
    </Provider>
  );
};

export default App;
