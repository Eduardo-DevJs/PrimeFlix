import axios from "axios";
import { useEffect, useState } from "react";
import api from "../../server/api"
import { Link } from "react-router-dom";
import "./home.css"

// https://api.themoviedb.org/3/movie/now_playing?api_key=7357644b0137b583e7abe7700360cec2&language=pt-BR

const Home = ()=> {
  const [filmes, setFilmes]= useState([])
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function loadFilmes(){
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "7357644b0137b583e7abe7700360cec2",
          language: "pt-BR",
          page: 1
        }
      })

      //console.log(response.data.results.slice(0,10))
      setFilmes(response.data.results.slice(0,10))

      setLoading(false)
    }

    loadFilmes();

  },[])

  if(loading){
    return (
      <div className="loading">
        <h2>carregando filmes...</h2>
      </div>
    )
  }

  return (
    <div>
      <div className="container">
        <div className="lista_filmes">
          {filmes.map((filme) => (
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home;
