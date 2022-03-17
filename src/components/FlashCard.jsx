import { useState } from "react";
import FlashCardback from "./FlashCardback";
export default function FlashCard({id, name, question, answer}){
    const [selected, setSelected] = useState(false);

    return (
        !selected ?
        <article className="flashcard" onClick={() => {
            setSelected(true)
            console.log(`Apertei essa pergunta ${id}`)}}>
            <h2 className="title">{name}</h2>
            <ion-icon name="play-outline"></ion-icon>
        </article>
        :
        <FlashCardback key={id} id={id} name={name} question={question} answer={answer}/>
    )
}