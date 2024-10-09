import style from "./styles.module.css";
import stayPositive from "../../assets/stay-positive.svg";

export default function Image() {
    return (
        <div>
            <img className={style.image} src={stayPositive} alt="image positive" />
        </div>
    )
}