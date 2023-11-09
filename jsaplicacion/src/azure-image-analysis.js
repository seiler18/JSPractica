import axios from 'axios';

const analyzeImage = async (imageUrl) => {
  const apiKey = '143a64b2737340f98cb8ade7e062b5e3';
  const endpoint = 'https://jsservicepractica.cognitiveservices.azure.com/vision/v3.0/analyze';

  try {
    const response = await axios.post(
      `${endpoint}?visualFeatures=Description,Tags`, // Puedes personalizar las características visuales aquí
      { url: imageUrl },
      {
        headers: {
          'Content-Type': 'application/json',
          'Ocp-Apim-Subscription-Key': apiKey,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error en la llamada a la API de Image Analysis:', error);
    throw error;
  }
};

export default analyzeImage;