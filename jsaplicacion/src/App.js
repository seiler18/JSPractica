// App.js
import React, { useState } from 'react';
import analyzeImage from './azure-image-analysis';
import './App.css';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageAnalysis = async () => {
    try {
      setLoading(true);
      const result = await analyzeImage(imageUrl);
      setAnalysisResult(result);
      console.log('Resultado del análisis de imágenes:', result);
    } catch (error) {
    
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateImage = () => {
    console.log('Generando otra imagen...');
   
  };

  const DisplayResults = () => {
    if (loading) {
      return <p>Analizando la imagen...</p>;
    }

    if (analysisResult) {
      return (
        <div>
          <h2>Resultados del análisis:</h2>
          <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
          <p>Imagen procesada desde: {imageUrl}</p>
          {analysisResult?.description?.captions?.[0]?.text && (
            <img src={imageUrl} alt="Imagen Analizada" className="analyzed-image" />
          )}
          <button onClick={handleGenerateImage}>Generar Otra Imagen</button>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="app-container">
      <h1>Aplicación de Análisis de Imágenes</h1>
      <label htmlFor="imageUrl">URL de la imagen:</label>
      <input
        type="text"
        id="imageUrl"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <div className="button-container">
        <button onClick={handleImageAnalysis} disabled={loading}>
          Analizar Imagen
        </button>
        <DisplayResults />
      </div>
    </div>
  );
}

export default App;
