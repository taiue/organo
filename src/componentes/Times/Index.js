import Colaborador from '../Colaborador/Index'
import './Time.css'

const Time = (props) => {
    return (
        (props.colaboradores.length > 0) ? <section className='time' style={{backgroundColor: props.corSecundaria}}>
            <input onChange={evento => props.mudarCor(evento.target.value, props.nome)} type='color' className='input-color'></input>
            <h3 style={{borderBottomColor: props.cor}}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => {

                  return  <Colaborador
                    corDeFundo={props.cor}
                    key={colaborador.nome} 
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo} 
                    imagem={colaborador.imagem}
                    aoDeletar={aoDeletar}/>
                } 
            )}
                
            </div>
        </section>
        : ''
    )
}

export default Time