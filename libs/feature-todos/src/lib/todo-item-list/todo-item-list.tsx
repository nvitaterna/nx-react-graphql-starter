import React from 'react';
import { useTodoItemsQuery } from '@todo-starter/data-access';
import './todo-item-list.module.scss';

/* eslint-disable-next-line */
export interface TodoItemListProps {}

export function TodoItemList(props: TodoItemListProps) {
  const { loading, error, data } = useTodoItemsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <ul>
      {data?.todoItems.map(({ id, text, done }) => (
        <li key={id}>
          {text} - <strong>{done ? 'Done' : 'Not Done'}</strong>
        </li>
      ))}
    </ul>
  );
}

export default TodoItemList;
