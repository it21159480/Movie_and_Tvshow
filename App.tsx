import React from 'react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import AppNavigator from './src/AppNavigator';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

 

  return (
    <PaperProvider >
      <SafeAreaView style={{flex:1}} >
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
         
        />
        <AppNavigator />
      </SafeAreaView>
    </PaperProvider>
  );
}

export default App;
