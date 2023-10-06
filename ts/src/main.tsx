import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import '../style.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const mainQueryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={mainQueryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
