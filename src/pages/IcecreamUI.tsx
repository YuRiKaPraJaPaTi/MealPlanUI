import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
import Icecard from '../components/Icecream/Icecard';
import Card from '../components/Icecream/Card';

const { height, width } = Dimensions.get('window');

export default function IcecreamUI() {
  return (
    <View style={styles.container}>
      
      <View style={styles.topSection}>
        <ImageBackground
          source={require('../../assets/icecream/icecream.png')}
          style={styles.image}
          resizeMode='contain'
        >
          <Text style={styles.overlayText}>WELCOME</Text>
        </ImageBackground>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>

      </View>

    

    
      <View style={styles.bottomSection}>    
        
          <Text style={styles.popText}>Pick Yours</Text>
        
 
         
        <ScrollView horizontal showsHorizontalScrollIndicator={false} >
        
          <View style={{flexDirection: 'row', height: 100}}>
            <Icecard source={require('../../assets/icecream/cup.png')} label='Cup'/>
            <Icecard source={require('../../assets/icecream/cone.png')} label='Cone'/>
            <Icecard source={require('../../assets/icecream/rolls.png')} label='Roll'/>
            <Icecard source={require('../../assets/icecream/bar.png')} label='Bar'/>
            <Icecard source={require('../../assets/icecream/sundae.png')} label='Sundae'/>
            <Icecard source={require('../../assets/icecream/popsicles.png')} label='Popsicles'/>
            <Icecard source={require('../../assets/icecream/icecreamShake.png')} label='Shakes'/>
        
          </View>
        </ScrollView>

        <View>
          <Card />
        </View>

      
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topSection: {
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  image: {
    height: height * 0.3,
    width: width * 0.8,
    backgroundColor: '#A2AADB',
    justifyContent: 'center',
  },
  overlayText: {
  fontSize: 64,
  fontWeight: 'bold',
  color: 'white',
  textShadowColor: 'rgba(0, 0, 0, 0.5)',
  textShadowOffset: { width: 2, height: 2 },
  textShadowRadius: 5,
  textAlign: 'center',

},

  button: {
    margin: 10,
    backgroundColor: '#A2AADB',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
    
  },
  buttonText: {
    color: '#000',
  },

  bottomSection: {
    // flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: -40,
    paddingTop: 20,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,

  },


popText: {
  fontSize: 32,
  fontWeight: 'bold',
  color: 'purple',
  textShadowColor: 'rgba(0, 0, 0, 0.35)',
  textShadowOffset: { width: 2, height: -2 },
  textShadowRadius: 4,
  
},


});
