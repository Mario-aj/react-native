import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { AddTask } from '../components/addTak';
import { Header } from '../components/header';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <AddTask />
        <FlatList
          data={[
            'Ler meu livro favorito',
            'Arrumar o quarto',
            'Lavar meu possante',
            'Estudar react',
            'Ler meu livro favorito',
            'Arrumar o quarto',
            'Lavar meu possante',
            'Estudar react',
            'Ler meu livro favorito',
            'Arrumar o quarto',
            'Lavar meu possante',
            'Estudar react',
            'Ler meu livro favorito',
            'Arrumar o quarto',
            'Lavar meu possante',
            'Estudar react',
            'Ler meu livro favorito',
            'Arrumar o quarto',
            'Lavar meu possante',
            'Estudar react',
          ]}
          keyExtractor={(item, idx) => item + idx}
          renderItem={({ item, index }) => (
            <View style={[styles.cardTaks, index % 2 === 0 && styles.evenCard]}>
              <Text style={styles.carItem}>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
  cardTaks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  evenCard: {
    backgroundColor: '#ddd',
  },
  carItem: {
    fontSize: 14,
    color: '#666',
  },
});
