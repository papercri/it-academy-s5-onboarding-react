import React, { useState } from 'react';
import Card from './components/Card';

type Pasos = {
  title: string;
  description: string;
  bgColor: string;
  image: string;
};

const tutorialData: Pasos[] = [
  {
    title: 'Bienvenido a la app',
    description: 'Aquí aprenderás a usar la aplicación paso a paso.',
    bgColor: '#4EA2AA',
    image: 'https://via.placeholder.com/200x100?text=Paso+1',
  },
  {
    title: 'Gestiona tus tareas',
    description: 'Puedes añadir, editar y borrar tareas fácilmente.',
    bgColor: '#D3D4DA',
    image: 'https://via.placeholder.com/200x100?text=Paso+2',
  },
  {
    title: '¡Comienza ahora!',
    description: 'Ya estás listo para empezar a usar la app.',
    bgColor: '#FFD267',
    image: 'https://via.placeholder.com/200x100?text=Paso+3',
  },
];

function App() {
  const [pIndex, setPIndex] = useState(0);

  return (
    <>
      <Card
        title={tutorialData[pIndex].title}
        description={tutorialData[pIndex].description}
        bgColor={tutorialData[pIndex].bgColor}
        image={tutorialData[pIndex].image}
      />
  
    </>
  );
}

export default App;
