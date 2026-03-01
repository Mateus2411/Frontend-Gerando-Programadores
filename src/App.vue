<script setup>
import AppFooter from './components/Componentes Globais/AppFooter.vue'
import AppHeader from './components/Componentes Globais/AppHeader.vue'
import AppNotification from './components/Componentes Globais/AppNotification.vue'
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'
import { useThemeStore } from './stores/theme'

const authStore = useAuthStore()
const themeStore = useThemeStore()

onMounted(() => {
  authStore.loadAuth()
})
</script>


<template>
  <app-header v-if="!$route.meta.hideHeader" />
  <router-view />
  <app-footer v-if="!$route.meta.hideFooter" />
  <app-notification />
</template>


<style>
/* ========================================
   VARIÁVEIS DE TEMA
   ======================================== */
:root {
  --bg-primary: #f5f7fa;
  --bg-secondary: #e8ecf1;
  --bg-tertiary: #dce1e8;

  --text-primary: #2d3748;
  --text-secondary: #718096;
  --text-tertiary: #a0aec0;

  --border-color: #cbd5e0;
  --shadow-color: rgba(0, 0, 0, 0.08);

  --accent-primary: #1d9bf0;
  --accent-hover: #1a8cd8;

  --card-bg: #ffffff;
  --card-hover: #f7fafc;
  --card-border: rgba(0, 0, 0, 0.06);

  /* Sidebar - Modo Claro */
  --sidebar-bg: rgba(248, 250, 252, 0.98);
  --sidebar-border: rgba(0, 0, 0, 0.08);
  --sidebar-text: #334155;
  --sidebar-text-hover: #1e293b;
  --sidebar-hover: rgba(29, 155, 240, 0.06);
  --sidebar-active: rgba(29, 155, 240, 0.1);
  --sidebar-footer-bg: rgba(241, 245, 249, 0.8);
  --sidebar-button-bg: rgba(29, 155, 240, 0.06);
  --sidebar-button-border: rgba(29, 155, 240, 0.15);
  --sidebar-button-hover: rgba(29, 155, 240, 0.12);
}

[data-theme='dark'] {
  --bg-primary: #0a192f;
  --bg-secondary: #112240;
  --bg-tertiary: #1a2f4a;

  --text-primary: #e6eef8;
  --text-secondary: #cbd5e1;
  --text-tertiary: #8892b0;

  --border-color: rgba(255, 255, 255, 0.1);
  --shadow-color: rgba(0, 0, 0, 0.3);

  --accent-primary: #1d9bf0;
  --accent-hover: #1a8cd8;

  --card-bg: #112240;
  --card-hover: rgba(29, 155, 240, 0.1);
  --card-border: rgba(255, 255, 255, 0.1);

  /* Sidebar - Modo Escuro */
  --sidebar-bg: rgba(15, 35, 60, 0.95);
  --sidebar-border: rgba(255, 255, 255, 0.1);
  --sidebar-text: #cbd5e1;
  --sidebar-text-hover: #f1f5f9;
  --sidebar-hover: rgba(29, 155, 240, 0.15);
  --sidebar-active: rgba(29, 155, 240, 0.2);
  --sidebar-footer-bg: rgba(10, 25, 47, 0.4);
  --sidebar-button-bg: rgba(29, 155, 240, 0.1);
  --sidebar-button-border: rgba(29, 155, 240, 0.3);
  --sidebar-button-hover: rgba(29, 155, 240, 0.2);
}

/* ========================================
   RESET CSS
   ======================================== */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color 0.3s ease, color 0.3s ease;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
