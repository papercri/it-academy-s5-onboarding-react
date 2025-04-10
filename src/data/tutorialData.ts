
import step1 from '../assets/time_managment.svg';
import step2 from '../assets/programming.svg';
import step3 from '../assets/meditation.svg';

import { Step } from '../types/step';

export const tutorialData: Step[] = [
    {
      title: 'Dedica moltes hores',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      bgColor: 'var(--color-blueC)',
      image: step1,
    },
    {
      title: 'Programa projects propis',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      bgColor: 'var(--color-greyC)',
      image: step2,
    },
    {
      title: 'Procura descansar',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      bgColor: 'var(--color-yellowC)',
      image: step3,
    },
  ];
