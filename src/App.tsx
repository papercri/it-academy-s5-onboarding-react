import { useState } from 'react';
import Card from './components/Card';
import { tutorialData } from './data/tutorialData';
import './styles/App.css';

function App() {
  const [stepIndex, setStepIndex] = useState(0);

  function nextStep() {
    if (stepIndex < tutorialData.length - 1) {
      setStepIndex(stepIndex + 1);
    }
  }
  function prevStep() {
    if (stepIndex > 0) {
      setStepIndex(stepIndex - 1);
    }
  }

  return (
      <Card
        title={tutorialData[stepIndex].title}
        description={tutorialData[stepIndex].description}
        bgColor={tutorialData[stepIndex].bgColor}
        image={tutorialData[stepIndex].image}
        clickPrev={prevStep}
        isFirst={stepIndex === 0}
        clickNext = {nextStep}
        isLast={stepIndex === tutorialData.length - 1}
      />
  );
}

export default App;
