import { useState } from "react"
import DeckPage from "./DeckPage";

export default function InitialPage(){
    const [visibility, setVisibility] = useState(true);
    return ( visibility ?
        
            <main className="initial-page">
                <img className="logo" src="" alt="" />
                <h1 className="title">ZapRecall</h1>
                <button className="start-button" 
                    onClick={()=> {
                        setVisibility(false) 
                        console.log("InitialPage: Vou ficar invisível!")
                        }
                    }>Iniciar Recall!</button>
            </main>
            :
            <DeckPage/>
    )
}