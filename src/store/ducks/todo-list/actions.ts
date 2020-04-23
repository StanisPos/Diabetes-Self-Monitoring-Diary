import { createAction } from 'redux-actions';
import { REDUCER_NAME } from './constants';

export const todoItemAdd = createAction(`${REDUCER_NAME}/TODO_ITEM_ADD`);
