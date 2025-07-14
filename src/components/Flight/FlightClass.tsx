// SeatInfo.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SeatInfoProps {
  classType: string;
  boardingTime: string;
}

const FlightClass: React.FC<SeatInfoProps> = ({ classType, boardingTime }) => {
      const firstLetter = classType.charAt(0).toUpperCase();
  return (
    <View style={styles.container}>
      
      <View style={styles.square}>
            <Text style={styles.classTitle}>{firstLetter}</Text>
      </View>
      <View style={styles.info}>
            <Text style={[styles.info, {color: 'white'}]}> {classType}</Text>
            <Text style={[styles.info,{color:'#007aff'}]}>BOARDING: {boardingTime}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
      container: {
            flexDirection: 'row', 
            gap:7,
            paddingTop: 10,
      },
      square: {
            width: 40,
            height: 40,
            backgroundColor: '#007aff',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 15,
            padding: 5,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.5,
            elevation: 5, 
      },
      classTitle: {
            fontSize: 24,
            fontWeight: 'bold',
            color: 'white',
      },
      info: {
            flexDirection: 'column',
            fontSize: 16,
            color: 'white',
      },
});

export default FlightClass;
