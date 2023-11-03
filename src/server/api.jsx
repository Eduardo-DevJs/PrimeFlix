// base: https://api.themoviedb.org/3/

// URL DA API : https://api.themoviedb.org/3/movie/now_playing?api_key=7357644b0137b583e7abe7700360cec2&language=pt-BR

import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
})

export default api;