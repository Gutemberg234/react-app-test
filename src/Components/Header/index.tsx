import { Container } from "./styles";
import { MdShoppingBasket } from 'react-icons/md';

import logoImg from '../../Assets/WeMovies.png'
import { Link } from "react-router-dom";

export function Header(props: any){
    return(
        <Container>
            <img src={logoImg} alt="Logo We Movies" title="WeMovies" />
            <Link to='/carrinho'>
                <div>
                    <p>Meu Carrinho</p>
                    <span>{props.qt} itens</span>
                </div>
                <MdShoppingBasket size={29}/>
            </Link>
        </Container>
    )
}