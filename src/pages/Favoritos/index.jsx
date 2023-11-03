import { useEffect, useState } from "react"
import "./favoritos.css"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"


const Favoritos = () => {

  const [filme, setFilmes] = useState([])

  useEffect(()=>{
    const minhaLista = localStorage.getItem("@primeflix")
    setFilmes(JSON.parse(minhaLista) || [])
    
  },[])

  const excluirFilme = (id) =>{
    let filtro = filme.filter((item)=>{
      return (item.id !== id)
    })

    setFilmes(filtro)
    localStorage.setItem("@primeflix", JSON.stringify(filtro))
    toast.success("Filme removido com sucesso!")
  }

  return (
    <div className="meus_filmes">
      <h1>Meus filmes</h1>

      {filme.length === 0 && <span>Voce nao possuir nenhum filme salvo</span>}

      <ul className="lista_salva">
        {filme.map((item)=> (
          <li key={item.id}>
            <span>{item.title}</span>
            <div>
              <Link to={`/filme/${item.id}`}>Ver detalhes</Link>
              <button className="btn_excluir" onClick={()=> excluirFilme(item.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favoritos
