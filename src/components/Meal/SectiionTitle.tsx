import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
      title: string;
      subtitle: string;
}

const SectionTitle = ({ title, subtitle }: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 20,
    color: 'gray',
  },
});

export default SectionTitle;
