import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { setup } from 'goober';
import App from './App';

setup(createElement);

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);
