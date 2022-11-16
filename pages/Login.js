import Head from "next/head";

function Login(){
    return (
        <div className="div-inicial fundo">         
            <div className="menu-topo max-width">
                <Head>
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="index, follow"/>    
                    <meta name="description" content="tcc unip"/>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <title>Login</title>
                </Head>  
                <nav className="navbar">
                    <div className="container-menu">
                        <div className="logo">
                            <img src="../images/logo.png" alt="logo" /><b>WASH MANAGER</b>
                        </div>
                        <div className="pagina-right">
                            <div className="detalhe">
                                <img src="../images/detalhe-menu.png" alt="detalhe" />
                            </div>
                            <div className="usuario">
                                <label id="texto_detalhe">Login</label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="coteudo">
                <div className="box">
                    <div className="foto-usuario">
                        <img src="images/usuario.jpg" alt="footer" />
                    </div>
                    <div className="login">
                        <form action="../" method="post">
                            <input required type="text" name="login" placeholder="LOGIN"/>
                            <input required type="password" name="senha" placeholder="SENHA" />
                            <a href="#">Esqueceu a Senha?</a>
                            <input style={{marginRight: 0 + 'px'}} type="submit" value="INICIAR SESSÃO"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;