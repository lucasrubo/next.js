import Head from "next/head";
import React, { useState, useEffect } from 'react';
import Script from 'next/script'

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
                        <img src="../images/logo.png" alt="logo" /><b>WASH MANAGER</b>
                    </a>
                </div>
                <div className="pagina-right">
                    <div className="detalhe">
                        <img src="../images/detalhe-menu.png" alt="detalhe" />
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