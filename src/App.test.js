import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the card with buttons', () => {
  render(<App />);
  const likeButton = screen.getByText(/Like/i);
  const commentButton = screen.getByText(/Comment/i);
  const shareButton = screen.getByText(/Share/i);
  expect(likeButton).toBeInTheDocument();
  expect(commentButton).toBeInTheDocument();
  expect(shareButton).toBeInTheDocument();
});
