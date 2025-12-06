import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:5000/api/auth',
})

// tokens validation
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

axios
  .get('http://localhost:5000/api/auth/coffee')
  .then((res) => console.log('Resposta 418:', res.data))
  .catch((err) => console.log(err))
  
export default api
