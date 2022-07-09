import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

//@ts-ignore
import logo from '../assets/logo.png';

export const Header = ({ count }: { count: number }) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Image source={logo} />
        <View style={styles.teskCounter}>
          <Text style={styles.headerText}>You have</Text>
          <Text style={[styles.headerText, styles.headerTextBold]}>
            {' '}
            {count > 1 ? `${count} tasks` : `${count} task`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
