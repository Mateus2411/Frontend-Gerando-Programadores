import { createRouter, createWebHistory } from 'vue-router'
import api from '@/axios'

// #region Rotas

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home/HomeView.vue'),
    },
    {
      path: '/cadastrar',
      name: 'cadastrar',
      component: () => import('@/views/Cadastro & Loguin/CadastroLogin.vue'),
      meta: { hideFooter: true },
    },
    {
      path: '/ias',
      name: 'IAs',
      component: () => import('@/views/IAs/IAs.vue'),
      // meta: { requiresAuth: true }
    },
    {
      path: '/testeCadastro',
      name: 'testeCadastro',
      component: () => import('@/views/Cadastro & Loguin/TesteCadastro.vue'),
      meta: {
        hideHeader: true,
        hideFooter: true,
        // requiresAuth: true
      },
    },
    {
      path: '/trilhas',
      name: 'trilhas',
      component: () => import('@/views/Trilhas/HomeTrilhas.vue'),
      children: [
        {
          path: 'javascript/:topic/:file',
          name: 'javascript-lesson',
          component: () => import('@/views/Trilhas/Cursos/JavaScript/Lesson.vue'),
          meta: {
            hideHeader: true,
            hideFooter: true,
            // requiresAuth: true
          },
        },
      ],
      meta: {
        hideHeader: true,
        hideFooter: true,
        // requiresAuth: true
      },
    },
  ],
})
// #endregion

// #region Bloqueio de Rotas

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')

  if (to.meta.requiresAuth && !token) {
    alert('faça login/cadastro primeiramente')
    return next('/cadastrar')
  }

  if (token) {
    try {
      await api.get('/validate')
      return next()
    } catch {
      localStorage.removeItem('token')
      return next('/cadastrar')
    }
  }

  next()
})
// #endregion

export default router
