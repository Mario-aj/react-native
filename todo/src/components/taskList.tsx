import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const TaskList = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
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
