import React, { useState } from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

import './App.css';

function App() {
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <GoalList />
      <NewGoal />
    </div>
  );
}

export default App;
