import "./styles.css";

export default function PhraseBox() {
    return (
        <div className="container__phrase__box">
            <div>
                <h1 className="main-title">espalhe as suas</h1>
                <h2 className="second__title">Frases de Luz</h2>
            </div>

            <div className="container__phrase">
                <p>Teste</p>
            </div>

            <button className="button">Gerar Frases</button>
        </div>
    )
}