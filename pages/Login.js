import Head from "next/head";
import Link from "next/link";

import Header from "../components/Header";

function Login(){
    return (
        <div className="div-inicial">
            <Head>
                <meta charSet="utf-8"/>
                <meta name="robots" content="index, follow"/>    
                <meta name="description" content="tcc unip"/>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <title>Login</title>
            </Head>          
            <Header>Usuário</Header>
            <div className="coteudo">
                <div className="box">
                    <div className="foto-usuario">
                        <img src="usuario.jpg" alt="footer" />
                    </div>
                    <div className="login">
                        <form action="../" method="post">
                            <input required type="text" name="login" placeholder="LOGIN"/>
                            <input required type="password" name="senha" placeholder="SENHA" />
                            <a href="#">Esqueceu a Senha?</a>
                            <input type="submit" value="INICIAR SESSÃO"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;