import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextStyle } from 'react-native';


type textProps = {
      content: string;
      fontSize?: number;
      fontWeight?: TextStyle['fontWeight'];
      
}

const MyText = ({content, fontSize, fontWeight}:textProps) => {
  return (
    <View>
      <Text style={[{fontSize, fontWeight}]}>        
            {content} 
            {/* {children} */}
      </Text>
    </View>
  )
}

export default MyText

const styles = StyleSheet.create({})