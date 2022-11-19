import { FC, Dispatch } from 'react';
import { Todo } from '../model';
import styled from 'styled-components';
import { ReactComponent as CheckIcon } from '../assets/success-icon.svg';
import { colors } from '../styles/index';
import SingleList from './SingleList';

const ListWrap = styled.div`
  position: relative;
  display: flex;
  color: ${colors.boldDark};
`;

interface TodoListProps {
  listTodo: Todo[];
  setListTodo: Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: FC<TodoListProps> = ({ listTodo, setListTodo }) => {
  return (
    <ListWrap>
      {listTodo.map((todo) => (
        <SingleList
          todo={todo}
          key={todo.id}
          listTodo={listTodo}
          setListTodo={setListTodo}
        />
      ))}
    </ListWrap>
  );
};

export default TodoList;
