import { render } from '@testing-library/react';

import TodoItemForm from './todo-item-form';

describe('TodoItemForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TodoItemForm />);
    expect(baseElement).toBeTruthy();
  });
});
