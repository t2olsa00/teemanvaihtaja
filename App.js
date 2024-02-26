import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import MainAppbar from './components/MainAppbar';
import Home from './screens/Home';
import Settings from './screens/Settings';
import ThemeProvider from './context/ThemeProvider';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <ThemeProvider>
      <NavigationContainer>
        <StatusBar backgroundColor='#666' barStyle='light-content'/>
        <Stack.Navigator 
          initialRouteName='Home'
          screenOptions={{ header: (props) =>
            <MainAppbar {...props} backgroundColor='#666' icon='cog' color='#fff'/>
          }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
      </NavigationContainer>
      </ThemeProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
