import React, { useEffect } from 'react';
import { View, Text, FlatList, Button, ActivityIndicator, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../redux/taskSlice';
import TaskItem from '../components/TaskItem';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.taskList);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
      const data = await response.json();
      dispatch(setTasks(data));
    };
    fetchTasks();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Button title="Add Task" onPress={() => navigation.navigate('AddTask')} />
      {tasks.length === 0 ? (
        <ActivityIndicator size="large" />
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TaskItem task={item} onPress={() => navigation.navigate('TaskDetails', { task: item })} />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
