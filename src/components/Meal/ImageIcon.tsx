import { StyleSheet, Text,Image, TouchableOpacity, View, ImageStyle, StyleProp} from 'react-native'
import React from 'react'

type props = {
      source: any;
      size?:number;
      style?: StyleProp<ImageStyle>;

}

const ImageIcon = ({source, size, style} : props) => {
  return (
    <TouchableOpacity style={style}>
            <Image 
                  source={source}
                  style={{width: size, height: size}}
                  resizeMode='contain'
            />

      
    </TouchableOpacity>
  )
}

export default ImageIcon

const styles = StyleSheet.create({})