import { Nav } from "../Nav/Nav"


export const Header=()=>{
    return(
        <header>
            <h1>Dionisio Wines</h1>
            {/* <a href=""> <img src={require('./dionisio.png')} /></a> */}
            <Nav/>
        </header>
    )
}