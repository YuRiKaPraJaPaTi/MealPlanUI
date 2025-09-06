import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ImageIcon from './ImageIcon';

type Props = {
      title: string;
      onBack?: ()=>void;
      onSave?: ()=>void;
}

const Header = ({ title, onBack, onSave }:Props) => (
  <View style={styles.container}>
    <ImageIcon
      source={require('../../../assets/leftArrowIcon.png')}
      size={20}
      style={styles.backArrow}
    />
    <Text style={styles.title}>{title}</Text>
    <TouchableOpacity style={styles.saveButton} onPress={onSave}>
      <Text style={styles.saveText}>Save</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrow: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    flex: 1,
    textAlign: 'center',
  },
  saveButton: {
    height: 40,
    width: 90,
    backgroundColor: 'blue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  saveText: {
    fontSize: 20,
    color: 'white',
  },
});

export default Header;
