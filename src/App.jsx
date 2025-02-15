import {useState} from "react";

import styled from "styled-components";

import EstilosGlobais from "./components/EstilosGlobais/index.jsx";
import Cabecalho from "./components/Cabecalho/index.jsx";
import BarraLateral from "./components/BarraLateral/index.jsx";
import Banner from "./components/Banner/index.jsx";
import Galeria from "./components/Galeria/index.jsx";
import ModalZoom from "./components/ModalZoom/index.jsx";

import bannerBackground from "./assets/banner.png";
import fotos from './fotos.json';

const FundoGradiente = styled.div`
    background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
`

const AppContainer = styled.div`
    width: 1440px;
    margin: 0 auto;
    max-width: 100%;
`

const MainContainer = styled.main`
    display: flex;
    gap: 24px;
    
`

const ConteudoGaleria = styled.section`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`



const App = () => {
    const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
    const [fotoSelecionada, setFotoSelecionada] = useState(null);

    const aoAlternarFavorito = (foto) => {
        if(foto.id === fotoSelecionada?.id) {
            setFotoSelecionada({
                ...fotoSelecionada,
                favorita: !fotoSelecionada.favorita
            })
        }
        setFotosDaGaleria(fotosDaGaleria.map(fotoDaGaleria => {
            return {
                ...fotoDaGaleria,
                favorita: fotoDaGaleria.id === foto.id ? !foto.favorita : fotoDaGaleria.favorita
            }
        }))
    }
    return (
        <FundoGradiente>
            <EstilosGlobais/>
            <AppContainer>
                <Cabecalho/>
                <MainContainer>
                    <BarraLateral/>
                    <ConteudoGaleria>
                        <Banner
                            texto="A galeria mais completa de fotos do espaço!"
                            backgroundImage={bannerBackground}
                        />
                        <Galeria
                            aoFotoSelecionada={foto => setFotoSelecionada(foto)}
                            aoAlternarFavorito={aoAlternarFavorito}
                            fotos={fotosDaGaleria}
                        />
                    </ConteudoGaleria>
                </MainContainer>
            </AppContainer>
            <ModalZoom
                foto={fotoSelecionada}
                aoFechar={() => setFotoSelecionada(null)}
                aoAlternarFavorito={aoAlternarFavorito}
            />
        </FundoGradiente>
    )
}

export default App
