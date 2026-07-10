# misaelberftmendes.com.br

Site hub pessoal de Misael Berft Mendes — engenheiro eletricista (CREA-RS 251305), coach IGT e instrutor técnico.

## Stack

- **Next.js 15** (App Router, RSC)
- **TypeScript**
- **Tailwind CSS 3**
- **MDX** (blog via `next-mdx-remote`)
- **Vercel** (hospedagem recomendada)

## Rodar localmente

```bash
npm install
cp .env.example .env.local   # ajuste WhatsApp, email etc.
npm run dev
```

Abra <http://localhost:3000>.

## Publicar

1. Crie um repositório no GitHub e faça o push do projeto.
2. Em <https://vercel.com>, importe o repositório e faça o deploy (aceita as opções padrão de Next.js).
3. Registre o domínio em <https://registro.br> (ou similar) e aponte no painel da Vercel: **Settings → Domains → misaelberftmendes.com.br**.

## Estrutura

```
src/
  app/
    page.tsx              # home (hub)
    engenharia/           # L1
    coaching/             # L2
    docencia/             # L3
    sobre/
    contato/
    blog/
      page.tsx            # lista
      [slug]/page.tsx     # post individual
    layout.tsx
    globals.css
  components/site/        # Header, Footer
  lib/blog.ts             # leitura MDX
content/
  blog/                   # posts .mdx com frontmatter
```

## Adicionar um post no blog

Crie um `.mdx` em `content/blog/` com frontmatter:

```mdx
---
title: "Título do post"
description: "Resumo em uma linha."
date: "2026-07-09"
area: "Engenharia"     # ou Coaching, Docência, Reflexões
---

Conteúdo em Markdown/MDX aqui.
```

O post aparece automaticamente na lista `/blog` e na home.

## Tokens de design

Editáveis em `tailwind.config.ts` e `src/app/globals.css`:

- `canvas` — fundo off-white técnico
- `ink` — texto (com variantes `soft` e `muted`)
- `tensao` — azul industrial primário (variantes `hi` e `lo`)
- `alerta` — amarelo advertência
- `rule` — linhas técnicas

Fontes: Space Grotesk (display), Inter (body), JetBrains Mono (dados).

## Próximos passos sugeridos

- Substituir números placeholder de WhatsApp no código (busque `5551999999999`).
- Configurar endpoint real do formulário de contato (Formspree, Resend ou Web3Forms).
- Adicionar `favicon` e imagem OG em `public/`.
- Escrever mais posts no blog.
- Configurar Analytics (Plausible, Umami ou Vercel Analytics).
