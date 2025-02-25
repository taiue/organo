import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario/Formulario';
import Time from './componentes/Times/Index';

function App() {

  const [times, setTimes] = useState( [
    {
      nome: 'Programacao',
      cor: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      cor: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      cor: '#F0F8E2'
    },
    {
      nome: 'Devops',
      cor: '#FDE7E8'
    },
    {
      nome: 'UX e design',
      cor: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      cor: '#FFF5D9'
    },
    {
      nome: 'Inovacao e Gestao',
      cor: '#FFEEDF'
    },
  ])
  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  function deletarColaborador() {

  }

  function mudarCorDoTime(cor, nome) {
    setTimes(times.map(time => {
      if(time.nome === nome){
        time.cor = cor;
      }
      return time;
    }));
  }

   
  return (
    <div className="App">
      <Banner/>
      <Formulario nomesDosTimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      {times.map(time => 
      <Time 
        mudarCor={mudarCorDoTime}
        key={time.nome} 
        time={time}
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        aoDeletar={deletarColaborador}  
      />)}
    
    </div>
  );
}

export default App;
