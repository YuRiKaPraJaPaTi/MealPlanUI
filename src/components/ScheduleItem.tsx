import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CheckBox from '@react-native-community/checkbox'

type props = {
      title: string,
      desc: string;
}

const ScheduleItem = ({title, desc}:props) => {
  return (
    
      <View style={styles.scheduleItem}>
            <CheckBox />
            <Text>{title}</Text>
            <Text>{desc}</Text>
      </View>
    
  )
}

export default ScheduleItem

const styles = StyleSheet.create({
      outer: {
            
      },
      scheduleItem: {
            flexDirection: 'row',
            backgroundColor: 'rgba(228, 200, 200, 0.4)',
            padding: 10,
            borderRadius: 10,
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: 10,
      },
})