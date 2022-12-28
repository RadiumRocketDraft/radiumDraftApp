import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import Login from './src/screens/login';
import TabNavigation from './src/components/tabNavigation';
import store from './src/store/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = () => {
  const [titleScreen, setTitleScreen] = useState('Match');
  const BottomNavigation = () => {
    return <TabNavigation setTitleScreen={setTitleScreen} />;
  };

  return (
    <Provider store={store}>
      <NavigationContainer>
        <NativeBaseProvider>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              options={{title: titleScreen}}
              name="Home"
              component={BottomNavigation}
            />
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        </NativeBaseProvider>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
