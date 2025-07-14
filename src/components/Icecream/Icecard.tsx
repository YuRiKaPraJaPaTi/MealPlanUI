import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import ImageIcon from '../ImageIcon'



type props = {
      source: any;
      label: string;
}

const Icecard = ({source, label}:props) => {
  return (
    
            
            <View style={styles.main}>
                  <View>
                        <TouchableOpacity style={styles.button}>
                              <ImageIcon source={source}
                              size={32}/>
                        </TouchableOpacity>
                  </View>
              <View style={styles.titleContainer}>
                  <Text style={styles.title}>{label}</Text>
              </View>
              
            </View>
          
  )
}

export default Icecard

const styles = StyleSheet.create({
      main: {
            flexDirection: 'column',
            paddingVertical: 10,
            paddingHorizontal: 10,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'blue',
      },
      button: {
            backgroundColor: '#A2AADB',
            borderRadius: 10,
            fontSize: 18,
            justifyContent: 'center',
            alignItems: 'center',
            width: 60,
            height: 60,
      },

      titleContainer: {
            
            marginTop: 4,
      },
      title: {
            fontSize: 16,
            
      }
})
