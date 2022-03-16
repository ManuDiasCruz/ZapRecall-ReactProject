export default function InitialPage(){
    
    return (
        <main className="initial-page">
            <img className="logo" src="" alt="" />
            <h1 className="title">ZapRecall</h1>
            <button className="start-button" 
                onClick={()=> {
                    document.querySelector(".initial-page").classList.add(".hidden")
                }}>Iniciar Recall!</button>
        </main>
    )
}