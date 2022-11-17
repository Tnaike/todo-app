import React from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        ToDo<span className='altText'>Plus</span>
        <sup>&trade;</sup>
      </header>
      <main>
        <InputField/>
      </main>
    </div>
  );
}

export default App;
