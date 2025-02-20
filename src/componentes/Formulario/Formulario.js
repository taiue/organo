import { useState } from 'react';
import Botao from '../Botao/Index';
import CampoTexto from '../CampoTexto/Index'
import ListaSuspensa from '../ListaSuspensa/Index'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const AoSalvar = (evento ) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return(
       <section className='formulario'>
            <form onSubmit={AoSalvar}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
                obrigatorio={true}
                label="Nome" 
                placeholder="seu nome"
                valor={nome}
                aoAlterado={valor => setNome(valor)}
            />
            <CampoTexto 
                obrigatorio={true} 
                label="Cargo" 
                placeholder="seu cargo"
                valor={cargo}
                aoAlterado={valor => setCargo(valor)}
            />
            <CampoTexto 
                label="Imagem" 
                placeholder="o endereco da imagem"
                valor={imagem}
                aoAlterado={valor => setImagem(valor)}
                />

            <ListaSuspensa 
                obrigatorio={true} 
                label="Time" 
                itens={props.nomesDosTimes}
                valor={time}
                aoAlterado={valor => setTime(valor)}/>

            <Botao>
                Criar card
            </Botao>
            </form>
       </section>
    )
}

export default Formulario