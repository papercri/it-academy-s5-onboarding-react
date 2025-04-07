export type CardProps = {
    title: string;
    description: string;
    bgColor: string;
    image: string;
    clickNext: () => void;
    isLast: boolean;
    clickPrev: () => void;
    isFirst: boolean;
  };

