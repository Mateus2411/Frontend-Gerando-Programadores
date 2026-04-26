<script setup>
defineProps({
  title: {
    type: String,
    default: 'Exemplo',
  },
})
</script>

<template>
  <div class="example">
    <h4 v-if="title">{{ title }}</h4>
    <slot />
  </div>
</template>

<style scoped>
.example {
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 12px;
  margin-top: 1rem;
}

.example h4 {
  color: var(--accent-primary);
  margin-bottom: 1rem;
}

.example pre {
  background: var(--bg-tertiary);
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}

.example code {
  color: var(--text-primary);
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}
</style>
