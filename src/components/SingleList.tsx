import React, { Dispatch } from 'react';
import { Todo } from '../model';
import styled from 'styled-components';
import { ReactComponent as EditIcon } from '../assets/edit-write-alt.svg';
import { ReactComponent as DeleteIcon } from '../assets/delete-icon.svg';
import { ReactComponent as DoneIcon } from '../assets/done-icon.svg';
import { colors } from '../styles/index';

const TodoForm = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.paleGray};
  width: 45%;
  min-width: 360px;
  margin-top: 5px;
  padding: 15px;
  border-radius: 6px;
`;
const TodoText = styled.span`
  position: relative;
  color: ${colors.boldDark};
`;
const TodoStrikeText = styled.s`
  position: relative;
  color: ${colors.red};
`;
const IconsWrap = styled.div`
  position: relative;
  display: flex;
`;
const TodoIcon = styled.span`
  position: relative;
  margin-left: 10px;
  cursor: pointer;
  svg {
    width: 18px;
    height: 18px;
  }
`;

interface SingleProps {
  todo: Todo;
  listTodo: Todo[];
  setListTodo: Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleList = ({ todo, listTodo, setListTodo }: SingleProps) => {
  const handleDone = (id: number) => {
    setListTodo(
      listTodo.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setListTodo(listTodo.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoForm>
        {todo.isDone ? (
          <TodoStrikeText>{todo.todo}</TodoStrikeText>
        ) : (
          <TodoText>{todo.todo}</TodoText>
        )}
        <IconsWrap>
          <TodoIcon>
            <EditIcon />
          </TodoIcon>
          <TodoIcon onClick={() => handleDelete(todo.id)}>
            <DeleteIcon />
          </TodoIcon>
          <TodoIcon onClick={() => handleDone(todo.id)}>
            <DoneIcon />
          </TodoIcon>
        </IconsWrap>
      </TodoForm>
    </>
  );
};

export default SingleList;
