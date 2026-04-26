<script setup>
defineProps({
  title: {
    type: String,
    default: 'Informação',
  },
})
</script>

<template>
  <div class="info-box">
    <h3 v-if="title">{{ title }}</h3>
    <slot />
  </div>
</template>

<style scoped>
.info-box {
  background: rgba(102, 126, 234, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #667eea;
  margin-top: 1rem;
}

.info-box h3 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}
</style>
