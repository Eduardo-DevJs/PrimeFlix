import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../server/api';
import "./filme.css"
import { toast } from 'react-toastify';


const Filme = () => {
  const { id } = useParams();
  const navigate = useNavigate()

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: '7357644b0137b583e7abe7700360cec2',
            language: 'pt-BR',
          },
        })
        .then((response) => {
          setFilme(response.data)
          setLoading(false)
        })
        .catch((err) => {
          console.log('FILME NAO ENCONTRADO: ' + err);
          navigate("/", { replace: true })
          return;
        });
    }

    loadFilme();

    return () => {
      console.log("COMPONENTE DESMONTADO")
    }
  }, [navigate, id]);

  const salvarFilme = () =>{ 
    const minhaLista = localStorage.getItem("@primeflix")

    let filmesSalvos = JSON.parse(minhaLista) || [];

    const hasFilme = filmesSalvos.some((filmesSalvos) => filmesSalvos.id === filme.id)

    if(hasFilme){
      toast.warn("Esse filme ja esta na sua lista")
      return;
    }

    filmesSalvos.push(filme)
    localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos))
    toast.success("Filme salvo com sucesso!")

  }

  if(loading){
    return (
      <div className='filmte_info'>
        <h1>Carregando detalhes...</h1>
      </div>
    )
  }

  return (
    <div className='filme_info'>
      <h1>{filme.title}</h1>
     <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
     <h3>Sinopse</h3>
     <span>{filme.overview}</span>
     <strong>Avaliação: {filme.vote_average} / 10</strong>

     <div className='area_buttons'>
      <button onClick={salvarFilme}>Salvar</button>
      <button>
        <a target='_blank' rel='external' href={`https:youtube.com/results?search_query=${filme.title} Trailer`}>
          trailler
        </a>
      </button>
     </div>

    </div>
  );
};

export default Filme;
