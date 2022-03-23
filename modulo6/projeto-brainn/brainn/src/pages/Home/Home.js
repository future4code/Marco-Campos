import { Ellipse, NumberContainer, RightContainer, ScreenContainer, Sidebar } from "./Styled"




const Home = () => {
    return (
    
        <ScreenContainer>
            <Sidebar>
                <select>
                    <option>mega-sena</option>
                    <option>quina</option>
                    <option>lotofacil</option>
                    <option>lotomania</option>
                    <option>timemania</option>
                    <option>dia de sorte</option>
                </select>
                <div>MEGA SENA</div>
                <div> *CONCURSO*</div>
            </Sidebar>

            <RightContainer>
                <div></div>
                <NumberContainer>
                    <Ellipse>2</Ellipse>
                    <Ellipse>3</Ellipse>
                    <Ellipse>6</Ellipse>
                    <Ellipse>3</Ellipse>
                    <Ellipse>34</Ellipse>
                    <Ellipse>3</Ellipse>
                </NumberContainer>
                <div>
                Este sorteio é meramente ilustrativo
                 e não possui nenhuma ligação com a CAIXA.
                </div>
            </RightContainer>
        </ScreenContainer>

    )
}
export default Home