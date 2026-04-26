<script setup>
defineProps({
  backLabel: {
    type: String,
    default: '← Voltar',
  },
  nextLabel: {
    type: String,
    default: 'Próximo →',
  },
  nextRoute: {
    type: String,
    default: null,
  },
  showBack: {
    type: Boolean,
    default: true,
  },
  showNext: {
    type: Boolean,
    default: true,
  },
})

const emit = defineEmits(['back', 'next'])

function handleBack() {
  emit('back')
}

function handleNext() {
  emit('next')
}
</script>

<template>
  <div class="nav-buttons">
    <button v-if="showBack" @click="handleBack" class="btn-back">
      {{ backLabel }}
    </button>
    <span v-else></span>
    <router-link
      v-if="showNext && nextRoute"
      :to="nextRoute"
      class="btn-next primary"
    >
      {{ nextLabel }}
    </router-link>
    <button
      v-else-if="showNext"
      @click="handleNext"
      class="btn-next primary"
    >
      {{ nextLabel }}
    </button>
  </div>
</template>

<style scoped>
.nav-buttons {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 2px solid var(--border-color);
}

.nav-buttons span {
  flex: 1;
}

button {
  padding: 0.875rem 1.75rem;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid var(--border-color);
  background: var(--card-bg);
  color: var(--text-primary);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--shadow-color);
}

button.primary {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
  border-color: transparent;
}

button.primary:hover {
  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.3);
}

@media (max-width: 768px) {
  .nav-buttons {
    flex-direction: column;
  }
}
</style>
