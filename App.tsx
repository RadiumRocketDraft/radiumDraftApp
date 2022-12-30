import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import store from './src/store/store';
import {Provider} from 'react-redux';
import MainStack from './src/navigation/mainStack';

const App = () => (
  <Provider store={store}>
    <NavigationContainer>
      <NativeBaseProvider>
        <MainStack />
      </NativeBaseProvider>
    </NavigationContainer>
  </Provider>
);

export default App;
