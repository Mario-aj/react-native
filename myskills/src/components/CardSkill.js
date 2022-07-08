import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export function CardSkill({ skill }) {
  return (
    <TouchableOpacity style={styles.buttonSkill}>
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 4,
  },
  textSkill: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
