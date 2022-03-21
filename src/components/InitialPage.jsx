import { useState } from "react"
import DeckPage from "./DeckPage";

export default function InitialPage(){
    const [visibility, setVisibility] = useState(true);
    let decks = [
        {
            name: "First Deck",
            deck: 
            [
                {id: 1, question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript", cardStatus:"incomplete"},
                {id: 2, question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces", cardStatus:"incomplete"}
            ]
        },
        {
            name: "Second Deck",
            deck: [
                {id: 1, question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript", cardStatus:"incomplete"},
                {id: 2, question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces", cardStatus:"incomplete"},
                {id: 3, question: "Componentes devem iniciar com __", answer: "letra maiúscula", cardStatus:"incomplete"},
                {id: 4, question: "Podemos colocar __ dentro do JSX ", answer: "expressões", cardStatus:"incomplete"},
                {id: 5, question: "O ReactDOM nos ajuda __", answer: "nteragindo com a DOM para colocar componentes React na mesma", cardStatus:"incomplete"},
                {id: 6, question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências", cardStatus:"incomplete"},
                {id: 7, question: "Usamos props para __", answer: "passar diferentes informações para componentes", cardStatus:"incomplete"},
                {id: 8, question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", cardStatus:"incomplete"}
            ]
        }, 
        {
            name: "Third Deck",
            deck: [
                {id: 1, question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript", cardStatus:"incomplete"},
                {id: 2, question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces", cardStatus:"incomplete"},
                {id: 3, question: "Componentes devem iniciar com __", answer: "letra maiúscula", cardStatus:"incomplete"},
                {id: 4, question: "Podemos colocar __ dentro do JSX ", answer: "expressões", cardStatus:"incomplete"},
                {id: 5, question: "O ReactDOM nos ajuda __", answer: "nteragindo com a DOM para colocar componentes React na mesma", cardStatus:"incomplete"},
                {id: 6, question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências", cardStatus:"incomplete"},
                {id: 7, question: "Usamos props para __", answer: "passar diferentes informações para componentes", cardStatus:"incomplete"},
                {id: 8, question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", cardStatus:"incomplete"}
            ]
        
        }
    ]
    let selectedDeck = [...decks[0].deck]

    function sortArray(array){
        array.sort(()=> Math.random() - 0.5);
    }

    sortArray(selectedDeck)

    return ( visibility ?
        
            <main className="initial-page">
                <img className="logo" src="" alt="" />
                <h1 className="title">ZapRecall</h1>
                <button className="start-button" 
                    onClick={()=> {setVisibility(false)}
                    }>Iniciar Recall!</button>
            </main>
            :
            <DeckPage deck={selectedDeck}/>
    )
}