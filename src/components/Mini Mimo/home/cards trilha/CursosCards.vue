<script setup>
const cursos = [
    {
        nome: 'Python',
        descricao: 'Neque porro quisquam est qui dolorem ipsum quia',
        grau: 1,
        imagem: '/img Curso/python.png',
    },
    {
        nome: 'SQL',
        descricao: 'Neque porro quisquam est qui dolorem ipsum quia',
        grau: 1,
        imagem: '/img Curso/bdsql.png',
    },
    {
        nome: 'HTML',
        descricao: 'Neque porro quisquam est qui dolorem ipsum quia',
        grau: 1,
        imagem: '/img Curso/html5.png',
    },
    {
        nome: 'JavaScript',
        descricao: 'Neque porro quisquam est qui dolorem ipsum quia',
        grau: 1,
        imagem: '/img Curso/javascript.png',
    },
    {
        nome: 'Swift',
        descricao: 'Neque porro quisquam est qui dolorem ipsum quia',
        grau: 1,
        imagem: '/img Curso/swift.png',
    },
    {
        nome: 'CSS',
        descricao: 'Neque porro quisquam est qui dolorem ipsum quia',
        grau: 1,
        imagem: '/img Curso/css3.png',
    },
    {
        nome: 'TypeScript',
        descricao: 'Neque porro quisquam est qui dolorem ipsum quia',
        grau: 2,
        imagem: '/img Curso/typescript.png',
    },
    {
        nome: 'React',
        descricao: 'Neque porro quisquam est qui dolorem ipsum quia',
        grau: 2,
        imagem: '/img Curso/react.png',
    },
]
</script>

<template>
    <section class="container">
        <h2 class="titulo">Cursos:</h2>

        <div class="grid">
            <component
                v-for="curso in cursos"
                :key="curso.nome"
                :is="curso.nome === 'JavaScript' ? 'router-link' : 'div'"
                :to="curso.nome === 'JavaScript' ? '/trilhas/javascript' : null"
                class="card-link"
            >
                <div class="card">
                    <span class="curso-label">Curso</span>

                    <h3>{{ curso.nome }}</h3>
                    <p>{{ curso.descricao }}</p>

                    <div class="nivel">
                        <span
                            v-for="i in 3"
                            :key="i"
                            class="barra"
                            :class="{ ativa: i <= curso.grau }"
                        ></span>

                        <span style="margin-left: 1vw">
                            {{ curso.grau === 1 ? 'Fácil' : 'Médio' }}
                        </span>
                    </div>

                    <div class="badge">
                        <img :src="curso.imagem" :alt="curso.nome" />
                    </div>
                </div>
            </component>
        </div>
    </section>
</template>

<style scoped>
.container {
    padding: 1.5rem;
    background: var(--bg-primary);
    transition: background-color 0.3s ease;
}

.titulo {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--accent-primary);
    margin-bottom: 1.5rem;
    transition: color 0.3s ease;
}

.grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.25rem;
}

.card-link {
    text-decoration: none;
    color: inherit;
}

.card {
    position: relative;
    background: var(--card-bg);
    color: var(--text-primary);
    border-radius: 18px;
    padding: 1.5rem;
    min-height: 180px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 12px var(--shadow-color);
    border: 2px solid transparent;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 24px rgba(45, 28, 212, 0.15);
    border-color: var(--accent-primary);
}

.curso-label {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: rgba(102, 126, 234, 0.15);
    color: var(--accent-primary);
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    transition: background-color 0.3s ease, color 0.3s ease;
}

.card h3 {
    font-size: 1.6rem;
    margin: 1rem 0 0.5rem 0;
    color: var(--text-primary);
    font-weight: 700;
    transition: color 0.3s ease;
}

.card p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-right: 60px;
    line-height: 1.5;
    transition: color 0.3s ease;
}

.nivel {
    display: flex;
    gap: 6px;
    margin-top: 1.5rem;
    align-items: center;
}

.barra {
    width: 8px;
    height: 16px;
    background: var(--border-color);
    border-radius: 2px;
    transition: background-color 0.3s ease;
}

.barra.ativa {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.nivel span:last-child {
    margin-left: 0.5rem;
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    transition: color 0.3s ease;
}

.badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    width: 52px;
    height: 52px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
    padding: 0.5rem;
}

.badge img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0) invert(1);
    opacity: 0.95;
}

/* Responsivo para tablets */
@media (max-width: 768px) {
    .container {
        padding: 1.5rem;
    }

    .titulo {
        font-size: 2rem;
        margin-bottom: 1.5rem;
    }

    .grid {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 1.25rem;
    }

    .card {
        padding: 1.25rem;
        min-height: 160px;
    }

    .card h3 {
        font-size: 1.4rem;
    }

    .card p {
        font-size: 0.85rem;
    }

    .badge {
        width: 48px;
        height: 48px;
    }

    .badge img {
        width: 32px;
        height: 32px;
    }
}

/* Responsivo para mobile */
@media (max-width: 480px) {
    .container {
        padding: 1rem;
    }

    .titulo {
        font-size: 1.75rem;
        margin-bottom: 1.25rem;
    }

    .grid {
        grid-template-columns: 1fr;
        gap: 1rem;
    }

    .card {
        padding: 1.25rem;
        min-height: 140px;
    }

    .card h3 {
        font-size: 1.3rem;
        margin: 0.75rem 0 0.4rem 0;
    }

    .card p {
        font-size: 0.8rem;
        margin-right: 55px;
        line-height: 1.4;
    }

    .curso-label {
        font-size: 0.7rem;
        padding: 0.2rem 0.6rem;
    }

    .nivel {
        margin-top: 1rem;
        gap: 5px;
    }

    .barra {
        width: 7px;
        height: 14px;
    }

    .nivel span:last-child {
        font-size: 0.8rem;
        margin-left: 0.4rem;
    }

    .badge {
        width: 50px;
        height: 50px;
        top: 0.75rem;
        right: 0.75rem;
    }

    .badge img {
        width: 100%;
        height: 100%;
    }

    .card:hover {
        transform: translateY(-2px);
    }
}

/* Mobile muito pequeno */
@media (max-width: 360px) {
    .titulo {
        font-size: 1.5rem;
    }

    .card h3 {
        font-size: 1.2rem;
    }

    .card p {
        font-size: 0.75rem;
    }

    .badge {
        width: 46px;
        height: 46px;
    }
}
</style>


/* Modo escuro - logos pretos */
:root[data-theme='dark'] .badge img {
  filter: brightness(0) invert(0);
  opacity: 0.9;
}
