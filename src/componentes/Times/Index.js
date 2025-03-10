import Colaborador from '../Colaborador'
import hexToRgba from 'hex-to-rgba';
import './Time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
    return (

        colaboradores.length > 0 && <section className='time' style={{ backgroundColor: hexToRgba(time.cor, '0.6') }}>
            <input onChange={evento => mudarCor(evento.target.value, time.id)} value={time.cor} type='color' className='input-color'/>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) =>
                    {
                        return <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={aoDeletar}/>
                    }
                )}
            </div>
        </section>

    )
}

export default Time