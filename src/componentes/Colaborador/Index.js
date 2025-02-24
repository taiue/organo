import './Colaborador.css'
import { IoIosCloseCircle } from "react-icons/io";

const Colaborador = (props) => {
    return (
        <div className='colaborador'>
            <IoIosCloseCircle size={25} className='deletar' onClick={props.aoDeletar}/>
            <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
                <img src={props.imagem} alt={props.nome}/>  
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador