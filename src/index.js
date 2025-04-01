import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App'
import './index.css'

import { ContextProvider } from './contexts/ContextProvider'

const container = document.getElementById('root');
if (!container) {
    throw new Error("O elemento 'root' não foi encontrado no DOM.");
}

const root = createRoot(container);  // Usa createRoot() em vez de render()
root.render(
    <React.StrictMode>
        <ContextProvider>
            <App />
        </ContextProvider>
    </React.StrictMode>
);
