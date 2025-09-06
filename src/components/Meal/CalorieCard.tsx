import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
      title: string;
      value: string;
}

const CalorieCard = ({ title, value }:Props) => {
  return (
    <View style={styles.column}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.calorieValue}><Text style={{fontWeight:'bold'}}>{value} </Text>Kcal</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  column: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },

  calorieValue: {
    fontSize: 22,
    color: 'gray',
  },
});

export default CalorieCard;
