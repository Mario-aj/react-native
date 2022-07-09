import React from 'react';
import { View, StyleSheet } from 'react-native';

import { TaskList } from '../components/taskList';
import { AddTask } from '../components/addTask';
import { Header } from '../components/header';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <AddTask />
        <TaskList />
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
});
