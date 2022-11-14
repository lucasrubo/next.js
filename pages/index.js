import Link from "next/link";
import { useRouter } from 'next/router'

import Header from "../components/Header";
import Footer from "../components/Footer";


function HomePage(){
    return (
        <div className="div-inicial">        
            <Header>Admin</Header>  
            <div className="coteudo">
                <h1 className="texto-inicio">BEM VINDO!</h1>
                <div className="box">
                    <Link  className="botao-menu" href="/cadastro">
                            Cadastrar
                    </Link>
                    <Link  className="botao-menu" href="/consultar">
                            Consultar
                    </Link>
                    <Link  className="botao-menu" href="/Agendamento">
                            Agendamento
                    </Link>
                    <Link  className="botao-sair" href="/Login">
                            Sair
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage;