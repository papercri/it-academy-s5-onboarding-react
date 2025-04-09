import { CardProps } from "../types/cardProps";
import Buttons from "./Buttons";
import  Indicator  from "./Indicator";
import '../styles/Card.css';

function Card({ title, description, bgColor, image, clickNext, isLast, clickPrev, isFirst, currentStep, toStep }: CardProps) {
  return (
    <>
      <div className="grid place-items-center min-h-screen">
        <div className="card grid grid-rows-[2fr_1fr] gap-4 shadow-2xl bg-white">
          <div className="img flex justify-center items-center" style={{ backgroundColor: bgColor }}>
            <img src={image} alt={title} />
          </div>
          <div className="desc flex flex-col justify-between">
            <div className="text-left">
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="flex justify-between gap-2.5 mt-5">
              <div className="bullets flex justify-start gap-2.5 ">
                <Indicator 
                  currentStep={currentStep} 
                  toStep={toStep} 
                />
              </div>
              <div className="buttons flex justify-end gap-2.5 ">
                <Buttons 
                  clickPrev={clickPrev} 
                  clickNext={clickNext} 
                  isFirst={isFirst} 
                  isLast={isLast} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Card;
