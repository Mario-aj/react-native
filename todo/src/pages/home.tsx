import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.logo}>to.do</Text>
          <View style={styles.teskCounter}>
            <Text style={styles.headerText}>Você tem</Text>
            <Text style={[styles.headerText, styles.headerTextBold]}>
              {' '}
              3 tarefas
            </Text>
          </View>
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
    height: 150,
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
});
