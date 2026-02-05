import { ref } from 'vue'
import api from '@/axios'

const logado = ref(false)

async function loadAuth() {
  try {
    const res = await api.get('/auth/me')
    logado.value = true
    return res
  } catch (err) {
    logado.value = false
    throw err
  }
}

export function useAuth() {
  return { logado, loadAuth }
}
