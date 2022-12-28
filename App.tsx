import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import {Login, CreateAccount} from './src/screens/index';
import TabNavigation from './src/components/tabNavigation';
import useIsSignedIn from './src/hooks/isSignIn';

const Stack = createNativeStackNavigator();

const App = () => {
  const [titleScreen, setTitleScreen] = useState('Match');
  const BottomNavigation = () => {
    return <TabNavigation setTitleScreen={setTitleScreen} />;
  };

  const isSignedIn = useIsSignedIn();

  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}>
          {isSignedIn ? (
            <>
              <Stack.Screen
                options={{
                  title: titleScreen,
                  headerShown: true,
                  headerBackVisible: false,
                }}
                name="Home"
                component={BottomNavigation}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen
                options={{
                  headerShown: true,
                  headerBackVisible: true,
                }}
                name="CreateAccount"
                component={CreateAccount}
              />
            </>
          )}
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
