import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import {Login, CreateAccount} from './src/screens/index';
import TabNavigation from './src/components/tabNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
  const [titleScreen, setTitleScreen] = useState('Match');
  const BottomNavigation = () => {
    return <TabNavigation setTitleScreen={setTitleScreen} />;
  };

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            options={{title: titleScreen}}
            name="Home"
            component={BottomNavigation}
          />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="CreateAccount" component={CreateAccount} />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
