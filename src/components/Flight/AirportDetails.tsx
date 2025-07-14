// components/FlightTicket.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InfoCard from './InfoCard';

export interface FlightPoint {
  type: 'departure' | 'arrival';
  airportCode: string;
  location: string;
  time: string;
}

interface FlightInfoProps {
  flight: {
    departure: FlightPoint;
    arrival: FlightPoint;
  };
  theme: {
    textColor: string;
    backgroundColor: string;
  }
}

const FlightInfo = ({ flight, theme}: FlightInfoProps) => {
  return (
   <View style={styles.ticket}>
      
      <View>
        <InfoCard info={flight.departure} theme={theme}/>
      </View>

      
      <View style={{flexDirection:'column'}}>
            <Text style={styles.separator}>.✈️.</Text>
            <Text style={styles.distance}>6hrs</Text>
      </View>
      
      <View >
        <InfoCard info={flight.arrival} theme={theme}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
      ticket: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 30,
            // backgroundColor:'blue',
      },
            cardContainer: {
            flex: 1,  
            alignItems: 'center',
      },
            separator: {
            fontSize: 30,
            color: '#888',
      },
      distance: {
            textAlign: 'center',
            backgroundColor: '#f1f1f1',
            borderRadius: 16,
            elevation: 5,
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 6,
            paddingVertical: 4,
      },
});

export default FlightInfo;
