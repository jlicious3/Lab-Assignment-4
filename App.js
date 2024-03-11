import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  // Define state variable to store list of tasks
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog',
  ]);

  // Function to add a new task
  const addTask = (taskText) => {
    setTasks([...tasks, taskText]); // Add the new task to the existing list
  };

  return (
    <ScrollView>
      {/* Pass tasks array to ToDoList component */}
      <ToDoList tasks={tasks} />
      {/* Pass addTask function and tasks array to ToDoForm component */}
      <ToDoForm addTask={addTask} tasks={tasks} />
    </ScrollView>
  );
}

export default App;
