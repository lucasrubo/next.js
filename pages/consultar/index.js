import Link from "next/link";
import { useRouter } from 'next/router'

import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Consultar(){
    const router = useRouter();    
    return (
        <div className="div-inicial">       
            <Header>Consultar</Header>  
            <div className="coteudo">
                <div className="box">
                    <Link  className="botao-menu" href="/consultar/Usuario">
                        USUÁRIO
                    </Link>
                    <Link  className="botao-menu" href="/consultar/Produto">
                        PRODUTO
                    </Link>
                </div>
                <div className="box">
                    <Link  className="botao-menu" href="/consultar/Fornecedor">
                        FORNECEDOR
                    </Link>
                    <Link  className="botao-menu" href="/consultar/Colaborador">
                        COLABORADOR
                    </Link>
                </div>
                <br/>
                <div className="box">
                    <Link className="botao-sair" href="#" onClick={() => router.back({ shallow: true })}>
                            Voltar
                    </Link>
                </div>
            </div>
            <Footer/>    
        </div>
    )
}
export default Consultar;