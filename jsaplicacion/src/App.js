import './App.css';
import React, { useState } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageAnalysis = () => {
    // Lógica para el análisis de imágenes (se agregará en futuras fases)
    console.log('Análisis de imágenes desencadenado');
  };

  const handleImageGeneration = () => {
    // Lógica para la generación de imágenes (se agregará en futuras fases)
    console.log('Generación de imágenes desencadenada');
  };

  return (
    <div>
      <h1>Aplicación de Análisis de Imágenes</h1>
      <label htmlFor="imageUrl">URL de la imagen:</label>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <br />
      <button onClick={handleImageAnalysis}>Analizar Imagen</button>
      <button onClick={handleImageGeneration}>Generar Imagen</button>
    </div>
  );
}

export default App;





