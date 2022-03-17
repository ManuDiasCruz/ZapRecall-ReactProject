export default function FlashCardfront({id, name, question, answer}){
    return (
        <article className="flashcard-front">
            <h2>{answer}</h2>
            <div className="answers">
                <button className="forget">Não lembrei</button>
                <button className="ok"><span>Quase não lembrei</span></button>
                <button className="perfect">Zap!</button>
            </div>
        </article>
    )
}