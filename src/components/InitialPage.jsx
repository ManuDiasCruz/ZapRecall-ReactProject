export default function InitialPage(){
    
    return (
        <main className="initial-page">
            <img className="logo" src="" alt="" />
            <h1 className="title">ZapRecall</h1>
            <button className="start-button" 
                onClick={()=> {
                    document.querySelector(".initial-page").style.display = "none"
                    document.querySelector(".deck-page").style.display = "flex"
                }}>Iniciar Recall!</button>
        </main>
    )
}