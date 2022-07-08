import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import type { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps & {
  skill: string;
};

export function CardSkill({ skill, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.buttonSkill} {...rest}>
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
