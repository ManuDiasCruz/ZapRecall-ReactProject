import Deck from "./Deck";
import { useState } from "react";

export default function DeckPage({deck}){
    const [userAnswers, setUserAnswers] = useState([]);
    const [numberOfFlashCards, setNumberOfFlashCards] = useState(0);
    const [visibility, setVisibility] = useState(true);

    let forgetAtLeastOnce = 0;
    function updateListOfAnswers(newAnswer){
        setUserAnswers([...userAnswers, newAnswer]);
    }

    return ( visibility ?
            <main className="deck-page">
                <header>
                    <img src="" alt="" />
                    <h1>ZapRecall</h1>
                </header>
                <Deck deck = {deck} userAnswers={uAnswer => {updateListOfAnswers(uAnswer); if (uAnswer==="forget"){forgetAtLeastOnce+=1;}}} setNumberOfFlashCards={setNumberOfFlashCards} />
                {console.log(`userAnswers: ${userAnswers}`)}
                { userAnswers.length < numberOfFlashCards ?
                    <footer>
                        <p>{userAnswers.length}/{numberOfFlashCards} CONCLUÍDOS</p>
                    </footer>
                    :
                    forgetAtLeastOnce>0?
                        <footer className="final">
                            <div className="final-title">
                                <img className="congrats"></img>
                                <p>PUTZ!</p>
                            </div>
                            <span>Você não esqueceu de nenhum flashcard!</span>
                            <div>
                                <p>lista de respostas</p>
                            </div>
                        </footer>
                        :
                        <footer className="final">
                            <div className="final-title">
                                <img className="maybe-next"></img>
                                <p>PUTZ!</p>
                            </div>
                            <span>Ainda faltaram alguns. Mas não desanime!</span>
                            <div>
                                <p>lista de respostas</p>
                            </div>
                        </footer>
                }
            </main>
            :
            <></>
    )
}