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
    title: 'Dedica moltes hores',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    bgColor: '#4EA2AA',
    image: '#',
  },
  {
    title: 'Programa projects propis',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    bgColor: '#D3D4DA',
    image: '#',
  },
  {
    title: 'Procura descansar',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    bgColor: '#FFD267',
    image: '#',
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
