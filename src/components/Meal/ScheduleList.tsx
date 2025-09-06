import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ImageIcon from './ImageIcon';
import ScheduleItem from './ScheduleItem';

type Schedule = {
  title: string;
  desc: string;
};

type ScheduleListProps = {
  schedules: Schedule[];
};



const ScheduleList = ({ schedules }: ScheduleListProps) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.title}>YOUR SCHEDULES</Text>
      <ImageIcon source={require('../../../assets/plusIcon.png')} size={20} style={styles.plusIcon} />
    </View>
    <Text>In Progress</Text>
    <FlatList
      data={schedules}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <ScheduleItem {...item} />}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
      contentContainerStyle={{ marginVertical: 10 }}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 15,
    paddingTop: 20,
    marginVertical: 10,
    shadowColor: 'red',
    shadowOffset: { width: 8, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  header: {
    flexDirection: 'row',
    paddingTop: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    flex: 1,
  },
  plusIcon: {
    height: 30,
    width: 30,
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ScheduleList;
