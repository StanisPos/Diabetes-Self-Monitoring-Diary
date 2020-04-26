import React from 'react';
import styled from 'styled-components';
import { List, Avatar, Button, Skeleton } from 'antd';
import { TodoItem } from '../glucose-measurements-item';
import { Todo } from '../types';

type Props = {
  todos: Todo[],
  onAdd?: (todo: Omit<Todo, 'id'>) => void,
  onDelete?: (todo: Todo) => void,
  onEdit?: (todo: Todo) => void,
};

const Container = styled.div`
  background-color: #fff;
  width: 800px;
  min-height: 60vh;
  border-radius: 1vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 3.5vh;
`;

const TodosList = styled.ul`
  list-style: none;
`;

const Footer = styled.div`
  margin-top: auto;
  margin-bottom: 1vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AddTodoInput = styled.input`
  width: 20vw;
`;

export const TodoList: React.FC<Props> = ({ todos, onAdd, onDelete, onEdit }) => {
  const [todoInputValue, setTodoInputValue] = React.useState<string>('');

  const renderTodos = () =>
    todos.map(todo => <TodoItem onEdit={onEdit} onDelete={onDelete} todo={todo} key={todo.id} />);

  const handleAddButtonPress = React.useCallback(() => {
    setTodoInputValue('');
  }, [onAdd, todoInputValue]);

  const handleAddTodoInputChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setTodoInputValue(e.target.value),
    [],
  );

  return <List className="demo-loadmore-list" itemLayout="horizontal" dataSource={todos} renderItem={item => <></>} />;

  // return (
  // 	<Container>
  // 		<Content>
  // 			<Title>Glucose measurements list</Title>
  // 			<TodosList>{renderTodos()}</TodosList>
  // 		</Content>
  // 		<Footer>
  // 			<AddTodoInput placeholder="add task..." value={todoInputValue} onChange={handleAddTodoInputChange} />
  // 			{/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
  // 			<button onClick={handleAddButtonPress} type="button" />
  // 		</Footer>
  // 	</Container>
  // );
};
