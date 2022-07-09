import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

export const TaskList = ({ data }: { data: string[] }) => {
  return (
    <FlatList
      data={data}
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
    backgroundColor: '#eee',
  },
  carItem: {
    fontSize: 14,
    color: '#666',
  },
});
