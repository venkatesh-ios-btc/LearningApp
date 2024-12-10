import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TaskDetailsScreen = ({ route }) => {
  const { task } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Details</Text>
      <Text>ID: {task.id}</Text>
      <Text>Title: {task.title}</Text>
      <Text>Status: {task.completed ? 'Completed' : 'Pending'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default TaskDetailsScreen;
