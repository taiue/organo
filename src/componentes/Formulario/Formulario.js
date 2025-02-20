import CampoTexto from '../CampoTexto/Index'
import './Formulario.css'

const Formulario = () => {
    return(
       <section className='formulario'>
            <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto label="Nome" placeholder="seu nome"/>
            <CampoTexto label="Cargo" placeholder="seu cargo"/>
            <CampoTexto label="Imagem" placeholder="o endereco da imagem"/>
            </form>
       </section>
    )
}

export default Formulario