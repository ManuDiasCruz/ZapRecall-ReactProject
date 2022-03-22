import Deck from "./Deck";
import { useState, CodePush } from "react";



export default function DeckPage({deck}){
    const [userAnswers, setUserAnswers] = useState([]);
    const [numberOfFlashCards, setNumberOfFlashCards] = useState(0);
    const [forgetAtLeastOne, setForgetAtLeastOne] = useState(0);

    let visible = true;

    function resetDeck(){
        CodePush.restartApp();
    }

    function updateListOfAnswers(newAnswer){
        setUserAnswers([...userAnswers, newAnswer]);
    }
    
    return ( visible ?
            <main className="deck-page">
                <header>
                    <img src="" alt="" />
                    <h1>ZapRecall</h1>
                </header>
                <Deck deck = {deck} userAnswers={uAnswer => {updateListOfAnswers(uAnswer); if (uAnswer==="forget"){setForgetAtLeastOne(forgetAtLeastOne+1)}}} setNumberOfFlashCards={setNumberOfFlashCards} />
                {console.log(`userAnswers: ${userAnswers}`)}
                { userAnswers.length < numberOfFlashCards ?
                    <footer>
                        <p>{userAnswers.length}/{numberOfFlashCards} CONCLUÍDOS</p>
                        <div className="final-answers">
                            {userAnswers.map(anwser => <img className={anwser} src="" alt="" />)}
                        </div>
                    </footer>
                    :
                    forgetAtLeastOne>0?
                        <footer>
                            <div className="final-title">
                                <img className="maybe-next"></img>
                                <p>PUTZ!</p>
                            </div>
                            <span>Ainda faltaram alguns. Mas não desanime!</span>
                            <div className="final-answers">
                                {userAnswers.map(anwser => <img className={anwser} src="" alt="" />)}
                            </div>
                            <button className="reset-recall" onClick={()=>resetDeck()}>REINICIAR RECALL</button>
                        </footer>
                        :
                        <footer>
                            <div className="final-title">
                                <img className="congrats"></img>
                                <p>PARABÉNS!</p>
                            </div>
                            <span>Você não esqueceu de nenhum flashcard!</span>
                            <div className="final-answers">
                                {userAnswers.map(anwser => <img className={anwser} src="" alt="" />)}
                            </div>
                            <button className="reset-recall" onClick={()=>resetDeck()}>REINICIAR RECALL</button>
                        </footer>
                }
            </main>
            :
            <></>
    )
}