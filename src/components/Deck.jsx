import { useState } from "react";
import FlashCard from "./FlashCard";

export default function Deck({deck, userAnswers, setNumberOfFlashCards}){
    const [flashcardAnswer, setFlashcardAnswer] = useState("");
    setNumberOfFlashCards(deck.length)
        
    return (
        <section className="deck">
            {console.log("DECK DECK!")}
            { deck.map(
                (flashcard, index, FCAnswer) => 
                    <FlashCard key={flashcard.id} index={index+1} flashcard={flashcard} FCAnswer={FCAnswer => {setFlashcardAnswer(FCAnswer); userAnswers(FCAnswer)}}/>
                )
            }
            {console.log(flashcardAnswer)}
        </section>
    )
}