import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import '../index.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
const mainQueryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={mainQueryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
