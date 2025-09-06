import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Card = () => {
  return (
    <View style={styles.main}>
            <View style={styles.container}>
                  <View style={styles.circle}>

                  </View>
            </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
      main: {
            flexDirection: 'column',
            paddingVertical: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
      },
      container: {
            backgroundColor: '#A2AADB',
            borderRadius: 30,
            fontSize: 18,
            justifyContent: 'center',
            alignItems: 'center',
            width: 150,
            height: 150,
            position: 'relative',
      },
      circle: {
            backgroundColor: 'yellow',
            borderRadius: 45,
            fontSize: 18,
            justifyContent: 'center',
            alignItems: 'center',
            width: 90,
            height: 90,
            position: 'absolute',
            top: 0,
            right: 0,
      }
})