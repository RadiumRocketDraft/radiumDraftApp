import React from 'react';
import {NativeBaseProvider} from 'native-base';
import store from './src/store/store';
import {Provider} from 'react-redux';
import MainStack from './src/navigation/mainStack';

const App = () => (
  <Provider store={store}>
    <NativeBaseProvider>
      <MainStack />
    </NativeBaseProvider>
  </Provider>
);

export default App;
