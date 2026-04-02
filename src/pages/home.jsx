import { Link } from "react-router-dom"

function Home() {
    return(
        <>
            <h1>Home</h1>
            <Link to={"/Furia-da-Noite"}>Furia da Noite</Link>
            <Link to={"/Pesadelo-Monstruoso"}>Pesadelo Monstruoso</Link>
            <Link to={"/Nadder-Mortal"}>Nadder Mortal</Link>
            <Link to={"/Estridente"}>Estridente</Link>
            <Link to={"/Pula-Nuvens"}>Pula Nuvens</Link>

        </>
    )
}

export default Home;