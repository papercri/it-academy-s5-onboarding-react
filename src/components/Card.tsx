
type CardProps = {
  title: string;
  description: string;
  bgColor: string;
  image: string;
  clickNext: () => void;
  isLast: boolean;
  clickPrev: () => void;
  isFirst: boolean;
};

function Card({ title, description, bgColor, image, clickNext, isLast, clickPrev, isFirst }: CardProps) {
  return (
    <>
      <div style={{ backgroundColor: bgColor }}>
        <img src={image} alt={title} width={200} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={clickPrev} disabled={isFirst}>
          Previous
        </button>
        <button onClick={clickNext} disabled={isLast}>
          Next
        </button>
      </div>
    </>
  );
}

export default Card;
