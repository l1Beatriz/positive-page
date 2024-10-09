import style from "./styles.module.css";

export default function ButtonFetch({ onFetch, onLoading }) {

    async function fetchPhraseById(phraseId) {
        onLoading(true);
        try {
            const response = await fetch(`https://positive-api.onrender.com/frases/${phraseId}`);
            const data = await response.json();
            onFetch(data.phrase);
        } catch(error) {
            console.log("falha", error);
        } finally {
            onLoading(false);
        }
    }

    function handleFetchNewPhrase() {
        const randomId = Math.floor(Math.random() * 10) + 1;
        fetchPhraseById(randomId);
    }


    return (
        <button 
            className={style.button} 
            onClick={handleFetchNewPhrase}>
            Gerar Frases
        </button>
    )
}