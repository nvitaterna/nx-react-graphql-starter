import React, { useState } from 'react';

import {
  TodoItemsDocument,
  TodoItemsQuery,
  useCreateOneTodoItemMutation,
} from '@todo-starter/data-access';
import './todo-item-form.module.scss';

/* eslint-disable-next-line */
export interface TodoItemFormProps {}

export function TodoItemForm(props: TodoItemFormProps) {
  const [done, setDone] = useState(false);
  const [text, setText] = useState('');

  const [
    createOneTodoItemMutation,
    mutationResult,
  ] = useCreateOneTodoItemMutation({
    variables: {
      text,
      done,
    },
    update(cache, { data }) {
      if (!data) {
        return;
      }
      const { createOneTodoItem } = data;
      const todoItemsQuery = cache.readQuery<TodoItemsQuery>({
        query: TodoItemsDocument,
      });
      if (!todoItemsQuery) {
        return;
      }
      const { todoItems } = todoItemsQuery;

      cache.writeQuery({
        query: TodoItemsDocument,
        data: {
          todoItems: todoItems.concat([createOneTodoItem]),
        },
      });
    },
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createOneTodoItemMutation();
    setDone(false);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Text:
        <input
          name="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <br />
      <label>
        Done:
        <input
          name="done"
          type="checkbox"
          checked={done}
          onChange={(event) => setDone(event.target.checked)}
        />
      </label>
      <button>Create new todo item</button>
    </form>
  );
}

export default TodoItemForm;
