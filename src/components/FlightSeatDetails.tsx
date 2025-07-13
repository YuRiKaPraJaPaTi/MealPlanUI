import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



type props = {
      title: string;
      value: string;
      
}

const FlightSeatDetails = ({title, value}:props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

export default FlightSeatDetails

const styles = StyleSheet.create({
      
      title: {
            fontSize: 16,
            color: 'gray',
      },
      value: {
            fontSize: 24,
            color: 'black'
      }
})