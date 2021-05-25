import { render } from '@testing-library/react';

import TodoItemList from './todo-item-list';

describe('TodoItemList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoItemList />);
    expect(baseElement).toBeTruthy();
  });
});
