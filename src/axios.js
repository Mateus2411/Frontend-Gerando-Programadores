import axios from 'axios'

const api = axios.create({
  baseURL: 'https://backend-gerando-programadores-1.onrender.com/api',
  withCredentials: true,
})

// const api = axios.create({
//   baseURL: 'http://localhost:5000/api',
//   withCredentials: true,
// })

// #region Erro Coffee

axios
  .get('https://backend-gerando-programadores-1.onrender.com/api/coffee')
  .then((res) => console.log('Resposta 418:', res.data))
  .catch((err) => console.log(err))
// #endregion


export default api
