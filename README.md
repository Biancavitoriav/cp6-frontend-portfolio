# Bianca Veloso — Full-Stack Software Engineer

Portfólio pessoal desenvolvido para o Checkpoint 6, com uma experiência inspirada em Windows XP, Tiger Aero, Frutiger Aero, Web 1.0 e início da Web 2.0.

A proposta é apresentar perfil, projetos, habilidades e experiências como se o visitante estivesse navegando em um antigo navegador de Internet: com abas, janelas, arquivos, pastas, taskbar, status bars e um visualizador de projetos.

## Prévia

<img width="1432" height="812" alt="image" src="https://github.com/user-attachments/assets/1545d581-ed99-48fe-898a-d15619ce3492" />


## Funcionalidades

- Navegação entre seis áreas: Home, About, Work, Toolkit, Experience e Contact.
- Busca por projetos e tecnologias.
- Cards de projetos com capa, descrição, tecnologias e link para o GitHub.
- Project Viewer com galeria, detalhes, thumbnails e links externos.
- Organização de 17 tecnologias por área de atuação.
- Linha do tempo com experiências profissionais e acadêmicas.
- Formulário de contato que prepara um rascunho no aplicativo de e-mail.
- Ícones bitmap inspirados em Windows 98/XP.
- Logos oficiais para GitHub, LinkedIn e tecnologias.
- Layout responsivo para telas menores.
- Interface estática, sem animações modernas, para manter a coerência com o período visual escolhido.

## Projetos apresentados

| Projeto | Descrição | Tecnologias principais |
| --- | --- | --- |
| [salaf-mesas](https://github.com/Biancavitoriav/salaf-mesas) | Rotação justa de lugares para uma turma de 24 alunos. | Python, Flask |
| [Api-estoque](https://github.com/Biancavitoriav/Api-estoque) | API de estoque com validação, atualizações parciais e Docker. | Java, Spring Boot, PostgreSQL, Docker |
| [Aplicativo-Trocatine](https://github.com/Biancavitoriav/Aplicativo-Trocatine) | Marketplace mobile para troca e venda de itens infantis. | Java, Mobile, Sustainability |
| [chat-rag-laufey](https://github.com/Biancavitoriav/chat-rag-laufey) | Chatbot com RAG, base de conhecimento e Gemini API. | Python, Flask, CSS, Gemini API |
| [TikMovies](https://github.com/Biancavitoriav/TikMovies) | Aplicação para descobrir, acompanhar e favoritar filmes. | React, TypeScript, TMDB API |
| [JOVI-landing-page](https://github.com/Gabi-lisboa/Sprint3-Jovi) | Landing page responsiva para o conceito SmartCam. | React, JavaScript, Vite, Tailwind CSS |

O TikMovies também possui um link para a [documentação oficial da API do TMDB](https://developer.themoviedb.org/docs/getting-started).

## Tecnologias do portfólio

- HTML semântico
- CSS customizado
- JavaScript vanilla
- [Devicon](https://devicon.dev/) para logos de tecnologias e redes
- [Simple Icons](https://simpleicons.org/) para o ícone do Databricks
- [Catálogo de ícones Windows 98 do RyOS](https://github.com/ryokun6/ryos/blob/main/public/resources/windows-icon-catalogs/win98/catalog.md)

O processo de criação contou com apoio do **ChatGPT** e do **Figma Make**. O Figma Make foi usado para explorar uma primeira direção visual; depois, o projeto passou por várias rodadas de decisão e correção de layout, UX, ícones, cards, contato e interações.

## Estrutura de arquivos

```text
portfolio-html/
├── index.html
├── style.css
├── script.js
├── README.md
├── DOCUMENTACAO_FINAL.md
├── agents.md
└── images/
    ├── frutiger-aero-fundo.webp
    ├── bianca.png
    ├── clippy-helper.png
    └── projects/
```

### Arquivos principais

- `index.html`: estrutura das páginas, conteúdo e acessibilidade básica.
- `style.css`: identidade visual, responsividade, janelas, cards e design system de botões.
- `script.js`: dados dos projetos, navegação, busca, ícones, Project Viewer e formulário de contato.
- `images/`: imagens de perfil, elementos decorativos e screenshots dos projetos.
- `DOCUMENTACAO_FINAL.md`: processo completo do Checkpoint 6, referências, prompts, correções, validação e reflexão.
- `agents.md`: guia para futuras alterações no projeto.

## Como executar localmente

Não é necessário instalar dependências ou fazer build. O projeto é uma página estática.

Na pasta `portfolio-html`, execute:

```bash
python3 -m http.server 5500 --directory .
```

Depois, abra:

```text
http://127.0.0.1:5500/index.html#home
```

Também é possível abrir o `index.html` diretamente no navegador, mas um servidor local oferece uma validação mais próxima do ambiente publicado.

## Validação

Verificações rápidas:

```bash
node --check script.js
git diff --check
```

Testes manuais recomendados:

1. Navegar pelas seis abas.
2. Pesquisar `TikMovies`, `React` ou `Python`.
3. Abrir e fechar o Project Viewer.
4. Navegar pelas thumbnails de projetos com mais de uma imagem.
5. Conferir os links de GitHub, LinkedIn e TMDB.
6. Preencher o formulário de contato sem enviá-lo acidentalmente.
7. Testar o layout em uma tela menor.

## Documentação do processo

Leia a [documentação final do Checkpoint 6](DOCUMENTACAO_FINAL.md) para consultar:

- contexto e objetivo;
- referências visuais;
- paleta, tipografia, tom e estrutura;
- principais prompts resumidos;
- registro de problemas e correções;
- validação do projeto;
- reflexão final e próximos passos.

## Pendências antes da publicação

- Substituir `hello@example.com` pelo e-mail real no formulário e nos links de contato.
- Inserir o link público do deploy na documentação final.
- Avaliar uma próxima versão mais interativa, com janelas movimentáveis, minimizar, maximizar, taskbar com aplicativos ativos e modais mais fiéis ao Windows XP.

## Referências visuais

- [MitchIvin XP](https://mitchivin.com/)
- [Yasmin Dev](https://yasmndev.com.br/)
- [Retro '98 Portfolio](https://retro98.framer.ai/desktop)
- [Clippy Desktop Assistant](https://felixrieseberg.github.io/clippy/)
- [GigaGlitters](https://www.gigaglitters.com/g/0a77t3i6np6)

## Autoria

**Bianca Veloso**
Full-Stack Software Engineer · São Paulo, Brazil

- [GitHub](https://github.com/Biancavitoriav)
- [LinkedIn](https://www.linkedin.com/in/bianca-vitoria-veloso/)
