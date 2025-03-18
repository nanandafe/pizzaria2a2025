import {useState} from 'react'

function App(){

  const [nome, setNome] = useState('Fernanda');

  return (
    <div>
      <h3>Pizzaria 2A</h3>
      <input className="Nome"
      name="Nome"
      placeholder="Digite seu nome..."
      onChange={(e)=>setNome(e.target.value)}
      type="text" />
      <button onClick={()=>{alert(nome)}}>
        CLIQUE AQUI
      </button>
    </div>
  )
}

export default App