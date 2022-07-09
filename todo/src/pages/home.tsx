import React, { useId } from 'react';
import { View, StyleSheet } from 'react-native';

import { TaskList } from '../components/taskList';
import { AddTask } from '../components/addTask';
import { Header } from '../components/header';

import type { TasksProps } from '../types';

export const Home = () => {
  const id = useId();
  const [tasks, setTasks] = React.useState<TasksProps[]>([]);

  const handleAddNewTask = (task: string) => {
    if (!task.trim()) {
      return;
    }
    const newTask = {
      id: id + String(new Date().getTime()),
      title: task,
      completed: false,
    };

    setTasks(currentTasks => [...currentTasks, newTask]);
  };

  const handleRemoveTask = (taskId: string) => {
    setTasks(currentTasks => currentTasks.filter(task => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <Header count={tasks.length} />
      <View style={styles.body}>
        <AddTask onAddTask={handleAddNewTask} />
        <TaskList data={tasks} onRemoveTask={handleRemoveTask} />
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
