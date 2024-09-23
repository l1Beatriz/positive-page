import "./styles.css";
import axios from "axios";
import { useState} from "react";

export default function PhraseBox() {
    const [phrase, setPhrase] = useState([])

   async function getPhrase() {
        try {
            const response = await axios.get("http://localhost:3000/frases");
            setPhrase(response);
          } catch (error) {
            console.error(error);
          }
    };

    function handleClick() {
        getPhrase();
    };

    return (
        <div className="container__phrase__box">
            <div>
                <h1 className="main-title">espalhe as suas</h1>
                <h2 className="second__title">Frases de Luz</h2>
            </div>

            <div className="container__phrase">
                <p>{phrase}</p>
            </div>

            <button className="button" onClick={handleClick}>Gerar Frases</button>
        </div>
    )
}