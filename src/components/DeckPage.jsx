import DeckHeader from "./DeckHeader";
import DeckFooter from "./DeckFooter";
import FlashCardList from "./FlashCardList";
import { useState } from "react";

export default function DeckPage(){
    const [visibility, setVisibility] = useState(true);
    return ( visibility ?
            <main className="deck-page">
                {console.log("DeckPage: Fiquei visível!")}
                <DeckHeader/>
                    <FlashCardList/>
                <DeckFooter/>
            </main>
            :
            <></>
    )
}