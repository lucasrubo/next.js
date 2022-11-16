import Link from "next/link";
import { useRouter } from 'next/router'

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import DataTable from '../../components/DataTable';


const columns = [
    {
        name: 'NOME',
        selector: row => row.nome,
        sortable: true,
    },
    {
        name: 'SOBRENOME',
        selector: row => row.sobrenome,
        sortable: true,
    },
    {
        name: 'CPF',
        selector: row => row.cpf,
        sortable: true,
    },
    {
        name: 'ENDEREÇO',
        selector: row => row.endereco,
        sortable: true,
    }
];

const data = [
    {
        id: 1,
        nome: 'Beetlejuice',
        sobrenome: '1988',
        cpf: '000.000.000-00',
        endereco : 'av. Teste'
    },
    {
        id: 2,
        nome: 'Ghostbusters',
        sobrenome: '1984',
        cpf: '000.000.000-00',
        endereco : 'av. Teste 2'
    },
    {
        id: 3,
        nome: 'Beetlejuice',
        sobrenome: '1988',
        cpf: '000.000.000-00',
        endereco : 'av. Teste'
    },
    {
        id: 4,
        nome: 'Ghostbusters',
        sobrenome: '1984',
        cpf: '000.000.000-00',
        endereco : 'av. Teste 2'
    },
    {
        id: 5,
        nome: 'Beetlejuice',
        sobrenome: '1988',
        cpf: '000.000.000-00',
        endereco : 'av. Teste'
    },
    {
        id: 6,
        nome: 'Ghostbusters',
        sobrenome: '1984',
        cpf: '000.000.000-00',
        endereco : 'av. Teste 2'
    },
    {
        id: 7,
        nome: 'Ghostbusters',
        sobrenome: '1984',
        cpf: '000.000.000-00',
        endereco : 'av. Teste 2'
    },
    {
        id: 8,
        nome: 'Ghostbusters',
        sobrenome: '1984',
        cpf: '000.000.000-00',
        endereco : 'av. Teste 2'
    },
    {
        id: 9,
        nome: 'Ghostbusters',
        sobrenome: '1984',
        cpf: '000.000.000-00',
        endereco : 'av. Teste 2'
    },
    {
        id: 10,
        nome: 'Ghostbusters',
        sobrenome: '1984',
        cpf: '000.000.000-00',
        endereco : 'av. Teste 2'
    },
    {
        id: 11,
        nome: 'Ghostbusters',
        sobrenome: '1984',
        cpf: '000.000.000-00',
        endereco : 'av. Teste 2'
    },
]

const ExpandedComponent = ({ data }) => <pre>resto das informações</pre>;

function Usuario(){
    const router = useRouter();    
    return (
        <div className="div-inicial">       
            <Header>CONSULTA DE USUÁRIO</Header>  
            <div className="coteudo">
                <div style={{marginTop: 3 + 'rem',marginBottom: 3 + 'rem'}}>           
                    <form action="" method="get" className="right conteudo-3">
                        <div className="conteudo-10">
                            <label>Pesquisar por:</label>
                            <select name="filtro">
                                <option>NOME</option>
                                <option>SOBRENOME</option>
                                <option>CPF</option>
                            </select>
                        </div>
                        <input type="submit" value="Filtrar"/>
                    </form>         
                    <div id="tabela" className="conteudo-10">      
                        <DataTable columns={columns} data={data} expandableRowsComponent={ExpandedComponent}/> 
                    </div>
                    <Link className="voltar" href="#" onClick={() => router.back({ shallow: true })}>
                            Voltar
                    </Link>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default Usuario;