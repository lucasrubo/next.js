import Head from "next/head";
import React, { useState, useEffect } from 'react';
function Header(texto){;
    return(<div className="menu-topo max-width">
        <Head>
            <meta charSet="utf-8"/>
            <meta name="robots" content="index, follow"/>    
            <meta name="description" content="tcc unip"/>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <title>{texto.children}</title>
        </Head>  
        <nav className="navbar">
            <div className="container-menu">
                <div className="logo">
                    <a href="../">
                        <img src="../logo.jpeg" alt="logo" /><b>WASH MANAGER</b>
                    </a>
                </div>
                <div className="pagina-right">
                    <div className="detalhe">
                        <img src="../detalhe-menu.jpg" alt="detalhe" />
                    </div>
                    <div className="usuario">
                        <label id="texto_detalhe">{texto.children}</label>
                    </div>
                </div>
            </div>
        </nav>
    </div>)
};

export default Header;