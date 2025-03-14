import React from 'react';
import { SaboresProvider } from './context/SaboresContext';
import App from './App';

export default function MainApp() {
    return (
        <SaboresProvider>
            <App />
        </SaboresProvider>
    );
}
