import DeckHeader from "./DeckHeader";
import DeckFooter from "./DeckFooter";
import FlashCardList from "./FlashCardList";

export default function DeckPage(){
    return (
        <main className="deck-page">
            <DeckHeader/>
                <FlashCardList/>
            <DeckFooter/>
        </main>
    )
}