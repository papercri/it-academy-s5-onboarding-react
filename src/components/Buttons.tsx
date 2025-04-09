import { ButtonsProps } from "../types/buttonsProps";

function Buttons({ clickPrev, clickNext, isFirst, isLast }: ButtonsProps) {
    return (
        <>
            <button onClick={clickPrev} disabled={isFirst} className="btn-prev">
            <span className="fa-solid fa-arrow-left"></span>
            </button>
            <button onClick={clickNext} disabled={isLast} className="btn-next">
            <span className="fa-solid fa-arrow-right"></span>
            </button>
        </>
    );
}
export default Buttons;