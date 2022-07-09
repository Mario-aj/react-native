import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.logo}>to.do</Text>
          <View style={styles.teskCounter}>
            <Text style={styles.headerText}>You have</Text>
            <Text style={[styles.headerText, styles.headerTextBold]}>
              {' '}
              3 tasks
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 140,
    width: '100%',
    backgroundColor: '#8257E5',
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  headerContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 32,
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
  },
  teskCounter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
  },
  headerTextBold: {
    fontWeight: 'bold',
  },
  body: {
    flex: 1,
    paddingHorizontal: 24,
  },
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
