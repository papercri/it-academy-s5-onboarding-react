import { CardProps } from "../types/cardProps";
import { tutorialData } from "../data/tutorialData";

function Indicator({ currentStep, goToStep }: CardProps) {
    return (
        <div className="bullets flex justify-start gap-2.5">
            {tutorialData.map((_, index) => (
            <button
                key={index}
                className={`bullet ${currentStep === index ? 'active' : ''}`}
                onClick={() => goToStep(index)}
            >
                <span className="fa-solid fa-circle !text-sm"></span>
            </button>
            ))}
        </div>
    );
}
export default Indicator;