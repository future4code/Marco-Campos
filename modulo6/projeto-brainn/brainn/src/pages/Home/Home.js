import { Ellipse, NumberContainer, RightContainer, ScreenContainer, Sidebar } from "./Styled"
import axios from 'axios'

    const BASE_URL = "https://brainn-api-loterias.herokuapp.com/api/v1"


const Home = () => {

    const getLottery = () => {
        const url = "/loterias"

        axios.get(BASE_URL+url)
        .then((res)=>{
            console.log("Loterias",res.data)
        })
        .catch((res)=>{
            console.log(res)
        })
    }
    getLottery()

    const getLotteryContest = () =>{
        const url = "/loterias-concursos"

        axios.get(BASE_URL+url)
        .then((res)=>{
            console.log("Concursos", res.data)
        })
        .catch((res)=>{
            console.log(res)
        })
    }
    getLotteryContest()

    const getContest = (id) => {
        const url = `/concursos/${id}`

        axios.get(BASE_URL+url)
        .then((res)=>{
            console.log("Concursos por id", res.data)
        })
        .catch((res)=>{
            console.log(res)
        })
    }
    getContest("2359")
    
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