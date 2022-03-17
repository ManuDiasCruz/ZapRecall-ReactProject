import FlashCard from "./FlashCard";

export default function FlashCardList(){
    let flashcards = [
        {id: 1, name: "Pergunta 1", question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {id: 2, name: "Pergunta 2", question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces"},
        {id: 3, name: "Pergunta 3", question: "Componentes devem iniciar com __", answer: "letra maiúscula"},
        {id: 4, name: "Pergunta 4", question: "Podemos colocar __ dentro do JSX ", answer: "expressões"},
        {id: 5, name: "Pergunta 5", question: "O ReactDOM nos ajuda __", answer: "nteragindo com a DOM para colocar componentes React na mesma"},
        {id: 6, name: "Pergunta 6", question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências"},
        {id: 7, name: "Pergunta 7", question: "Usamos props para __", answer: "passar diferentes informações para componentes"},
        {id: 8, name: "Pergunta 8", question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
    ]

    let opennedFlashcard = false;
    let answeredFlashcard = false;

    return (
        <section className="flashcardlist">
            { flashcards.map(({id, name, question, answer}) => <FlashCard key={id} id={id} name={name} question={question} answer={answer}/>)}
        </section>
    )
}