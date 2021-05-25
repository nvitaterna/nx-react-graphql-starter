import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { TodoItemForm, TodoItemList } from '@todo-starter/feature-todos';
import './app.module.scss';

const client = new ApolloClient({
  uri: '/api/graphql',
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <h1>Todo Items</h1>
      <div className="flex">
        <TodoItemForm />
        <TodoItemList />
      </div>
    </ApolloProvider>
  );
};

export default App;
