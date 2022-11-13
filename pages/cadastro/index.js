import Link from "next/link";
import { useRouter } from 'next/router'

import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Cadastro(){
    const router = useRouter();    
    return (
        <div className="div-inicial">       
            <Header>Cadastro</Header>  
            <div className="coteudo">
                <div className="box">
                    <Link  className="botao-menu" href="/cadastro/Usuario">
                        USUÁRIO
                    </Link>
                    <Link  className="botao-menu" href="/cadastro/Produto">
                        PRODUTO
                    </Link>
                </div>
                <div className="box">
                    <Link  className="botao-menu" href="/cadastro/Fornecedor">
                        FORNECEDOR
                    </Link>
                    <Link  className="botao-menu" href="/cadastro/Colaborador">
                        COLABORADOR
                    </Link>
                </div>
                <br/>
                <div className="box">
                    <Link className="botao-sair" href="#" onClick={() => router.back()}>
                            Voltar
                    </Link>
                </div>
            </div>
            <Footer/>    
        </div>
    )
}
export default Cadastro;