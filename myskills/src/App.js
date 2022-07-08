import React from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const [newSkill, setNewSkill] = React.useState('');
  const [skills, setSkills] = React.useState([]);

  const handleAddSkill = () => {
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

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddSkill}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>

      <Text style={[styles.title, { marginVertical: 40 }]}>My Skills</Text>

      {skills.map(skill => (
        <TouchableOpacity key={skill} style={styles.buttonSkill}>
          <Text style={styles.textSkill}>{skill}</Text>
        </TouchableOpacity>
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
  button: {
    backgroundColor: '#a370f7',
    borderRadius: 4,
    alignItems: 'center',
    padding: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
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
