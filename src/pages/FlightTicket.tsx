import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import FlightClass from '../components/Flight/FlightClass';
import FlightInfo from '../components/Flight/AirportDetails';
import { FlightPoint } from '../components/Flight/AirportDetails';
import FlightSeatDetails from '../components/Flight/FlightSeatDetails';
import { useTheme } from '../context/ThemeContext';


const { height } = Dimensions.get('window');

const flight: { departure: FlightPoint; arrival: FlightPoint } = {
    departure: {
      type: 'departure',
      time: '10:00 AM',
      location: 'DXB',
      airportCode: 'Dubai International Airport',
    },
    arrival: {
      type: 'arrival',
      time: '12:30 PM',
      location: 'AMS',
      airportCode: 'Amsterdam Airpot Schiphol',
      
      
    },
}

export default function FlightTicket() {
      const { theme, toggleTheme } = useTheme();


  return (
      <View style={styles.container}>
            {/* Top Section */}
            <ImageBackground
            source={theme.backgroundImage}
            style={styles.topSection}
                  
            >
                  <View style={styles.topContent}>
                        <Text style={{fontWeight: 'bold',fontSize:24, color:'white'}}>AIRFRANCE</Text>

                        <View style={styles.topRightContent}>
                              <Text style={{fontSize:32, color:'white'}}>Fri,27 Feb,2025</Text>
                              <Text style={{fontSize:16, textAlign:'right',color:'white'}}>DAYFLIGHT</Text>
                        </View>
                  </View>

                  <View style={{marginVertical: 5}}>
                        <Text style={{fontSize:32, color:'white'}}>Julien Simpson</Text>
                  </View>

                  <FlightClass
                        classType={'Business Class'}
                        boardingTime={'7:55 AM'}
                  />
                  <TouchableOpacity onPress={toggleTheme} style={styles.toggleBtn}>
                        <Text style={{ color: theme.textColor }}>Toggle Theme</Text>
                  </TouchableOpacity>

            </ImageBackground>
            

            {/* Middle Section */}
            <View style={[styles.middleSection, { backgroundColor: theme.backgroundColor }]}>
                  <View>
                        <FlightInfo flight={flight} />
                  </View>

                  <View style={styles.flightSeatContainer}>
                              <View>
                                    <FlightSeatDetails title='FLIGHT' value='TLC758' />
                              </View>
                              <View>
                                    <FlightSeatDetails title='SEAT' value='158' />
                                    
                              </View>
                              <View>
                                    <FlightSeatDetails title='TERMINAL' value='02' />
                              </View>
                        </View>

                        <View style={styles.flightSpeed}>
                              <View style={styles.flightSpeedLeft}>
                                    <Image
                                          source={require('../../assets/airplane2Image.png')} 
                                          style={styles.image}
                                          resizeMode="contain"
                                    />
                              </View>

                              <View style={styles.flightSpeedRight}>
                                    <Text style={{fontSize:24,color:theme.textColor}}>A350-1000</Text>
                              </View>
                        </View>
            
                  </View>

                  <View style={styles.qrImageContainer}>
                        <Image
                              source={require('../../assets/qrCode.png')}
                              style={styles.qrImage}
                        />
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
            paddingVertical: 20,
            paddingHorizontal: 30,
            position: 'relative',
      },
      topContent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            // alignItems: 'center',
      },
      topRightContent: {
            flexDirection: 'column',

      },
      toggleBtn: {
            padding: 10,
            alignSelf: 'flex-end',
            // backgroundColor: '#3e242455',
            borderRadius: 8,
            position: 'absolute',
            right: 20,           // distance from right edge
            top: '50%',
             elevation: 4,
      },
      middleSection: {
            height: height * 0.7, 
            backgroundColor: '#fff',
            borderTopRightRadius: 80,
            borderBottomLeftRadius: 80,
            marginTop: -80,
            marginBottom: -60,
            zIndex: 1,
            paddingVertical: 20,
            paddingHorizontal: 30,
      },
      flightSeatContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 30,
      },
      flightSpeed: {
            flexDirection: 'row',
            height: 150,
            marginTop: 10,
            // backgroundColor: 'red',
      },
      flightSpeedLeft: {
            width: '65%',
            // backgroundColor:'purple',
      },
      flightSpeedRight: {
            width: '30%',
            justifyContent: 'center',
            // backgroundColor: 'blue',
      },
      image: {
            width: '100%',
            height: '100%',
    
      },
      qrImageContainer: {
            position: 'absolute',
            bottom: height * 0.03, 
            // left: '50%',
            // transform: [{ translateX: - 75 }],
            alignSelf: 'center',
            width: 150,
            height: 150,
            zIndex: 2,
            backgroundColor:'white',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
      },
      qrImage: {
            width: 150,
            height: 150,

      },

      
      bottomSection: {
            flex: 1,
            backgroundColor: 'white'
      },

});
