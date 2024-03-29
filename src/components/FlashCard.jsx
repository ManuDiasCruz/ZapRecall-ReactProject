import { useState } from "react";
export default function FlashCard({flashcard, index, FCAnswer}){
    const {id, question, answer} = flashcard

    const [status, setStatus] = useState("clicked");
    
    function updateStatus(status){
        FCAnswer(status); 
        setStatus(status); 
    }
    
    return (
        status == "clicked" ?
        <article className="flashcard">
            <h2 className="title">FlashCard {index}</h2>
            <img src="" alt="" onClick={() => {setStatus("turned")}} />
        </article>
        :
            status == "turned" ?
            <article className="flashcard-back">
                {console.log(`Abri o Flashcard-back ${id}`)}
                <h2>{question}</h2>
                <img src="" alt="" onClick={() => {setStatus("openned")}}/>
            </article>
            :
            status == "openned" ?
                <article className="flashcard-front">
                    <h2>{answer}</h2>
                    <div className="answers">
                        <button className="forget" 
                            onClick={() => updateStatus("forget")}>
                            <span>Não lembrei</span>
                        </button>
                        <button className="ok" 
                            onClick={() => updateStatus("ok")}>
                            <span>Quase não lembrei</span>
                        </button>
                        <button className="perfect" 
                            onClick={() => updateStatus("perfect")}>
                            <span>Zap!</span>
                        </button>
                    </div>
                </article>
                :
                status == "forget" || status == "ok" || status == "perfect"  ?
                <article className={status}>
                    {console.log("STATUS: "+status)}
                    <h2 className="title">FlashCard {index}</h2>
                    <img src="" alt="" />
                </article>
                :
                <></>
    );
}