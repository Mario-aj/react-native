import React from 'react';
import { View, StyleSheet } from 'react-native';
import { AddTask } from '../components/addTak';
import { Header } from '../components/header';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.body}>
        <AddTask />
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
    paddingHorizontal: 24,
  },
});
