import React from 'react';
import { createRoot } from 'react-dom/client';
import GoingBack from '../components/GoingBack';

it('GoingBack renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<GoingBack />);
});
