import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import FlightClass from '../components/FlightClass';

const { height } = Dimensions.get('window');

export default function FlightTicket() {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <ImageBackground
        source={require('../../assets/skyImages.jpg')}
        style={styles.topSection}
            
      >
            <View style={styles.topContent}>
                  <Text style={{fontWeight: 'bold',fontSize:24, color:'white'}}>AIRFRANCE</Text>

                  <View style={styles.topRightContent}>
                        <Text style={{fontSize:32, color:'white'}}>Fri,27 Feb,2025</Text>
                        <Text style={{fontSize:16, textAlign:'right',color:'white'}}>DAYFLIGHT</Text>
                  </View>
            </View>

            <Text style={{fontSize:32, color:'white'}}>Julien Simpson</Text>

            <FlightClass
          classType={'Business Class'}
          boardingTime={'7:55 AM'}
        />

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
            height: height * 0.30,
            paddingVertical: 20,
            paddingHorizontal: 30,
      },
      topContent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems: 'center',
      },
      topRightContent: {
            flexDirection: 'column',

      },
      middleSection: {
            height: height * 0.65, 
            backgroundColor: '#fff',
            borderTopRightRadius: 80,
            borderBottomLeftRadius: 80,
            marginTop: -60,
            marginBottom: -60,
            zIndex: 1,
      },
      
      bottomSection: {
            flex: 1,
            backgroundColor: '#000'

      },
 
});
