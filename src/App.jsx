import styled from "styled-components";
import EstilosGlobais from "./components/EstilosGlobais/index.jsx";
import Cabecalho from "./components/Cabecalho/index.jsx";
import BarraLateral from "./components/BarraLateral/index.jsx";
import Banner from "./components/Banner/index.jsx";
import bannerBackground from "./assets/banner.png";


const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`

function App() {
    return (
        <FundoGradiente>
            <EstilosGlobais />
            <Cabecalho />
            <Banner texto="A galeria mais completa de fotos do espaço!" backgroundImage={bannerBackground} />
            <BarraLateral />
        </FundoGradiente>
    )
}

export default App
