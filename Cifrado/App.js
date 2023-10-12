import React from 'react';
import './App.css';
import TextBoxScreen from './components/Botonoes'; // Importa el componente TextBoxScreen

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TextBoxScreen /> {/* Asegúrate de que estás utilizando el componente TextBoxScreen aquí */}
      </header>
    </div>
  );
}
