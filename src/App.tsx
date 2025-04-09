import { useState } from 'react';
import Card from './components/Card';
import { tutorialData } from './data/tutorialData';

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
  function toStep(index: number) {
    setStepIndex(index);
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
        currentStep={stepIndex}
        toStep={toStep}
      />
  );
}

export default App;
