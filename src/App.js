import { useState } from 'react';

import Header from './components/Header';
import TasksList from './components/TasksList';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      remainder: true,
    },
    {
      id: 2,
      text: 'Meeting at school',
      day: 'Feb 6th at 1:30pm',
      remainder: true,
    },
    {
      id: 3,
      text: 'Food Shopping',
      day: 'Feb 5th at 2:30pm',
      remainder: false,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id);
  };

  return (
    <div className='container'>
      <Header />
      <TasksList tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
