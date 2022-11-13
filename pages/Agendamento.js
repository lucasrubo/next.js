import Link from "next/link";
import { useRouter } from 'next/router'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import React, { useState } from 'react';

import Header from "../components/Header";
import Footer from "../components/Footer";


function Usuario(){
    const router = useRouter();    
    const [value, onChange] = useState(new Date());
    return (
        <div className="div-inicial">       
            <Header>CALENDÁRIO AGENDAMENTO</Header>  
            <div className="coteudo">
                <div style={{marginTop: 3 + 'rem'}}>
                    <div id="calendario" className="left conteudo-7">
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                    <form action="" method="get" className="right conteudo-3">
                        <div className="conteudo-10">
                            <label>Seleciona o Mês:</label>
                            <select name="mes">
                                <option>janeiro</option>
                                <option>fevereiro</option>
                                <option>março</option>
                                <option>abril</option>
                                <option>maio</option>
                                <option>junho</option>
                                <option>julho</option>
                                <option>agosto</option>
                                <option>setembro</option>
                                <option>outubro</option>
                                <option>novembro</option>
                                <option>dezembro</option>
                            </select>
                        </div>
                        <div className="conteudo-10">
                            <label>Seleciona o Ano:</label>
                            <select name="ano">
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                            </select>
                        </div>

                        <input type="submit" value="Filtrar"/>
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