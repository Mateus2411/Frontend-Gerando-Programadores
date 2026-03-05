import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', () => {
  const notifications = ref([])
  let nextId = 0

  function show(message, type = 'success', duration = 1500) {
    const id = nextId++

    notifications.value.push({
      id,
      message,
      type, // 'success', 'error', 'info', 'warning'
      duration,
    })

    // Remove automaticamente após a duração
    if (duration > 0) {
      setTimeout(() => {
        remove(id)
      }, duration)
    }
  }

  function remove(id) {
    const index = notifications.value.findIndex((n) => n.id === id)
    if (index > -1) {
      notifications.value.splice(index, 1)
    }
  }

  function success(message, duration = 3000) {
    show(message, 'success', duration)
  }

  function error(message, duration = 4000) {
    show(message, 'error', duration)
  }

  function info(message, duration = 3000) {
    show(message, 'info', duration)
  }

  function warning(message, duration = 3000) {
    show(message, 'warning', duration)
  }

  return {
    notifications,
    show,
    remove,
    success,
    error,
    info,
    warning,
  }
})
