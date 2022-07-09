import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Home } from './pages/home';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#8257E5" />
      <Home />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
