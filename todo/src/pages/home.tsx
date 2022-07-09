import React from 'react';
import { View, StyleSheet } from 'react-native';

import { TaskList } from '../components/taskList';
import { AddTask } from '../components/addTask';
import { Header } from '../components/header';

export const Home = () => {
  const [newTask, setNewTask] = React.useState('');
  const [tasks, setTasks] = React.useState<string[]>([]);

  const handleAddNewTask = () => {
    if (!newTask.trim()) {
      return;
    }

    setTasks(currentTasks => [...currentTasks, newTask]);
    setNewTask('');
  };

  return (
    <View style={styles.container}>
      <Header count={tasks.length} />
      <View style={styles.body}>
        <AddTask
          value={newTask}
          onChange={setNewTask}
          onAddTask={handleAddNewTask}
        />
        <TaskList data={tasks} />
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
