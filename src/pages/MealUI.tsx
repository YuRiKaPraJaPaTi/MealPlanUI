import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MyButton from '../components/MyButton'
import { Button } from 'react-native'
import ImageIcon from '../components/ImageIcon'
import MyText from '../components/MyText'
import ScheduleItem from '../components/ScheduleItem'

const MealUI = () => {
  return (
    <View style={styles.app}>
            <View style={styles.top}>
                  <ImageIcon 
                        source={require('../../assets/leftArrowIcon.png')}
                        size={25}
                        style={styles.backArrow}
                  />

                  <Text style={{fontSize: 20, textAlign:'center', flex:1}}>Meal Plan</Text>

                  <TouchableOpacity style={styles.saveButton}>
                        <Text style={{fontSize: 20, color: 'white'}}>Save</Text>
                  </TouchableOpacity>
            </View>
            
            <View style={{marginVertical:20}}>
                  <Text style={{fontSize: 25, fontWeight: 900}}>DAILY MEAL PLAN</Text>
                  <Text style={{fontSize: 20}}>Fix your healthy body with us</Text>
            </View>

            <View style={styles.buttonContainer}>
                  <View style={styles.row}>
                  <MyButton 
                              label='Log a Food'
                              backgroundColor='#F0E4D3'
                              source={require('../../assets/searchIcon.png')}
                        />
                  <MyButton 
                              label='Voice Log'
                              backgroundColor='#FCC6FF'
                              source={require('../../assets/voiceIcon.png')}
                        />
                  </View>
                  <View style={styles.row}>
                  <MyButton 
                              label='Scan a Barcode'
                              backgroundColor='#D1E9F6'
                              source={require('../../assets/scanBarcodeIcon.png')}
                        />
                  <MyButton 
                              label='Scan Meal'
                              backgroundColor='#FFDCDC'
                              source={require('../../assets/scanMealIcon.png')}
                        />
                  </View>
            </View>

            <View style={styles.infoBox}>
                  <View style={{paddingHorizontal:10, paddingTop:15}}>
                        <ImageIcon 
                              source={require('../../assets/fireIcon.png')}
                              size={30}
                        />
                  </View>

                  <View style={styles.rowContainer}>
                        <View style={styles.column}>
                              <MyText content='Calories Goal' fontSize={18}/>
                              <Text style={styles.calorieValue}><Text style={{fontWeight:'bold'}}>1,908 </Text>Kcal</Text>
                        </View>
                        <View style={styles.column}>
                              <MyText content='Calories Ate' fontSize={18}/>
                              <Text style={styles.calorieValue}><Text style={{fontWeight:'bold'}}>1,908 </Text>Kcal</Text>
                              
                        </View>
                        <View style={styles.column}>
                              <MyText content='Calories Left' fontSize={18}/>
                              <Text style={styles.calorieValue}><Text style={{fontWeight:'bold'}}>1,908 </Text>Kcal</Text>
                              
                        </View>
                  </View>
                  
            </View>

            <View>
                  <Text style={{fontSize: 25, fontWeight: 900}}>Track your food</Text>
                  <Text style={{fontSize: 16, color:'gray'}}>Pro tip: It's easy to be consistent if you log as you go. We like the logging while our food is cooking for between bites.</Text>
            </View>

            <View style={styles.scheduleContainer}>
                  <View style={{flexDirection:'row', paddingTop: 5 }}> 
                        <Text style={{fontSize:20, fontWeight: 900, flex:1}}> YOUR SCHEDULES</Text>
                        <ImageIcon
                              source={require('../../assets/plusIcon.png')}
                              size={20}
                              style={styles.plusIcon}
                        />
                  </View>
                  <View>
                        <Text>In Progress</Text>
                  </View>

                  <View style={styles.scheduleCollection}>
                        <ScheduleItem 
                              title='Meal 1'
                              desc='Avacado Toast with egg'
                        />
                        <ScheduleItem 
                              title='Meal 1'
                              desc='Avacado Toast with egg'
                        />
                        {/* <ScheduleItem 
                              title='Meal 1'
                              desc='Avacado Toast with egg'
                        /> */}
                  </View>

            </View>

            
    </View>
  )
}

export default MealUI

const styles = StyleSheet.create({
      app: {
            flex: 1,
            paddingTop: 20,
            paddingHorizontal: 20,
            backgroundColor: 'white',
      },
      top: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
      },

      backArrow: {
            // margin: 20,
            backgroundColor: '#f1f1f1',
            padding: 10,
            borderRadius: 20,
      },

      saveButton: {
            height:45,
            width: 90,
            backgroundColor: 'blue',
            borderRadius: 20,
            justifyContent:'center',
            alignItems: 'center',
      },
      
      buttonContainer: {
            justifyContent: 'center',
            alignItems: 'center',
      },
      row: {
            flexDirection: 'row',
            justifyContent: 'space-around',
            gap: 7,
            marginVertical: 7,
      },
      infoBox: {
            width: '100%',
            backgroundColor: '#f1f1f1',
            borderRadius: 20,
            paddingHorizontal: 10,
            marginVertical: 20,
            shadowColor: 'red',
            shadowOffset: { width: 8, height: 8 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 5,
      },
      rowContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            paddingHorizontal: 10,
            paddingVertical: 20,
      },
      column: {
            flex: 1,
            justifyContent: 'center',     
            alignItems: 'center',        
      },
      calorieValue: {
            fontSize: 22,
            color: 'gray',
      },
      scheduleContainer: {
            // width: '100%',
            flex:1,
            backgroundColor: '#f1f1f1',
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            paddingHorizontal: 15,
            paddingTop: 20,
            marginVertical: 20,
            shadowColor: 'red',
            shadowOffset: { width: 8, height: 8 },
            shadowOpacity: 0.3,
            shadowRadius: 6,
            elevation: 5,
      },
      plusIcon: {
            height: 30,
            width: 30,
            borderWidth: 2,
            borderColor: 'blue',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 7,
      },
      scheduleCollection: {
            marginVertical: 10,
            gap: 10,
      }
})