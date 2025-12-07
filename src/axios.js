import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
})

//#region Token Validation

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
    console.log(
      'Axios interceptor: Adicionando Authorization header:',
      config.headers.Authorization.substring(0, 50) + '...',
    )
  } else {
    console.log('Axios interceptor: Nenhum token encontrado, header não adicionado')
  }
  return config
})

//#endregion
// #region Erro Coffee

axios
  .get('http://localhost:5000/api/auth/coffee')
  .then((res) => console.log('Resposta 418:', res.data))
  .catch((err) => console.log(err))

// #endregion
export default api
