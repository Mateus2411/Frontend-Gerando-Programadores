# Endpoints do Backend Necessários

Este documento lista os endpoints que o frontend espera do backend.

## Autenticação

### POST `/api/register`

Cadastra um novo usuário.

**Body:**

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

**Resposta de Sucesso (201):**

```json
{
  "msg": "Usuário cadastrado com sucesso",
  "user": {
    "id": 1,
    "username": "Nome do Usuário",
    "email": "email@exemplo.com"
  }
}
```

---

### POST `/api/login`

Faz login do usuário.

**Body:**

```json
{
  "email": "string",
  "password": "string"
}
```

**Resposta de Sucesso (200):**

```json
{
  "logado": true,
  "user": {
    "id": 1,
    "username": "Nome do Usuário",
    "email": "email@exemplo.com",
    "bio": "Biografia do usuário",
    "biography": "Biografia do usuário",
    "created_at": "2024-01-01T00:00:00.000Z",
    "cursos": []
  }
}
```

**OU formato alternativo:**

```json
{
  "id": 1,
  "username": "Nome do Usuário",
  "email": "email@exemplo.com",
  "bio": "Biografia do usuário",
  "created_at": "2024-01-01T00:00:00.000Z",
  "cursos": []
}
```

---

### GET `/api/auth/me` (OPCIONAL)

Retorna os dados do usuário autenticado.

**Headers:**

- Cookie com sessão do usuário

**Resposta de Sucesso (200):**

```json
{
  "logado": true,
  "user": {
    "id": 1,
    "username": "Nome do Usuário",
    "email": "email@exemplo.com",
    "bio": "Biografia do usuário",
    "biography": "Biografia do usuário",
    "created_at": "2024-01-01T00:00:00.000Z",
    "cursos": []
  }
}
```

**Resposta de Erro (401):**

```json
{
  "msg": "Não autenticado"
}
```

**NOTA:** Se este endpoint não existir (404), o frontend usará os dados salvos do login.

---

### POST `/api/auth/logout`

Faz logout do usuário.

**Headers:**

- Cookie com sessão do usuário

**Resposta de Sucesso (200):**

```json
{
  "msg": "Logout realizado com sucesso"
}
```

---

### PUT `/api/auth/username`

Atualiza o nome de usuário.

**Headers:**

- Cookie com sessão do usuário

**Body:**

```json
{
  "username": "string"
}
```

**Resposta de Sucesso (200):**

```json
{
  "msg": "Nome atualizado com sucesso",
  "user": {
    "id": 1,
    "username": "Nome Atualizado",
    "email": "email@exemplo.com",
    "bio": "Biografia",
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**OU formato alternativo:**

```json
{
  "msg": "Nome atualizado com sucesso",
  "username": "Nome Atualizado"
}
```

---

### PUT `/api/auth/bio`

Atualiza a biografia do usuário.

**Headers:**

- Cookie com sessão do usuário

**Body:**

```json
{
  "bio": "string"
}
```

**Resposta de Sucesso (200):**

```json
{
  "msg": "Biografia atualizada com sucesso",
  "user": {
    "id": 1,
    "username": "Nome do Usuário",
    "email": "email@exemplo.com",
    "bio": "Nova biografia",
    "created_at": "2024-01-01T00:00:00.000Z"
  }
}
```

**OU formato alternativo:**

```json
{
  "msg": "Biografia atualizada com sucesso",
  "bio": "Nova biografia"
}
```

---

### PUT `/api/auth/password`

Atualiza a senha do usuário.

**Headers:**

- Cookie com sessão do usuário

**Body:**

```json
{
  "currentPassword": "string",
  "newPassword": "string"
}
```

**Resposta de Sucesso (200):**

```json
{
  "msg": "Senha atualizada com sucesso"
}
```

**Resposta de Erro (400):**

```json
{
  "msg": "Senha atual incorreta"
}
```

---

## Configuração Importante

O backend deve:

1. Usar cookies para sessão (com `httpOnly: true` e `secure: true` em produção)
2. Configurar CORS para aceitar credenciais:

   ```javascript
   app.use(cors({
     origin: 'http://localhost:5173', // URL do frontend
     credentials: true
   }))
   ```

3. Usar `express-session` ou similar para gerenciar sessões

---

## Estrutura de Dados do Usuário

O frontend aceita múltiplas estruturas, mas a recomendada é:

```json
{
  "id": 1,
  "username": "Nome do Usuário",
  "email": "email@exemplo.com",
  "bio": "Biografia",
  "biography": "Biografia (alternativo)",
  "created_at": "2024-01-01T00:00:00.000Z",
  "cursos": [
    {
      "id": 1,
      "nome": "JavaScript",
      "status": 1,
      "progresso": 50
    }
  ]
}
```

---

## Tratamento de Erros

Todos os endpoints devem retornar erros no formato:

```json
{
  "msg": "Mensagem de erro descritiva"
}
```

Com os códigos HTTP apropriados:

- 400: Bad Request (dados inválidos)
- 401: Unauthorized (não autenticado)
- 404: Not Found (recurso não encontrado)
- 409: Conflict (email já cadastrado, etc)
- 500: Internal Server Error
