import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

//@ts-ignore
import trash from '../assets/trash.png';
import { TasksProps } from '../types';

type Props = {
  data: Array<TasksProps>;
  onRemoveTask: (id: string) => void;
  onCompleteTask: (id: string) => void;
};

export const TaskList = ({ data, onRemoveTask, onCompleteTask }: Props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => (
        <View style={[styles.cardTaks, index % 2 === 0 && styles.evenCard]}>
          <TouchableOpacity
            style={styles.item}
            activeOpacity={0.5}
            onPress={() => onCompleteTask(item.id)}>
            <Text
              style={[styles.title, item.completed && styles.titleCompleted]}>
              {item.title}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onRemoveTask(item.id)}>
            <Image source={trash} style={styles.trash} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  cardTaks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  evenCard: {
    backgroundColor: '#eee',
  },
  item: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    color: '#666',
  },
  titleCompleted: {
    textDecorationLine: 'line-through',
    textDecorationColor: '##1DB863',
    color: '#1DB863',
  },
  trash: {
    width: 24,
    height: 24,
  },
});
