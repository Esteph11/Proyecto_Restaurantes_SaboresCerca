import React from 'react';  
import { SaboresProvider } from './context/SaboresContext';  
import YourMainComponent from './components/YourMainComponent';  

export default function App() {  
    return (  
        <SaboresProvider>  
            <YourMainComponent />  
        </SaboresProvider>  
    );  
}  
