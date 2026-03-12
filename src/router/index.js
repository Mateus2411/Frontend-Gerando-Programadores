import { createRouter, createWebHistory } from 'vue-router'
import api from '@/axios'
import { useNotificationStore } from '@/stores/notification'

// #region Rotas

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.path.includes('trilhas')) {
      return { top: 20, behavior: 'smooth' }
    }

    return { top: 0, behavior: 'smooth' }
  },
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
      meta: { requiresAuth: true },
    },
    {
      path: '/trilhas',
      name: 'trilhas',
      component: () => import('@/views/Trilhas/HomeTrilhas.vue'),
      children: [
        {
          path: 'javascript/:topic?/:file?',
          name: 'javascript',
          component: () => import('@/views/Trilhas/Cursos/JavaScript/HomeJS.vue'),
          meta: {
            // hideHeader: true,
            // hideFooter: true,
            // requiresAuth: true
          },
        },
      ],
      meta: {
        // hideHeader: true,
        // hideFooter: true,
        // requiresAuth: true
      },
    },
    {
      path: '/devs',
      name: 'Developers',
      component: () => import('@/views/Devs/DevsApp.vue'),
      meta: {
        // hideHeader: true
        // hideFooter: true,
        requiresAuth: true,
      },
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('@/views/Perfil/AppPerfil.vue'),
      meta: {
        // hideHeader: true,
        // hideFooter: true,
        requiresAuth: true,
      },
    },
    {
      path: '/perfil/editar',
      name: 'editarPerfil',
      component: () => import('@/views/Perfil/editPerfil.vue'),
      meta: {
        // hideHeader: true,
        // hideFooter: true,
        requiresAuth: true,
      },
    },
  ],

})
// #endregion

// #region Bloqueio de Rotas

router.beforeEach(async (to, from, next) => {
  if (!to.meta.requiresAuth) {
    return next()
  }

  try {
    await api.get('/auth/me')
    return next()
  } catch {
    const notificationStore = useNotificationStore()
    notificationStore.warning('Faça login/cadastro primeiramente')
    return next('/cadastrar')
  }
})

// #endregion

export default router
