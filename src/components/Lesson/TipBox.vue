<script setup>
defineProps({
  title: {
    type: String,
    default: 'Dica',
  },
})
</script>

<template>
  <div class="tip-box">
    <h4 v-if="title">{{ title }}</h4>
    <slot />
  </div>
</template>

<style scoped>
.tip-box {
  background: rgba(76, 175, 80, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #4caf50;
  margin-top: 1rem;
}

.tip-box h4 {
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.tip-box ul {
  list-style: none;
  padding: 0;
}

.tip-box li {
  color: var(--text-primary);
  padding: 0.5rem 0;
  font-size: 1rem;
}

.tip-box li::before {
  content: '✓ ';
  color: #4caf50;
  font-weight: bold;
}
</style>
