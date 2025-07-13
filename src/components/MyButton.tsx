import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ImageIcon from './ImageIcon';
// F0E4D3
// FCC6FF
// D1E9F6
// FFDCDC
interface ButtonProps {
      label: string;
      backgroundColor: string;
      source?: any;

}

const MyButton = ({label, backgroundColor, source}:ButtonProps) => {
  return (
    <TouchableOpacity style={[styles.button,{backgroundColor}]}>
      <ImageIcon 
            source={source}
            size={20}
      />
      <Text style={{fontSize: 20}}>{label}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
      button: {
            height: 60,
            width: 170,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 10,
            borderRadius: 20,
      }
})