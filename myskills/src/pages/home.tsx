import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
  Keyboard,
} from 'react-native';

import { Button } from '../components/Button';
import { CardSkill } from '../components/CardSkill';

interface MySkills {
  id: string;
  name: string;
}

export function Home() {
  const [newSkill, setNewSkill] = React.useState('');
  const [skills, setSkills] = React.useState<MySkills[]>([]);

  const handleAddSkill = () => {
    if (newSkill.trim() === '') {
      return;
    }

    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };

    setSkills(oldSkills => [...oldSkills, data]);
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
      <Button
        onPress={() => {
          handleAddSkill();
          Keyboard.dismiss();
        }}
        title="Add"
      />
      <Text style={[styles.title, styles.mySkills]}>My Skills</Text>
      <FlatList
        data={skills}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CardSkill skill={item.name} />}
      />
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
