import Link from "next/link";
import { useRouter } from 'next/router'

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'Nome',
        selector: row => row.nome,
        sortable: true,
    },
    {
        name: 'Sobrenome',
        selector: row => row.sobrenome,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        nome: 'Beetlejuice',
        sobrenome: '1988',
    },
    {
        id: 2,
        nome: 'Ghostbusters',
        sobrenome: '1984',
    },
]


function Usuario(){
    const router = useRouter();    
    return (
        <div className="div-inicial">       
            <Header>CONSULTA DE USUÁRIO</Header>  
            <div className="coteudo">
                <div style={{marginTop: 3 + 'rem'}}>                    
                    <div id="tabela" className="conteudo-10">                    
                        <DataTable
                            columns={columns}
                            data={data}
                        />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Usuario;