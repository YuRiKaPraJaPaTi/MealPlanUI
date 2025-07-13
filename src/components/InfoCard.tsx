// components/InfoCard.tsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlightPoint } from './AirportDetails';
import ImageIcon from './ImageIcon';

interface InfoCardProps {
      info: FlightPoint;
}

const InfoCard = ({ info } : InfoCardProps) => {
      const { type, time, location, airportCode } = info;
      const label = type === 'departure' ? 'Departure' : 'Arrival';
      const accentColor = type === 'departure' ? '#007aff' : '#ffcc00';

  return (
      <View style={styles.card}>
            <Text style={styles.time}>{time}</Text>
            <Text style={styles.location}>{location}</Text>
            <Text style={styles.code}>{airportCode}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 4, gap:5}}>
                  {type === 'arrival' && (
                  <ImageIcon source={require('../../assets/arrivalIcon.png')} size={30}/>
                  )}
                  <Text style={[styles.label, { color: accentColor }]}>{label}</Text>
                  {type === 'departure' && (
                  <ImageIcon source={require('../../assets/departureIcon.png')} size={30}  />
                  )}
            </View>
      </View>
      );
};

const styles = StyleSheet.create({
      card: {
            width: 120,
            // backgroundColor: 'red',
            // gap: 7,
      },
      time: {
            fontSize: 24,
            color: 'black',
            marginBottom: 8,
            fontWeight: '600',
      },
      location: {
            fontSize: 32,
            fontWeight: 'bold',
            flexShrink: 1,
            flexWrap: 'wrap',
            color: '#333',
      },
      code: {
            fontSize: 16,
            color: '#555',
      },
      label: {
            fontSize: 24,
            marginVertical: 10,
      },
});

export default InfoCard;
