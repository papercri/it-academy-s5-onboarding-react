
import { CardProps } from "../types/cardProps";

function Card({ title, description, bgColor, image, clickNext, isLast, clickPrev, isFirst }: CardProps) {
  return (
    <>
    <div className="grid place-items-center min-h-screen">
    <div style={{ backgroundColor: bgColor }}>
        <img src={image} alt={title} width={200} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button onClick={clickPrev} disabled={isFirst}>
          <span className="fa-solid fa-arrow-left"></span>
        </button>
        <button onClick={clickNext} disabled={isLast}>
          <span className="fa-solid fa-arrow-right"></span>
        </button>
      </div>
    </div>
      
    </>
  );
}

export default Card;
