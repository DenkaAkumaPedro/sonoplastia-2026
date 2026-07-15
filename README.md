# Sonoplastia 2026 — "Todos os Meses"

Landing page de lançamento do single **"Todos os Meses"**, do cantor e compositor **Clóvis Ribeiro**, gravado em parceria com o curso de Sonoplastia da **Rede Daora**. Projeto educacional, sem fins comerciais.

## Preview

O site já está publicado via GitHub Pages:

**https://denkaakumapedro.github.io/sonoplastia-2026/**

---

## Estrutura do Projeto

```
sonoplastia-2026/
├── index.html              # Página principal (Hero, Sobre, Equipe, Galeria, Ficha Técnica)
├── termos.html             # Termos de Uso
├── privacidade.html        # Política de Privacidade & LGPD
│
├── css/
│   └── style.css           # Design tokens + todos os estilos
│
├── js/
│   ├── player.js           # Player de áudio customizado (modal)
│   └── lightbox.js         # Lightbox da galeria de imagens
│
├── DATA/                   # Conteúdo-fonte e assets
│   ├── images/             # Imagens do site (hero, equipe, galeria)
│   │   └── Whatsapp/       # Fotos extras via WhatsApp (backup)
│   ├── sounds/
│   │   └── clovis-demo.mp3 # Áudio do single
│   ├── artista/            # Markdown com biografia e música
│   ├── equipe/             # Markdown com dados dos membros
│   ├── ficha-tecnica/      # Créditos técnicos
│   ├── galeria/            # Manifesto de imagens (YAML)
│   ├── paginas/            # Termos de uso e privacidade (Markdown)
│   ├── config.ts           # Schemas Zod (referência para Astro)
│   └── footer.md           # Conteúdo do rodapé
│
├── .agents/specs/          # Especificações detalhadas do projeto
│   ├── PROJECT_SPECIFICATION.md
│   ├── FUNCTIONAL_SPECIFICATION.md
│   ├── CONTENT_SPECIFICATION.md
│   ├── TECHNICAL_SPECIFICATION.md
│   ├── DESIGN_SPECIFICATION.md
│   ├── SETUP_GUIDE.md
│   └── TEXTOS_DO_SITE.md
│
├── AGENTS.md               # Instruções para agents de IA
└── .gitignore
```

---

## Como Usar

### Visualizar o site localmente

Não é necessário instalar nada. Basta abrir o `index.html` no navegador:

```bash
# Opção 1: duplo-clique no arquivo
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

```bash
# Opção 2: servidor local (recomendado para funcionamento completo do áudio)
# Com Python
python -m http.server 8080
# Acesse http://localhost:8080

# Com Node.js (npx)
npx serve .
# Acesse http://localhost:3000
```

> **Importante:** O player de áudio pode não funcionar corretamente ao abrir diretamente como `file://` devido a restrições de segurança do navegador. Use um servidor local para testar.

### Publicar no GitHub Pages

1. Faça fork ou clone deste repositório:
   ```bash
   git clone https://github.com/DenkaAkumaPedro/sonoplastia-2026.git
   cd sonoplastia-2026
   ```

2. Acesse as **Settings** do repositório no GitHub

3. Vá em **Pages** (menu lateral esquerdo)

4. Em **Source**, selecione:
   - **Deploy from a branch**
   - Branch: **main**
   - Pasta: **/ (root)**

5. Clique em **Save**

6. Aguarde 1-2 minutos. O site estará em:
   ```
   https://<seu-usuario>.github.io/sonoplastia-2026/
   ```

### Publicar em outro hosting (Netlify, Vercel, etc.)

O site é HTML/CSS/JS puro — qualquer hosting estático funciona:

1. Faça push do repositório para o serviço desejado
2. Configure:
   - **Build command:** não necessário (ou deixe vazio)
   - **Publish directory:** `/` (raiz do repositório)
3. Pronto — o site será servido automaticamente

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

Substitua os arquivos em `DATA/images/` mantendo os mesmos nomes:

| Arquivo | Uso |
|---|---|
| `hero-clovis-violao.png` | Hero + capa do player |
| `Clovis Ribeiro.png` | Seção Sobre |
| `Akin Labi Mendes.jpeg` | Card da equipe |
| `Albert Jonnes Carrer.jpeg` | Card da equipe |
| `Walmor Carvalho.jpeg` | Card da equipe |
| `galeria-*.png` / `.jpeg` | Galeria (6 imagens) |

### Trocar o áudio

Substitua `DATA/sounds/clovis-demo.mp3` pelo novo arquivo MP3.

### Editar textos

Edite os arquivos Markdown em `DATA/`:

| Arquivo | Conteúdo |
|---|---|
| `DATA/artista/index.md` | Hero, biografia e contatos |
| `DATA/artista/musica.md` | Letra da música |
| `DATA/equipe/*.md` | Dados de cada membro |
| `DATA/ficha-tecnica/creditos.md` | Créditos técnicos |
| `DATA/paginas/*.md` | Termos de uso e privacidade |

### Trocar cores

Edite as variáveis CSS no topo de `css/style.css`:

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

- **HTML5** — semântico, acessível
- **CSS3** — variáveis customizadas, Flexbox, Grid, mobile-first
- **JavaScript ES6** — vanilla, sem bibliotecas externas
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
