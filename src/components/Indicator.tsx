import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { IndicatorProps } from "../types/indicatorProps";
import { tutorialData } from "../data/tutorialData";


function Indicator({ currentStep, toStep }: IndicatorProps) {
    return (
        <div className="bullets flex justify-start gap-2.5">
            {tutorialData.map((_, index) => (
            <button
                key={index}
                className={`bullet ${currentStep === index ? 'active' : ''}`}
                onClick={() => toStep(index)} >
                <FontAwesomeIcon icon={faCircle} className="!text-sm"/>
            </button>
            ))}
        </div>
    );
}
export default Indicator;