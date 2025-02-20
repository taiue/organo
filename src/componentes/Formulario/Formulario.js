import Botao from '../Botao/Index';
import CampoTexto from '../CampoTexto/Index'
import ListaSuspensa from '../ListaSuspensa/Index'
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Programacao',
        'Front-End',
        'Data Science',
        'Devops',
        'UX design',
        'Mobile',
        'Inovacao e Gestao'
    ];

    const AoSalvar = (evento) => {
        evento.preventDefault()
        console.log("Form foi submetido");
    }

    return(
       <section className='formulario'>
            <form onSubmit={AoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto obrigatorio={true} label="Nome" placeholder="seu nome"/>
            <CampoTexto obrigatorio={true} label="Cargo" placeholder="seu cargo"/>
            <CampoTexto label="Imagem" placeholder="o endereco da imagem"/>
            <ListaSuspensa obrigatorio={true} label="Time" itens={times}></ListaSuspensa>
            <Botao>
                Criar card
            </Botao>
            </form>
       </section>
    )
}

export default Formulario