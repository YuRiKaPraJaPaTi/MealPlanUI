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
import { ThemeProvider } from '../MealPlanUI/src/context/ThemeContext';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      {/* <MealUI /> */}

      <ThemeProvider>
        <FlightTicket />
      </ThemeProvider>
      
      
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
