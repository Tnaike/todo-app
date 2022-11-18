import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AddIcon } from '../assets/add-icon.svg';
import { colors } from '../styles/index';

const StyledForm = styled.form`
  position: relative;
  display: flex;
  width: 50%;
  min-width: 400px;
  margin: 0 auto;
  padding: 20px 15px;
  align-items: center;
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  padding: 20px 65px 20px 25px;
  font-size: 1.4rem;
  color: ${colors.boldDark};
  border: none;
  border-radius: 50px;
  outline: none;
  overflow: hidden;
  box-shadow: inset 0px 0px 5px ${colors.boldDark};
  &:focus {
    box-shadow: 0 0px 10px 1000px ${colors.boldDark};
    outline: none;
  }
`;

const SubmitButton = styled.button`
  position: absolute;
  width: 50px;
  height: 50px;
  right: 25px;
  background: ${colors.blue};
  border-radius: 50px;
  border: none;
  transition: 0.2s all;
  -webkit-box-shadow: 0 0 8px ${colors.darkBlue};
  box-shadow: 0 0 8px ${colors.darkBlue};
  &:not([disabled]):hover {
    cursor: pointer;
    background: ${colors.red};
  }
  &:not([disabled]):active {
    transform: scale(0.9);
    box-shadow: 0 0 3px ${colors.darkBlue};
  }
`;

interface TodoProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<TodoProps> = ({ todo, setTodo, handleAdd }) => {
  return (
    <>
      <StyledForm onSubmit={handleAdd}>
        <Input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='Enter a task'
        />
        <SubmitButton type='submit' disabled={!todo}>
          <AddIcon />
        </SubmitButton>
      </StyledForm>
    </>
  );
};

export default InputField;
