import styled from 'styled-components';
import React from 'react';
import { GlucoseMeasurementsType } from '../types';

type Props = {
  todo: GlucoseMeasurementsType,
  onEdit?: (todo: GlucoseMeasurementsType) => void,
  onDelete?: (todo: GlucoseMeasurementsType) => void,
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
