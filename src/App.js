import logo from './logo.svg';
import './App.css';

const TitoloCorso = ({nome,anno}) => {
  console.log('Nome: ',nome);
  console.log('Anno: ',anno);
  return(
    <>
    <h1>{`Corso ${nome} ${anno}`}</h1>
    </>
  )
}

function App() {

    const corsi = [{
      'id': 1,
      'nome': 'React',
      'anno': '2023',
    },
    {
      'id': 2,
      'nome': 'Angular',
      'anno': '2020',
    },
    {
      'id': 3,
      'nome': 'JavaScript',
      'anno': '2021',
    },
    {
      'id': 4,
      'nome': 'Vue',
      'anno': '2022',
    },
  ]

  return (
    <div className="App">
      {
        corsi.map((corso) => {
          return <TitoloCorso nome={corso.nome} anno={corso.anno}/>
        })
      }
    
    </div>
  );
}

export default App;
