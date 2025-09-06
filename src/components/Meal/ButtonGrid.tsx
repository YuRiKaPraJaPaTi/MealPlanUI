import React from 'react';
import { FlatList } from 'react-native';
import MyButton from './MyButton';

type ButtonItem = {
  label: string;
  backgroundColor: string;
  source: any;          
  onPress?: () => void; 
};

type ButtonGridProps = {
  buttons: ButtonItem[];   
};


const ButtonGrid = ({ buttons }: ButtonGridProps) => {
  return (
    <FlatList
      data={buttons} 
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <MyButton {...item} />
      )}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: 'space-around', marginVertical: 4 }}
      // contentContainerStyle={{ backgroundColor:'red' }}
    />
  );
};

export default ButtonGrid;
