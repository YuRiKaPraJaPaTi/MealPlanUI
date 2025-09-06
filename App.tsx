/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import MealUI from './src/pages/MealUI';
import FlightTicket from './src/pages/FlightTicket';
import IcecreamUI from './src/pages/IcecreamUI';
// import { ThemeProvider } from '../MealPlanUI/src/context/ThemeContext';
import { useState } from 'react';
import { darkTheme, lightTheme } from './src/context/theme';

function App() {
  const [isDarkTheme, setIsDarkTheme ] = useState(false)
  const theme = isDarkTheme ? darkTheme : lightTheme

  return (
    <View style={styles.container}>
      

      {/* <MealUI /> */}

      {/* <ThemeProvider>
        <FlightTicket />
      </ThemeProvider> */}
      
      {/* <FlightTicket theme={theme} onToggleTheme={()=>setIsDarkTheme(!isDarkTheme)} /> */}

      <IcecreamUI />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default App;
