import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeBaseProvider} from 'native-base';
import TabNavigation from './src/components/tabNavigation';
import useIsSignedIn from './src/hooks/isSignIn';
import store from './src/store/store';
import {Provider} from 'react-redux';
import {SelectPlayers, Login, CreateAccount} from './src/screens';

const Stack = createNativeStackNavigator();

const App = () => {
  const [titleScreen, setTitleScreen] = useState('Match');
  const BottomNavigation = () => {
    return <TabNavigation setTitleScreen={setTitleScreen} />;
  };

  const isSignedIn = useIsSignedIn();

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
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
                <Stack.Screen
                  name="selectPlayers"
                  component={SelectPlayers}
                  options={({route}: {route: any}) => ({
                    title: route.params.title,
                  })}
                />
              </>
            ) : (
              <>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen
                  options={{
                    headerShown: true,
                    headerBackVisible: true,
                    headerTitle: '',
                  }}
                  name="CreateAccount"
                  component={CreateAccount}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
