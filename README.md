# Sonoplastia 2026 — "Todos os Meses"

Landing page de lançamento do single **"Todos os Meses"**, do cantor e compositor **Clóvis Ribeiro**, gravado em parceria com o curso de Sonoplastia da **Rede Daora**. Projeto educacional, sem fins comerciais.

## Preview

O site já está publicado via Cloudflare Pages:

**https://sonoplastia-2026.pages.dev**

---

## Estrutura do Projeto

```
sonoplastia-2026/
├── src/
│   ├── pages/          # index.astro, termos.astro, privacidade.astro
│   ├── layouts/        # BaseLayout.astro
│   ├── components/     # Header, Hero, About, Team, Gallery, TechSpecs, Footer, AudioPlayer, Lightbox
│   ├── content/        # artista/, equipe/, galeria/, ficha-tecnica/, paginas/
│   ├── scripts/        # player.js, lightbox.js
│   └── styles/         # global.css
├── public/
│   ├── images/         # 13 imagens
│   ├── sounds/         # clovis-demo.mp3
│   └── styles/         # global.css
├── DATA/               # Conteúdo-fonte e specs (backup)
├── astro.config.mjs    # Configuração do Astro
├── tsconfig.json       # TypeScript config
├── package.json        # Dependências
├── AGENTS.md           # Instruções para agents de IA
└── .gitignore
```

---

## Como Usar

### Desenvolvimento local

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
# Acesse http://localhost:4321
```

### Build para produção

```bash
npm run build
# Gera a pasta dist/
```

### Preview do build

```bash
npm run preview
# Acesse http://localhost:4321
```

### Publicar no Cloudflare Pages

1. Faça push do repositório para o GitHub
2. Acesse o [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Vá em **Workers & Pages** → **Create** → **Pages**
4. Conecte o repositório GitHub (`DenkaAkumaPedro/sonoplastia-2026`)
5. Configure:
   - **Production branch:** `main`
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Framework preset:** Astro
6. Clique em **Save and Deploy**
7. O site estará em: `https://sonoplastia-2026.pages.dev`

> **Nota:** O Cloudflare Pages detecta automaticamente o Astro. A configuração acima é apenas para referência — o deploy automático funciona pushando para a branch `main`.

---

## Funcionalidades

| Recurso | Descrição |
|---|---|
| **Hero** | Chamada com imagem do artista e botão CTA |
| **Sobre** | Biografia do artista com links de contato |
| **Coletivo** | Cards dos 3 alunos de sonoplastia |
| **Galeria** | Grid de 6 fotos com lightbox (navegação por teclado) |
| **Ficha Técnica** | Instrumentos, músicos e equipamentos de produção |
| **Player de Áudio** | Modal com play/pause, seek, volume, mute e letra expansível |
| **Páginas Legais** | Termos de Uso e Política de Privacidade (LGPD) |
| **Acessibilidade** | Skip link, ARIA labels, navegação por teclado |
| **Responsivo** | Mobile-first com breakpoints em 600/720/768/1024px |

---

## Personalização

### Trocar imagens

Substitua os arquivos em `public/images/` mantendo os mesmos nomes:

| Arquivo | Uso |
|---|---|
| `hero-clovis-violao.png` | Hero + capa do player |
| `Clovis Ribeiro.png` | Seção Sobre |
| `Akin Labi Mendes.jpeg` | Card da equipe |
| `Albert Jonnes Carrer.jpeg` | Card da equipe |
| `Walmor Carvalho.jpeg` | Card da equipe |
| `galeria-*.png` / `.jpeg` | Galeria (6 imagens) |

### Trocar o áudio

Substitua `public/sounds/clovis-demo.mp3` pelo novo arquivo MP3.

### Editar textos

Edite os arquivos Markdown em `src/content/`:

| Arquivo | Conteúdo |
|---|---|
| `src/content/artista/index.md` | Hero, biografia e contatos |
| `src/content/artista/musica.md` | Letra da música |
| `src/content/equipe/*.md` | Dados de cada membro |
| `src/content/ficha-tecnica/creditos.md` | Créditos técnicos |
| `src/content/paginas/*.md` | Termos de uso e privacidade |

### Trocar cores

Edite as variáveis CSS em `public/styles/global.css`:

```css
:root {
  --bg-primary: #0d3952;     /* Fundo principal */
  --bg-secondary: #1b647a;   /* Fundo secundário */
  --primary: #4bcadb;        /* Cor primária */
  --accent: #72f0ca;         /* Cor de destaque */
  --btn-primary-bg: #1088FF; /* Cor do botão CTA */
}
```

---

## Especificações

As especificações detalhadas do projeto estão em `.agents/specs/`:

| Arquivo | Escopo |
|---|---|
| `PROJECT_SPECIFICATION.md` | Visão geral, participantes, estrutura |
| `FUNCTIONAL_SPECIFICATION.md` | Comportamento de cada componente |
| `CONTENT_SPECIFICATION.md` | Todos os textos, letras, contatos |
| `TECHNICAL_SPECIFICATION.md` | Arquitetura, CSS, JS, Content Collections |
| `DESIGN_SPECIFICATION.md` | Cores, fontes, espaçamentos, breakpoints |
| `SETUP_GUIDE.md` | Setup de desenvolvimento e deploy |
| `TEXTOS_DO_SITE.md` | Compilação unificada de todos os textos |

---

## Tecnologias

- **Astro 5** — Framework estático com Content Collections
- **TypeScript** — Tipagem estática
- **HTML5** — semântico, acessível
- **CSS3** — variáveis customizadas, Flexbox, Grid, mobile-first
- **JavaScript ES6** — vanilla, sem bibliotecas externas
- **Cloudflare Pages** — Deploy e hospedagem
- **Áudio HTML5** — `<audio>` com player customizado

---

## Participantes

| Papel | Nome |
|---|---|
| Artista | Clóvis Ribeiro |
| Desenvolvedor | Diogo M. |
| Arte-Educador (Programação Web) | Renato Ricco |
| Arte-Educador (Sonoplastia) | Jhonny Magi |
| Fotografia | Jhonny Magi |
| Alunos de Sonoplastia | Akin Labi Mendes, Albert Jonnes Carrer, Walmor Carvalho |

---

## Licença

Projeto educacional da **Rede Daora** (Polo Butantã). As imagens e áudios são de responsabilidade dos respectivos autores.
