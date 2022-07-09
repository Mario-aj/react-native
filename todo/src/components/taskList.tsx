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
};

export const TaskList = ({ data, onRemoveTask }: Props) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => (
        <View style={[styles.cardTaks, index % 2 === 0 && styles.evenCard]}>
          <Text style={styles.carItem}>{item.title}</Text>
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
  carItem: {
    fontSize: 14,
    color: '#666',
  },
  trash: {
    width: 24,
    height: 24,
  },
});
