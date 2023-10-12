import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function TextBoxScreen() {
  const [texto, setTexto] = useState('');
  const [clave, setClave] = useState('');
  const [textoCifrado, setTextoCifrado] = useState('');
  const [textoDescifrado, setTextoDescifrado] = useState('');

  const handleInputChange = (event) => {
    setTexto(event.target.value);
  };

  const handleClaveChange = (event) => {
    setClave(event.target.value);
  };

  const handleCifrarClick = () => {
    if (texto && clave) {
      const textoCifrado = CryptoJS.AES.encrypt(texto, clave).toString();
      setTextoCifrado(textoCifrado);
    }
  };

  const handleDescifrarClick = () => {
    if (textoCifrado && clave) {
      const bytes = CryptoJS.AES.decrypt(textoCifrado, clave);
      const textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
      setTextoDescifrado(textoDescifrado);
    }
  };

  return (
    <div>
      <h1>Pantalla con Caja de Texto y Botones</h1>
      <input
        type="text"
        value={texto}
        onChange={handleInputChange}
        placeholder="Ingresa un texto"
      />
      <input
        type="text"
        value={clave}
        onChange={handleClaveChange}
        placeholder="Clave de cifrado"
      />
      <button onClick={handleCifrarClick}>Cifrar texto</button>
      <button onClick={handleDescifrarClick}>Descifrar texto</button>
      <p>Texto Cifrado: {textoCifrado}</p>
      <p>Texto Descifrado: {textoDescifrado}</p>
    </div>
  );
}

export default TextBoxScreen;
