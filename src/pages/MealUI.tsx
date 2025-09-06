import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import MyButton from '../components/Meal/MyButton'
import ImageIcon from '../components/Meal/ImageIcon'
import CalorieCard from '../components/Meal/CalorieCard'
import Header from '../components/Meal/Header'
import SectionTitle from '../components/Meal/SectiionTitle'
import ScheduleList from '../components/Meal/ScheduleList'
import ButtonGrid from '../components/Meal/ButtonGrid'

const scheduleData = [
  { title: 'Meal 1', desc: 'Avocado Toast with egg' },
  { title: 'Meal 2', desc: 'Smoothie Bowl' },
  { title: 'Meal 3', desc: 'Chicken Salad' },
];

const buttonsData = [
  { label: 'Log a Food', backgroundColor: '#F0E4D3', source: require('../../assets/searchIcon.png') },
  { label: 'Voice Log', backgroundColor: '#FCC6FF', source: require('../../assets/voiceIcon.png') },
  { label: 'Scan a Barcode', backgroundColor: '#D1E9F6', source: require('../../assets/scanBarcodeIcon.png')},
  { label: 'Scan Meal', backgroundColor: '#FFDCDC', source: require('../../assets/scanMealIcon.png')},
  ];




const MealUI = () => {
      
  return (
    <ScrollView style={styles.app}>

            <Header title='Meal Plan'/>
            
            <SectionTitle title='DAILY MEAL PLAN' subtitle='Fix your healthy body with us'/>

            <ButtonGrid buttons={buttonsData} />

            <View style={styles.infoBox}>
                  <View style={{paddingHorizontal:10, paddingTop:15}}>
                        <ImageIcon 
                              source={require('../../assets/fireIcon.png')}
                              size={30}
                        />
                  </View>

                  <View style={styles.rowContainer}>
                        <CalorieCard title="Calories Goal" value="1,908" />
                        <CalorieCard title="Calories Ate" value="1,908" />
                        <CalorieCard title="Calories Left" value="1,908" />
                  </View>
                  
            </View>

            <SectionTitle title='Track your food' subtitle='Pro tip: Its easy to be consistent if you log as you go. We like the logging while our food is cooking for between bites.'
            />

            <ScheduleList schedules={scheduleData} />


            
    </ScrollView>
  )
}

export default MealUI

const styles = StyleSheet.create({
      app: {
            // flex: 1,
            paddingTop: 20,
            paddingHorizontal: 20,
            backgroundColor: 'white',
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
      
})