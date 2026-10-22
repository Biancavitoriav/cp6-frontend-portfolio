# Documentação final — Checkpoint 6

## Construindo um portfólio com IA

**Projeto:** Bianca Veloso — Full-Stack Software Engineer  
**Data da validação:** 22/10/2026  
**Tecnologias:** HTML, CSS e JavaScript, com Devicon, Simple Icons e catálogo de ícones Windows carregados por CDN.

> Esta documentação resume o processo de criação, as decisões de identidade visual, os principais prompts e as correções realizadas. Os prompts foram resumidos e agrupados por etapa, conforme solicitado, em vez de reproduzidos integralmente.

## 1. Contexto e objetivo

O projeto é um portfólio pessoal criado com apoio do **ChatGPT**. A primeira exploração visual também foi feita no **Figma Make**, usando um prompt de direção que eu havia criado no ChatGPT para orientar a ferramenta sobre Windows XP, Tiger Aero, Frutiger Aero, Web 1.0 e início da Web 2.0.

O prompt ajudou a estabelecer o tema geral, mas não foi muito efetivo para chegar sozinho ao resultado desejado. A saída inicial ainda trazia escolhas visuais genéricas, elementos fora do período e componentes que não conversavam bem entre si. Por isso, precisei tomar muitas outras decisões de mudança visual ao longo do processo: remover formas geométricas, reorganizar a composição, corrigir a hierarquia, trocar ícones, ajustar os cards, repensar o contato e validar o comportamento de cada seção. A IA funcionou como ponto de partida e parceira de iteração, mas a identidade final dependeu de direção e revisão crítica contínuas.

O objetivo principal foi apresentar:

- perfil profissional e informações pessoais;
- projetos desenvolvidos ao longo da formação;
- tecnologias e áreas de atuação;
- experiências profissionais e acadêmicas;
- uma forma simples de iniciar contato.

Durante o processo, a direção visual foi refinada para que o site não parecesse apenas uma dashboard moderna com cores retrô. A interface passou a usar metáforas de arquivos, pastas, janelas, Notepad, Explorer, barra de tarefas, status do sistema e visualizador de projetos.

## 2. Resultado final

O portfólio final possui seis áreas navegáveis:

| Área | Função |
| --- | --- |
| **Home** | Apresenta Bianca, o foco profissional, tecnologias principais e projetos selecionados. |
| **About** | Explica a forma de trabalho, princípios de engenharia e informações resumidas do perfil. |
| **Work** | Exibe seis projetos em cards com capa, descrição, tecnologias, GitHub e visualizador de detalhes. |
| **Toolkit** | Organiza 17 tecnologias em Front-End, Back-End, Data Engineering & Analytics e Databases & Infrastructure. |
| **Experience** | Apresenta PicPay, FIAP, Instituto J&F e localização em uma linha do tempo. |
| **Contact** | Oferece um formulário que prepara um rascunho de e-mail no aplicativo do visitante. |

### Projetos apresentados

1. **salaf-mesas** — aplicação Python/Flask para organizar a rotação de lugares em sala de aula.
2. **Api-estoque** — API de estoque com Spring Boot, PostgreSQL e Docker.
3. **Aplicativo-Trocatine** — marketplace mobile para troca e venda de itens infantis.
4. **chat-rag-laufey** — chatbot em Flask com RAG e Google Gemini API.
5. **TikMovies** — aplicação React/TypeScript que consome a API do TMDB para descoberta e organização de filmes.
6. **JOVI-landing-page** — landing page React da SmartCam, com foco em solução, público e experiência do produto.

Em cada card, apenas a primeira imagem é usada como capa para evitar espaços vazios e alturas divergentes. As imagens adicionais ficam disponíveis no **Project Viewer**, que apresenta galeria, descrição, tecnologias, quantidade de previews e links externos.

## 3. Referências visuais e como foram usadas

Foram usadas referências de interfaces antigas, recriações modernas de sistemas clássicos e catálogos de ícones. O objetivo foi observar tanto a aparência quanto o comportamento dos componentes.

| Referência | O que foi aproveitado | Onde aparece no projeto |
| --- | --- | --- |
| [Windows XP, Luna e Internet Explorer](https://mitchivin.com/) | Barras de título azuis, controles de janela, abas, barra de endereço, taskbar, status e botões com gradiente. | Moldura principal do navegador, navegação global, taskbar e status do portfólio. |
| [MitchIvin XP](https://mitchivin.com/) | Organização de um site pessoal como um desktop explorável e uso de um aplicativo de contato inspirado em e-mail. | Estrutura geral e aba **Contact**, adaptada para não criar uma janela dentro de outra janela. |
| [Retro ’98 Portfolio](https://retro98.framer.ai/desktop) | Metáforas de desktop, pastas, objetos e organização de projetos como arquivos. | Aba **Work**, árvore lateral “My Projects”, breadcrumbs e status “6 objects”. |
| [Clippy Desktop Assistant](https://felixrieseberg.github.io/clippy/) | Personagem auxiliar e humor nostálgico associado a interfaces antigas. | Clippy no canto inferior direito com a mensagem “Need a hand?”. A animação foi removida para manter o site estático. |
| [Catálogo de ícones Windows 98 do RyOS](https://github.com/ryokun6/ryos/blob/main/public/resources/windows-icon-catalogs/win98/catalog.md) | Uso de ícones bitmap categorizados por sistema, pastas, arquivos, aplicações e dispositivos. | Ícones da navegação, abas, janelas, contato, dados, servidor, rede e taskbar. |
| [Yasmin Dev](https://yasmndev.com.br/) | Combinação de portfólio pessoal, Internet Explorer, perfil, habilidades, projetos e elementos de internet pessoal dos anos 2000. | Reforçou a decisão de apresentar o portfólio como uma experiência navegável, com abas, linguagem de perfil, áreas de skills/projetos e referências de página pessoal. |
| [GigaGlitters](https://www.gigaglitters.com/g/0a77t3i6np6) | Linguagem decorativa de glitter e banners de sites pessoais dos anos 2000. | Foi explorada como referência de personalidade visual; o elemento decorativo não permaneceu como componente estrutural da versão final. |
| Imagens e referências de Frutiger Aero | Céu, água, brilho, natureza, cores saturadas e sensação de tecnologia otimista. | Wallpaper `images/frutiger-aero-fundo.webp`, brilho, gradientes e composição do desktop. |

As referências foram usadas como repertório, não como cópia de uma única página. A composição final combina o navegador e o Explorer do Windows com uma camada mais pessoal de Frutiger Aero.

## 4. Decisões de identidade visual

### 4.1 Paleta de cores

| Cor | Função | Justificativa |
| --- | --- | --- |
| `#0B4FBA` | Bordas e azul escuro das janelas | Reforça a referência direta às barras de título do Windows XP. |
| `#3D9DF4` | Azul claro de destaque no topo das janelas | Cria o brilho e o efeito de gradiente característico da interface Luna. |
| `#E8E4D4` | Chrome do navegador e áreas de sistema | Remete ao cinza-bege das barras de ferramentas de navegadores antigos. |
| `#F8EEF5` | Fundo interno da página | Quebra o excesso de azul e preserva a personalidade visual do portfólio. |
| `#24364B` | Texto principal | Mantém boa leitura sem usar preto absoluto. |
| `#61C72F` | Status e indicadores positivos | Representa “ready”, “online” e “open to work” de maneira familiar. |

### 4.2 Tipografia

O corpo da interface usa principalmente **Tahoma**, com fallback para **Verdana** e **Arial**, por serem fontes próximas da linguagem visual de interfaces Windows antigas. A hierarquia foi construída com peso, tamanho, barras de título e espaçamento, sem depender de fontes modernas ou de efeitos chamativos.

### 4.3 Tom e personalidade

O tom é profissional, direto e levemente nostálgico. Os textos permanecem em inglês para manter a identidade do portfólio e a coerência com os nomes de arquivos e componentes, como `about-bianca.txt`, `bianca-properties.txt - Notepad` e `Project Viewer`.

A personalidade aparece por meio de:

- nomes de arquivos e aplicativos;
- microtextos como “Need a hand?” e “Ready to build”;
- metáforas de sistema, pastas e documentos;
- imagens de projetos reais;
- Clippy e elementos de desktop;
- equilíbrio entre nostalgia e clareza profissional.

### 4.4 Estrutura da página

1. Wallpaper e desktop externo.
2. Janela principal do navegador.
3. Barra de título, controles, endereço, busca e abas.
4. Conteúdo de cada seção dentro da mesma moldura.
5. Taskbar e status bar na parte inferior.

Essa estrutura foi escolhida para que o usuário reconheça imediatamente o ambiente e consiga navegar sem depender de uma interface contemporânea escondida por trás da estética.

## 5. Principais prompts utilizados

Os prompts abaixo são um resumo dos principais pedidos feitos durante o desenvolvimento, na ordem em que influenciaram o projeto.

### 5.1 Prompt inicial — direção visual

Criar um portfólio pessoal com estética Windows XP, Tiger Aero, Web 1.0 e início da Web 2.0, usando referências visuais anexadas. A IA deveria preservar não apenas cores e gradientes, mas também a forma como sites e aplicativos daquela época organizavam janelas, arquivos, menus, botões, navegação e estados de interação.

Esse prompt foi usado primeiro no **Figma Make** para gerar uma base visual. A ferramenta ajudou a materializar a direção inicial, mas não entregou sozinha a coerência necessária. A partir daí, as conversas e alterações no projeto foram usadas para corrigir o que fugia da estética e tomar decisões específicas de layout, conteúdo, componentes e comportamento.

### 5.2 Ajuste de identidade e composição

Remover elementos que pareciam genéricos ou modernos, aproximar todas as abas da linguagem da Home e transformar cards em janelas/notepads com cabeçalhos, controles, status e hierarquia consistente.

### 5.3 Ajuste de UX writing e idioma

Revisar os textos de todas as áreas para deixá-los claros, objetivos e orientados à ação, mantendo o site inteiro em inglês. Os CTAs principais passaram a usar mensagens como “See my work”, “Start a conversation” e “Prepare email”.

### 5.4 Prompt de ícones

Revisar os ícones para remover emojis e escolher símbolos coerentes com cada contexto. Depois, substituir o catálogo limitado por ícones bitmap de um catálogo Windows 98 mais amplo, mantendo logos reais apenas para marcas como GitHub, LinkedIn e tecnologias.

### 5.5 Prompt de Contact

Reformular a aba de contato como um aplicativo antigo de e-mail, com título, menus, toolbar, campos de mensagem, status e links sociais. Após a validação de UX, remover a sensação de “modal dentro de modal” e integrar a área diretamente à página.

### 5.6 Prompt de Work e Project Viewer

Reorganizar os cards de projetos com uma única capa, descrição curta, tecnologias, link do repositório e CTA consistente. Manter as imagens extras em um visualizador inspirado em Explorer/Picture Viewer, com galeria e detalhes sem poluir o grid.

### 5.7 Prompt de design system e animações

Padronizar botões em três níveis — `primary`, `secondary` e `quiet` — com estados de hover, active, focus e disabled. Em seguida, validar as animações e remover movimento moderno, transições suaves e entradas animadas, mantendo apenas mudanças instantâneas de estado compatíveis com interfaces antigas.

## 6. Registro das principais correções

| Problema observado | Correção solicitada | Resultado e aprendizado |
| --- | --- | --- |
| O título “Hello, I’m Bianca” ficava comprimido ou sobreposto. | Separar as linhas e corrigir espaçamento e `letter-spacing`. | A hierarquia ficou legível. Aprendizado: não usar espaçamento negativo agressivo sem validar a renderização real. |
| A Home tinha logos, status e informações repetidas. | Remover `biancaveloso`, `BV`, contadores e indicadores duplicados. | A página ficou mais clara e o perfil passou a ter uma única informação de disponibilidade. |
| As abas tinham estilos muito diferentes. | Levar o padrão de janelas/notepads da Home e About para Work, Toolkit, Experience e Contact. | O sistema visual passou a ser reconhecível em todas as telas. |
| A primeira versão de Contact parecia um modal dentro de outro. | Retirar a moldura externa e manter o formulário integrado à página. | O contato continuou retrô sem prejudicar a estrutura de navegação. |
| Os cards de projetos tinham alturas e espaços vazios diferentes. | Usar apenas a primeira imagem como capa e alinhar descrição, tags, links e CTA. | O grid ficou mais previsível; as imagens extras foram movidas para o Project Viewer. |
| As miniaturas internas pareciam cards dentro de cards. | Remover molduras redundantes e simplificar o preview. | Cada projeto passou a ser percebido como um único componente. |
| O modal exibia um fundo colorido e deixava elementos vazarem por trás. | Ajustar o backdrop, a cobertura da viewport e a hierarquia do visualizador. | O foco passou para o projeto aberto, sem taskbar ou cards aparecendo por baixo. |
| Os ícones eram repetidos, pobres ou pareciam emojis. | Usar ícones bitmap por contexto e logos reais para redes e tecnologias. | A linguagem dos ícones ficou mais coerente com o período visual escolhido. |
| Animações modernas destoavam do conceito. | Desativar animações, transições e elevações suaves. | A interface ficou estática; hover, active e focus permanecem instantâneos e funcionais. |

## 7. Validação do projeto

A validação foi feita no preview local em 22/10/2026, com inspeção visual e navegação manual.

### Testes realizados

- Navegação entre **Home**, **About**, **Work**, **Toolkit**, **Experience** e **Contact**.
- Atualização do endereço visual e do estado ativo das abas.
- Busca por `TikMovies`, confirmando o estado “1 project found”.
- Exibição dos seis projetos na aba Work.
- Abertura e fechamento do Project Viewer.
- Exibição da primeira imagem e dos detalhes do projeto no viewer.
- Verificação da aba Toolkit com 17 tecnologias.
- Verificação da aba Experience com quatro marcos.
- Conferência dos campos e do botão “Prepare email” sem enviar a mensagem.
- Conferência visual de cabeçalhos, cards, status bars, taskbar e ícones.
- Verificação de sintaxe do JavaScript com `node --check script.js`.
- Verificação de espaços e marcadores inválidos com `git diff --check`.

### Estado da entrega

- **Repositório:** [github.com/Biancavitoriav/cp6-frontend-portfolio](https://github.com/Biancavitoriav/cp6-frontend-portfolio)
- **Preview local usado na validação:** `http://127.0.0.1:5500/index.html#home`
- **Deploy público:** não foi localizado nos arquivos nem nas conversas revisadas. Inserir o link do deploy antes do envio final à professora.
- **Contato do formulário:** o projeto ainda usa `hello@example.com` como destinatário. Substituir pelo e-mail real antes de publicar ou entregar.

## 8. Reflexão final

O resultado ficou próximo do que foi imaginado porque a estética deixou de ser tratada apenas como uma combinação de azul, brilho e gradiente. O processo passou a considerar a estrutura dos sites antigos: janelas com função clara, barras de título, arquivos, pastas, status, taskbar, navegação direta e feedback imediato.

O que mais precisou de correção foi a tendência inicial de criar elementos decorativos ou componentes modernos demais: dashboards, cards aninhados, modais sobrepostos, espaços vazios, status repetidos e animações suaves. Essas tentativas ajudaram a identificar que nostalgia visual sem coerência de comportamento não seria suficiente.

O principal aprendizado foi escrever prompts com restrições mais específicas, separar um problema por rodada e validar cada mudança no navegador. Também ficou claro que uma referência visual precisa ser analisada em três níveis:

1. aparência — cores, fontes, bordas, ícones e imagens;
2. composição — hierarquia, agrupamento, proporção e espaço;
3. comportamento — navegação, feedback, estados, abertura de detalhes e resposta a erros.

Ainda mudaria duas coisas antes da publicação: substituir o destinatário de e-mail de exemplo e registrar o link real do deploy. Fora esses pontos de entrega, a versão atual apresenta o processo de decisão, as correções e o resultado funcional esperado para o checkpoint.

Como possibilidade de continuidade, talvez eu prossiga com o projeto para torná-lo mais interativo e ainda mais fiel a um Windows XP real. Essa próxima etapa poderia explorar janelas movimentáveis, minimizar e maximizar componentes, taskbar com aplicativos ativos, modais mais completos e relações mais próximas entre desktop, arquivos e programas. Nesta entrega, a experiência ainda é principalmente uma interpretação visual que partiu da minha própria ideia de portfólio retrô; a evolução futura pode transformar essa referência conceitual em uma simulação mais consistente do sistema operacional.