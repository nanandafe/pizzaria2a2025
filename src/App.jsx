import {useState} from 'react'

function App(){

  const [nome, setNome] = useState('Fernanda');

  const Formulario = () => {
    return (
      <>
      <h4>Formulário de Inscrição</h4>
      <input className="Nome"
      name="Nome"
      placeholder="Digite seu nome..."
      onChange={(e)=>setNome(e.target.value)}
      type="text" />
      <button onClick={()=>{alert(nome)}}>
        CLIQUE AQUI
      </button>
      </>
    )
  }

  return (
    <div>
      <h3>Pizzaria 2A</h3>
      <Formulario />

    </div>
  )
}

export default App