import { useState } from "react";
import FlashCardfront from "./FlashCardfront";
export default function FlashCardback({id, name, question, answer}){
    const [showAnswer, setshowAnswer] = useState(false);
    return (
        !showAnswer ?
        <article className="flashcard-back" onClick={() => {
            setshowAnswer(true)
            console.log(`Apertei essa pergunta ${id}`)}}>
            {console.log(`Abri o Flashcard-back ${id}`)}
            <h2>{question}</h2>
            <img src="" alt="" />
        </article>
        :
        <FlashCardfront key={id} id={id} name={name} question={question} answer={answer}/>
    )
}