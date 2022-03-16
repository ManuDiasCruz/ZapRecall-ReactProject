import FlashCard from "./FlashCard";

export default function FlashCardList(){
    let flashcards = [
        {name: "Pergunta 1"},
        {name: "Pergunta 2"},
        {name: "Pergunta 3"},
        {name: "Pergunta 4"},
        {name: "Pergunta 5"},
        {name: "Pergunta 6"},
        {name: "Pergunta 7"},
        {name: "Pergunta 8"},
        {name: "Pergunta 9"},
        {name: "Pergunta 10"}
    ]
    return (
        <section className="flashcardlist">
            {flashcards.map((flashcard) => <FlashCard name={flashcard.name}/>)}
        </section>
    )
}