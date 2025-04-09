import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { ButtonsProps } from "../types/buttonsProps";

function Buttons({ clickPrev, clickNext, isFirst, isLast }: ButtonsProps) {
    return (
        <>
            <button onClick={clickPrev} disabled={isFirst} className="btn-prev">
            <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button onClick={clickNext} disabled={isLast} className="btn-next">
            <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </>
    );
}
export default Buttons;