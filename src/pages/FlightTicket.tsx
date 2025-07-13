import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Dimensions,
} from 'react-native';
import FlightClass from '../components/FlightClass';
import FlightInfo from '../components/AirportDetails';
import { FlightPoint } from '../components/AirportDetails';
import FlightSeatDetails from '../components/FlightSeatDetails';


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

                  <View style={{marginVertical: 5}}>
                        <Text style={{fontSize:32, color:'white'}}>Julien Simpson</Text>
                  </View>

                  <FlightClass
                        classType={'Business Class'}
                        boardingTime={'7:55 AM'}
                  />

            </ImageBackground>
            

            {/* Middle Section */}
            <View style={[styles.middleSection, { backgroundColor: '#f1f1f1' }]}>
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
                                    <Text>kjdjb</Text>
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
            left: '50%',
            transform: [{ translateX: -50 }],
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
