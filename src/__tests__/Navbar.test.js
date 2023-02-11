import React from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from '../components/Navbar';

it('Navbar renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<Navbar />);
});
