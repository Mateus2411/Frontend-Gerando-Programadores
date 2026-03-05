<template>
  <Teleport to="body">
    <div class="notification-container">
      <TransitionGroup name="notification">
        <div
          v-for="notification in notificationStore.notifications"
          :key="notification.id"
          class="notification"
          :class="notification.type"
          @click="notificationStore.remove(notification.id)"
        >
          <div class="notification-icon">
            <svg
              v-if="notification.type === 'success'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <svg
              v-else-if="notification.type === 'error'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            <svg
              v-else-if="notification.type === 'warning'"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
              ></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </div>
          <p class="notification-message">{{ notification.message }}</p>
          <button
            class="notification-close"
            @click.stop="notificationStore.remove(notification.id)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<script setup>
import { useNotificationStore } from '@/stores/notification'

const notificationStore = useNotificationStore()
</script>

<style scoped>
.notification-container {
  position: fixed;
  top: 7rem;
  right: 1.5rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  pointer-events: none;
}

.notification {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  min-width: 300px;
  max-width: 400px;
  padding: 1rem 1.25rem;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: 0 8px 24px var(--shadow-color);
  border-left: 4px solid;
  border: 1px solid var(--border-color);
  pointer-events: auto;
  cursor: pointer;
  transition: all 0.3s ease;
}

.notification:hover {
  transform: translateX(-5px);
  box-shadow: 0 12px 32px var(--shadow-color);
}

.notification-icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.notification-message {
  flex: 1;
  margin: 0;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-primary);
  line-height: 1.4;
}

.notification-close {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  opacity: 0.6;
}

.notification-close:hover {
  opacity: 1;
  background: var(--sidebar-hover);
}

/* Success */
.notification.success {
  border-left-color: #10b981;
}

.notification.success .notification-icon {
  background: rgba(16, 185, 129, 0.1);
  color: #10b981;
}

/* Error */
.notification.error {
  border-left-color: #ef4444;
}

.notification.error .notification-icon {
  background: rgba(239, 68, 68, 0.1);
  color: #ef4444;
}

/* Warning */
.notification.warning {
  border-left-color: #f59e0b;
}

.notification.warning .notification-icon {
  background: rgba(245, 158, 11, 0.1);
  color: #f59e0b;
}

/* Info */
.notification.info {
  border-left-color: #3b82f6;
}

.notification.info .notification-icon {
  background: rgba(59, 130, 246, 0.1);
  color: #3b82f6;
}

/* Animações */
.notification-enter-active {
  animation: slideIn 0.3s ease;
}

.notification-leave-active {
  animation: slideOut 0.3s ease;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}

/* Modo Escuro */
:root[data-theme='dark'] .notification {
  background: #112240;
  border-color: rgba(255, 255, 255, 0.15);
}

/* Responsivo */
@media (max-width: 768px) {
  .notification-container {
    top: 7rem;
    right: 1rem;
    left: 1rem;
  }

  .notification {
    min-width: auto;
    max-width: none;
  }
}

@media (max-width: 480px) {
  .notification {
    padding: 0.875rem 1rem;
  }

  .notification-message {
    font-size: 0.875rem;
  }
}
</style>
