import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

export const AddTask = () => {
  return (
    <View style={styles.addTask}>
      <TextInput
        style={styles.addTaskInput}
        placeholder="Add a task"
        placeholderTextColor="#B2B2B2"
      />
      <TouchableOpacity style={styles.addTaskButton} activeOpacity={0.5}>
        <Text style={styles.addTaskText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addTask: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 56,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e6e6f0',
    marginTop: -32,
  },
  addTaskInput: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 16,
    fontSize: 16,
  },
  addTaskButton: {
    width: 56,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftWidth: 1,
    borderLeftColor: '#e6e6f0',
  },
  addTaskText: {
    fontSize: 32,
    color: '#8257e5',
  },
});
