import React from 'react';
import './App.css';
import AssignReferrals from './AssignReferrals/AssignReferrals';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>Assign Referrals</header>

      <AssignReferrals />
    </div>
  );
};

export default App;
