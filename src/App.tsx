import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';



function App() {

  const [bg, setBg] = useState('#FF0000');
  const [age, setAge] = useState(90);
  const [name, setName] = useState('Thauan');
  const [list, setList] = useState([
    'frase 1',
    'frase 2',
    'frase 3'
  ])
    
  const handle20 = () => {    
    setAge(20);
    setBg('#00FF00')    
  }

  const handle90 = () => {    
    setAge(90);
    setBg('#FF0000')    
  }


  

  
  return (
    <div style={{background: bg}}>
      <Header nome={name} idade={age} />
      {age === 90 &&
        <button onClick={handle20}>Mudar para 20 anos</button>
      }
      {age === 20 &&
      <button onClick={handle90}>Mudar para 90 anos</button>
      }
      

      {age>30 && 'Tá velho, hein?'}
      <hr/>
      <ul>
        {list.map((frase, index) => (
            <li key={index}>{frase}</li>
        ))}
      </ul>

      <Footer />

    </div>
  
  );
}

export default App;
