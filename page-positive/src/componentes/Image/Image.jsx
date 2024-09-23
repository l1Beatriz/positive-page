import "./styles.css";
import stayPositive from "../../assets/stay-positive.svg";

export default function Image() {
    return (
        <div>
            <img className="image" src={stayPositive} alt="" />
        </div>
    )
}