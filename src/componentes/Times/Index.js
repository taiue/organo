import Colaborador from '../Colaborador/Index'
import './Time.css'

const Time = (props) => {
    return (
        <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderBottomColor: props.corPrimaria}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => <Colaborador 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}/>)}

            </div>
        </section>
    )
}

export default Time