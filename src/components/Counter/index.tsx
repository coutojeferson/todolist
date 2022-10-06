import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './styles';

export function Counter() {
  return (
    <View style={styles.container}>
      <Text style={styles.counter}>0</Text>
    </View>
  );
}
