/**
File Name : App.test.js
Description : js
Author : 강민규

History
Date        Author   Status    Description
2024.06.10  강민규   Created   react default
2024.06.10  강민규   
*/

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
