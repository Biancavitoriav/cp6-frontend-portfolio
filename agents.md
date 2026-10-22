# Guia do projeto

## Objetivo

Este projeto é o portfólio pessoal de Bianca Veloso, criado para o Checkpoint 6. A experiência deve parecer um portfólio funcionando dentro de um navegador antigo, com referências de Windows XP, Tiger Aero, Frutiger Aero, Web 1.0 e início da Web 2.0.

## Ferramentas

- HTML semântico.
- CSS customizado.
- JavaScript vanilla.
- Devicon para logos de tecnologias e redes.
- Simple Icons para Databricks.
- Catálogo de ícones Windows 98 do RyOS para ícones de interface.
- ChatGPT e Figma Make foram usados durante o processo de criação e iteração.

## Estrutura principal

- `index.html`: estrutura das seis áreas do portfólio.
- `style.css`: identidade visual, responsividade, janelas, cards e design system de botões.
- `script.js`: dados dos projetos, navegação, busca, ícones, Project Viewer e formulário de contato.
- `images/`: fotos de perfil, elementos visuais e screenshots dos projetos.
- `DOCUMENTACAO_FINAL.md`: documentação do processo, referências, prompts, correções e validação.

## Seções do site

As áreas são `home`, `about`, `projects`, `skills`, `experience` e `contact`. A interface deve manter a navegação por abas, o endereço visual do navegador, a taskbar e a status bar.

## Regras visuais

- Manter a estética Windows XP/Tiger Aero/Frutiger Aero.
- Usar Tahoma, Verdana ou fontes equivalentes de interfaces antigas.
- Preferir janelas, barras de título, arquivos, pastas, status e gradientes coerentes com o período.
- Não usar emojis como ícones de interface.
- Usar logos reais somente quando a marca precisar ser reconhecida, como GitHub, LinkedIn e tecnologias.
- Evitar dashboards modernas, cards aninhados, excesso de arredondamento e elementos decorativos sem função.
- Preservar a interface estática: sem animações suaves, transições modernas ou entradas animadas. Estados `hover`, `active` e `focus` devem ser instantâneos.
- Todos os botões de conteúdo devem seguir o design system `primary`, `secondary` ou `quiet`.
- A interface visível permanece em inglês para manter a identidade do portfólio.

## Regras de UX

- Cada componente deve ter uma função clara.
- Evitar informações repetidas, status duplicados e janelas dentro de janelas sem necessidade.
- Cards de projeto devem usar somente a primeira imagem como capa.
- Imagens adicionais devem aparecer no Project Viewer.
- Ações principais devem ser fáceis de localizar e ter hierarquia visual consistente.
- Preservar acessibilidade básica: labels, `aria-label`, foco visível, textos alternativos e estados de busca.

## Validação local

Para abrir o projeto localmente:

```bash
python3 -m http.server 5500 --directory .
```

Depois, acessar `http://127.0.0.1:5500/index.html#home`.

Verificações rápidas:

```bash
node --check script.js
git diff --check
```

Também testar manualmente:

1. navegação pelas seis abas;
2. busca por projeto ou tecnologia;
3. abertura, navegação e fechamento do Project Viewer;
4. formulário de contato sem envio acidental;
5. visualização das imagens e ícones;
6. comportamento em telas menores.

## Pendências conhecidas

- Substituir `hello@example.com` pelo e-mail real antes da publicação.
- Inserir o link público do deploy na documentação final.
- Uma possível próxima etapa é transformar a estética em uma simulação mais interativa de Windows XP, com janelas movimentáveis, minimizar, maximizar, taskbar com aplicativos ativos e modais mais completos.

