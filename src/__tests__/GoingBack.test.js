import React from 'react';
import { createRoot } from 'react-dom/client';
import { render, fireEvent } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import GoingBack from '../components/GoingBack';

it('GoingBack renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<GoingBack />);
});

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('GoingBack component', () => {
  it('should call the navigate function with -1 when the button is clicked', () => {
    const navigate = jest.fn();
    useNavigate.mockImplementation(() => navigate);

    const { getByText } = render(<GoingBack />);

    const buttonElement = getByText(/Go Back/i);
    fireEvent.click(buttonElement);

    expect(navigate).toHaveBeenCalledWith(-1);
  });
});
