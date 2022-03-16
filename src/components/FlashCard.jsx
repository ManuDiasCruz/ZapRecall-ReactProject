export default function FlashCard(props){
    return (
        <article className="flashcard">
            <h2 className="title">{props.name}</h2>
            <ion-icon name="play-outline"></ion-icon>
        </article>
    )
}