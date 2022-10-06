import React from 'react';

import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import { Counter } from '../components/Counter';

import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerImg}>
        <Image source={require('../../assets/logo.png')} style={styles.img} />
      </View>
      <View style={styles.containerList}>
        <View style={styles.viewInput}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma tarefa"
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.button}>
            <Image
              source={require('../../assets/adicionar.png')}
              style={styles.iconAdd}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.viewCountTask}>
          <View style={styles.viewCreated}>
            <Text style={styles.created}>Criadas</Text>
            <Counter />
          </View>
          <View style={styles.viewDone}>
            <Text style={styles.done}>Concluídas</Text>
            <Counter />
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
    </View>
  );
}
