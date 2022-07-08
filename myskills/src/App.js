import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
} from 'react-native';

import { Button } from './components/Button';
import { CardSkill } from './components/CardSkill';

export default function App() {
  const [newSkill, setNewSkill] = React.useState('');
  const [skills, setSkills] = React.useState([]);

  const handleAddSkill = () => {
    if (newSkill.trim() === '') {
      return;
    }

    setSkills(oldSkills => [...oldSkills, newSkill]);
    setNewSkill('');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Mário</Text>
      <TextInput
        style={styles.input}
        placeholder="New skill"
        placeholderTextColor="#666"
        onChangeText={setNewSkill}
        value={newSkill}
      />
      <Button onPress={handleAddSkill} />
      <Text style={[styles.title, styles.mySkills]}>My Skills</Text>
      {skills.map(skill => (
        <CardSkill key={skill} skill={skill} />
      ))}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    borderRadius: 4,
    fontSize: 18,
    padding: Platform.OS === 'android' ? 10 : 15,
    marginBottom: 15,
  },
  mySkills: {
    marginVertical: 40,
  },
});
