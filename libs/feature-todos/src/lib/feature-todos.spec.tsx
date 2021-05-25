import { render } from '@testing-library/react';

import FeatureTodos from './feature-todos';

describe('FeatureTodos', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureTodos />);
    expect(baseElement).toBeTruthy();
  });
});
