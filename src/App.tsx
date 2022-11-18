import React, { useState } from 'react';
import './App.css';
import BoardBackground from './components/BoardBackground';
import InputField from './components/InputField';
import { Todo } from './model';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [listTodo, setListTodo] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setListTodo([...listTodo, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  };

  // console.log(todo);
  console.log('***LIST TODO=>**', listTodo);

  return (
    <div className='App'>
      <header className='App-header'>
        ToDo<span className='altText'>Plus</span>
        <sup>&trade;</sup>
      </header>
      <BoardBackground>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      </BoardBackground>
    </div>
  );
};

export default App;
