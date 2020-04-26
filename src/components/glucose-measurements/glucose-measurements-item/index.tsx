import styled from 'styled-components';
import React from 'react';
import { Todo } from '../types';

type Props = {
  todo: Todo,
  onEdit?: (todo: Todo) => void,
  onDelete?: (todo: Todo) => void,
};

const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TodoItem: React.FC<Props> = ({ todo, onEdit, onDelete }) => {
  const { carbohydrateCounting, date, glucoseLevel } = todo;

  const handleRemoveButtonPress = React.useCallback(() => {
    // onDelete(todo);
  }, [onDelete, todo]);

  return (
    <Container>
      {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
      <button onClick={handleRemoveButtonPress} type="button" />
    </Container>
  );
};
