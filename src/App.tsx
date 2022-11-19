import React, { useState } from 'react';
import './App.css';
import BoardBackground from './container/BoardBackground';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [listTodo, setListTodo] = useState<Todo[]>(() => {
    const localData = localStorage.getItem('todoData');
    return localData ? JSON.parse(localData) : [];
  });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setListTodo([...listTodo, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo('');
    }
  };

  return (
    <div className='App'>
      <header className='App-header'>
        ToDo<span className='altText'>Plus</span>
        <sup>&trade;</sup>
      </header>
      <BoardBackground>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <TodoList listTodo={listTodo} setListTodo={setListTodo}/>
      </BoardBackground>
    </div>
  );
};

export default App;
