import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const { height } = Dimensions.get('window');

export default function FlightTicket() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <ImageBackground
        source={require('../../assets/skyImage.jpg')}
        style={styles.topSection}
        
      >
        
      </ImageBackground>

      {/* Middle Section */}
      <View style={[styles.middleSection, { backgroundColor: '#f1f1f1' }]}>
        
      </View>

      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    height: height * 0.35,
    padding: 20,
  },
  
  middleSection: {
    height: height * 0.6, 
    backgroundColor: '#fff',
    borderTopRightRadius: 80,
    borderBottomLeftRadius: 80,
  },
 
  bottomSection: {
    flex: 1,
    backgroundColor: '#000'

  },
 
});
