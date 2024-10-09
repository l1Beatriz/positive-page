import style from "./styles.module.css";
import Titles from "../Title/Titles";
import ButtonFetch from "../ButtonFetch/ButtonFetch";
import { useState } from "react";

export default function PhraseBox() {

    const [ phrase, setPhrase ] = useState("");
    const [ loading, setLoading ] = useState(false);

    return (
        <div className={style.container__phrase__box}>
            <Titles />

            <div className={style.container__phrase}>
                {loading ? (
                    <p>Carregando...</p>
                ) : (
                    <p>{phrase}</p>
                )}
            </div>
        
            <ButtonFetch onFetch={setPhrase} onLoading={setLoading} />
        </div>
    )
}