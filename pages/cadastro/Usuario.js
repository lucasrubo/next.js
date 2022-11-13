import Link from "next/link";
import { useRouter } from 'next/router'

import Header from "../../components/Header";
import Footer from "../../components/Footer";


function Usuario(){
    const router = useRouter();    
    return (
        <div className="div-inicial">       
            <Header>CADASTRO DE USUÁRIO</Header>  
            <div className="coteudo">
                <div className="box">
                    <form action="../" method="post">
                        <div className="conteudo-4">
                            <input type="text" name="nome" placeholder="NOME"/>
                        </div>
                        <div className="conteudo-3">
                            <input required type="text" name="sobrenome" placeholder="SOBRENOME" />
                        </div>
                        <div className="conteudo-3">
                            <input required type="text" name="cpf" placeholder="CPF" />
                        </div>

                        <div className="conteudo-10">
                            <input required type="text" name="endereco" placeholder="ENDEREÇO" />
                        </div>

                        <div className="conteudo-3">
                            <input type="text" name="numero" placeholder="NÚMERO"/>
                        </div>
                        <div className="conteudo-3">
                            <input required type="text" name="cep" placeholder="CEP" />
                        </div>
                        <div className="conteudo-4">
                            <input required type="text" name="complemento" placeholder="COMPLEMENTO" />
                        </div>

                        <div className="conteudo-4">
                            <input type="text" name="telefone" placeholder="TELEFONE"/>
                        </div>
                        <div className="conteudo-3">
                            <input required type="text" name="carro" placeholder="CARRO" />
                        </div>
                        <div className="conteudo-3">
                            <input required type="text" name="placa" placeholder="PLACA" />
                        </div>

                        <input type="submit" value="Cadastrar"/>
                        <Link className="voltar" href="#" onClick={() => router.back()}>
                                Voltar
                        </Link>
                    </form>
                </div>
            </div>
            <Footer/>    
        </div>
    )
}
export default Usuario;