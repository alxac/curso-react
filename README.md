# Curso React - Fullstack Club

Este projeto foi um curso prático para aprender React, usado na aula do Fullstack Club, cobrindo desde a configuração inicial até o uso de bibliotecas populares. Abaixo estão os detalhes sobre instalação, pacotes utilizados, exemplos de uso e instruções para rodar o projeto.

## Índice

- [Instalação](#instalação)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Principais Pacotes Utilizados](#principais-pacotes-utilizados)
- [Exemplos de Uso](#exemplos-de-uso)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Contato](#contato)

---

## Instalação

1. **Clone o repositório:**
    ```bash
    git clone https://github.com/alxac/curso-react.git
    cd curso-react
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    # ou
    yarn install
    ```

---

## Scripts Disponíveis

- `npm start` — Inicia o servidor de desenvolvimento.
- `npm run build` — Gera a versão de produção.

---

## Principais Pacotes Utilizados

| Pacote                | Versão      | Descrição                                 |
|-----------------------|-------------|-------------------------------------------|
| react                 | ^18.x       | Biblioteca principal para UI              |
| react-dom             | ^18.x       | Integração do React com o DOM             |
| react-router-dom      | ^6.x        | Rotas para aplicações SPA                 |
| tailwindcss           | ^3.x        | Framework CSS para estilização rápida     |
| vite                  | ^5.x        | Ferramenta de build e desenvolvimento     |
| uuid                  | ^10.x       | Geração de IDs únicos                     |

> **Obs:** Confira o arquivo `package.json` para versões exatas.

---

## Exemplos de Uso

### 1. Rotas com React Router

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
     </BrowserRouter>
  );
}
```

### 2. Estilização com Tailwind CSS

```jsx
function MeuComponente() {
  return (
    <div className="bg-blue-500 text-white p-4">
      Olá, Tailwind CSS!
    </div>
  );
}
```

## Estrutura de Pastas

```
curso-react/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   ├── index.js
├── package.json
└── README.md
```

---

## Contato

Dúvidas ou sugestões? Abra uma issue ou envie um e-mail para [alxac@msn.com](mailto:alxac@msn.com).

---