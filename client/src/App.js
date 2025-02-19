import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import WorkoutForm from './components/WorkoutForm';
import WorkoutList from './components/WorkoutList';

const App = () => {
  const [user, setUser] = useState(null); // Store user info after login

  return (
    <div>
      {!user ? (
        <>
          <Login setUser={setUser} />
          <Register />
        </>
      ) : (
        <>
          <WorkoutForm />
          <WorkoutList userId={user._id} />
        </>
      )}
    </div>
  );
};

export default App;
