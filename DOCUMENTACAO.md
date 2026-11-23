# Documentação do Projeto

## Adivinhe a Passagem

**Autores:** Murilo Santos  
**Repositório:** https://github.com/MuriloSantos22/jogo-de-adivinhacao  
**Aplicação:** https://murilosantos22.github.io/jogo-de-adivinhacao/  
**Versão do documento:** 1.0  

---

## Sumário

1. [Introdução](#1-introdução)
2. [Objetivos](#2-objetivos)
3. [Tecnologias utilizadas](#3-tecnologias-utilizadas)
4. [Requisitos](#4-requisitos)
5. [Arquitetura do sistema](#5-arquitetura-do-sistema)
6. [Estrutura de arquivos](#6-estrutura-de-arquivos)
7. [Funcionalidades](#7-funcionalidades)
8. [Regras de pontuação](#8-regras-de-pontuação)
9. [Fluxo de funcionamento](#9-fluxo-de-funcionamento)
10. [Armazenamento local](#10-armazenamento-local)
11. [Integrações externas](#11-integrações-externas)
12. [Interfaces da aplicação](#12-interfaces-da-aplicação)
13. [Testes e validações](#13-testes-e-validações)
14. [Execução e publicação](#14-execução-e-publicação)
15. [Limitações](#15-limitacoes)
16. [Possíveis melhorias](#16-possíveis-melhorias)
17. [Conclusão](#17-conclusão)

---

## 1. Introdução

**Adivinhe a Passagem** é uma aplicação web educacional desenvolvida para testar o conhecimento do jogador sobre histórias e passagens bíblicas.

Em cada rodada, o jogador lê um resumo de um trecho bíblico e deve informar a referência correspondente, composta por:

- nome do livro;
- número do capítulo;
- número do versículo.

A aplicação também oferece níveis de dificuldade, dicas, pontuação, tutorial explicativo e consulta ao capítulo completo por meio de APIs bíblicas externas.

O projeto foi desenvolvido como uma aplicação front-end com HTML, CSS e JavaScript, sem necessidade de frameworks ou backend próprio.

## 2. Objetivos

### 2.1 Objetivo geral

Desenvolver um jogo interativo que auxilie no aprendizado e na identificação de passagens bíblicas por meio de desafios e pontuação.

### 2.2 Objetivos específicos

- apresentar descrições de histórias e passagens bíblicas;
- permitir a seleção entre três níveis de dificuldade;
- validar respostas completas ou parciais;
- aplicar regras de pontuação conforme o resultado;
- disponibilizar dicas e desconto de pontos;
- permitir consulta ao capítulo completo da passagem;
- orientar o usuário por meio de um tutorial;
- proporcionar uma interface responsiva para diferentes tamanhos de tela.

## 3. Tecnologias utilizadas

| Tecnologia | Finalidade |
|---|---|
| HTML5 | Estrutura da interface e dos componentes da aplicação |
| CSS3 | Layout, estilo visual, responsividade e modais |
| JavaScript | Lógica do jogo, dados, validação e interatividade |
| API ABíbliaDigital | Fonte principal para obtenção de capítulos bíblicos |
| Bible API | Fonte alternativa para obtenção de capítulos |
| localStorage | Armazenamento de preferências e estado local |
| GitHub Pages | Hospedagem da aplicação |

## 4. Requisitos

### 4.1 Requisitos funcionais

| Código | Descrição |
|---|---|
| RF01 | O sistema deve apresentar uma passagem bíblica aleatória |
| RF02 | O sistema deve permitir selecionar o nível Fácil, Médio ou Difícil |
| RF03 | O sistema deve permitir informar um livro, capítulo e versículo |
| RF04 | O sistema deve validar a referência informada pelo jogador |
| RF05 | O sistema deve atribuir pontos por acerto parcial ou completo |
| RF06 | O sistema deve permitir solicitar uma dica |
| RF07 | O sistema deve descontar pontos ao utilizar uma dica |
| RF08 | O sistema deve impedir mais de uma dica por pergunta |
| RF09 | O sistema deve bloquear novas respostas após o término da rodada |
| RF10 | O sistema deve permitir avançar para a próxima pergunta |
| RF11 | O sistema deve mostrar o capítulo completo da resposta |
| RF12 | O sistema deve apresentar um tutorial na primeira utilização |
| RF13 | O sistema deve permitir reabrir o tutorial |

### 4.2 Requisitos não funcionais

| Código | Descrição |
|---|---|
| RNF01 | A interface deve ser responsiva |
| RNF02 | A aplicação deve executar em navegadores modernos |
| RNF03 | O projeto não deve exigir instalação de dependências |
| RNF04 | As informações locais devem ser preservadas com `localStorage` |
| RNF05 | O sistema deve continuar operando caso uma API externa falhe |

## 5. Arquitetura do sistema

O projeto segue uma arquitetura simples baseada em páginas estáticas e módulos separados por responsabilidade:

```text
┌─────────────────────┐
│      Navegador      │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│     index.html      │ ← Estrutura da interface
└─────────┬───────────┘
          │
     ┌────┴────┐
     ▼         ▼
┌─────────┐  ┌────────────┐
│style.css│  │ script.js │
│Visual   │  │Dados e lógica│
└─────────┘  └──────┬─────┘
                    │
              ┌─────┴──────┐
              ▼            ▼
       localStorage   APIs bíblicas
```

### 5.1 Camada de apresentação

Responsável pela interface visual e pelos elementos exibidos ao usuário. Está implementada principalmente em `index.html` e `style.css`.

### 5.2 Camada de lógica

Responsável pelas regras do jogo, pontuação, embaralhamento, tutorial, validação e integração. Está implementada em `script.js`.

### 5.3 Camada de dados

Os dados das 66 referências bíblicas e das passagens ficam armazenados em constantes JavaScript. Não há banco de dados ou servidor próprio.

## 6. Estrutura de arquivos

| Arquivo | Responsabilidade |
|---|---|
| `index.html` | Estrutura da página, campos, botões e modais |
| `style.css` | Layout, cores, tipografia e responsividade |
| `script.js` | Dados, pontuação, tutorial e integração com APIs |
| `README.md` | Manual rápido e instruções de utilização |
| `DOCUMENTACAO.md` | Documentação técnica e acadêmica do projeto |

## 7. Funcionalidades

### 7.1 Seleção de dificuldade

A aplicação possui três níveis:

- **Fácil:** histórias conhecidas;
- **Médio:** parábolas e profetas;
- **Difícil:** referências específicas, genealogias e leis.

Cada nível possui 10 passagens, totalizando 30 registros no banco de dados interno.

### 7.2 Embaralhamento das perguntas

A função `preparePassages()` filtra as perguntas pelo nível selecionado e utiliza um algoritmo de embaralhamento para alterar a ordem das passagens.

### 7.3 Tutorial

Na primeira utilização, a aplicação apresenta um tutorial composto por 7 etapas:

1. objetivo do jogo;
2. escolha do nível;
3. leitura da história;
4. utilização da dica;
5. preenchimento da referência;
6. conferência da resposta;
7. consulta ao capítulo completo.

O tutorial pode ser aberto novamente pelo botão **Como jogar**.

### 7.4 Seleção do livro e capítulo

O seletor de livros é organizado em Antigo Testamento e Novo Testamento. Ao escolher um livro, o campo de capítulo é preenchido dinamicamente com o número correto de capítulos.

### 7.5 Dicas

Cada passagem possui uma dica opcional. A dica pode ser usada uma única vez por rodada e reduz o saldo em 15 pontos.

### 7.6 Resposta

Ao clicar em **Responder**, o sistema verifica:

- se o livro está correto;
- se o capítulo está correto;
- se o versículo está correto.

Após a resposta, os campos e ações são bloqueados até que o usuário avance para uma nova pergunta.

### 7.7 Consulta ao capítulo completo

O botão **Ler capítulo completo** abre uma janela modal com os versículos do capítulo correspondente. A consulta é realizada por APIs externas.

## 8. Regras de pontuação

### 8.1 Pontos-base

| Resultado da resposta | Pontos-base |
|---|---:|
| Livro, capítulo e versículo corretos | 250 |
| Livro e capítulo corretos | 100 |
| Apenas o livro correto | 50 |
| Resposta incorreta | 0 |

### 8.2 Multiplicador por dificuldade

| Dificuldade | Multiplicador |
|---|---:|
| Fácil | 1 |
| Médio | 1,5 |
| Difícil | 2 |

Os pontos recebidos são calculados pela fórmula:

```text
pontos = pontos-base × multiplicador da dificuldade
```

O valor é arredondado para o inteiro mais próximo. Por exemplo, no modo Médio, uma resposta exata vale:

```text
250 × 1,5 = 375 pontos
```

### 8.3 Uso da dica

O uso da dica reduz o saldo em 15 pontos:

```text
novo saldo = saldo atual - 15
```

O sistema usa `Math.max(0, saldo - 15)` para impedir que a pontuação fique negativa.

## 9. Fluxo de funcionamento

```text
Início da aplicação
       │
       ▼
Usuário acessa o jogo pela primeira vez?
       ├── Sim → Exibir tutorial
       └── Não → Carregar a interface
       │
       ▼
Selecionar dificuldade
       │
       ▼
Preparar e embaralhar passagens
       │
       ▼
Exibir história
       │
       ▼
Usuário solicita dica ou informa a referência?
       ├── Dica → Mostrar pista e descontar 15 pontos
       └── Responder → Validar livro, capítulo e versículo
       │
       ▼
Exibir resultado e pontuação
       │
       ▼
Opcional: consultar capítulo completo
       │
       ▼
Avançar para próxima história
```

## 10. Armazenamento local

A aplicação utiliza `localStorage` para salvar pequenas informações no navegador.

### 10.1 Tutorial visualizado

```javascript
localStorage.setItem('tutorialSeen', 'true');
```

Esse valor impede que o tutorial seja exibido automaticamente em todas as visitas.

### 10.2 Última passagem inicial

Para cada dificuldade, é armazenada a referência da primeira passagem da última sessão:

```text
lastStartingPassage_facil
lastStartingPassage_medio
lastStartingPassage_dificil
```

Essa informação ajuda a evitar que uma passagem consecutiva seja reutilizada como primeira pergunta de uma nova rodada.

## 11. Integrações externas

### 11.1 ABíbliaDigital

A primeira tentativa utiliza a API da ABíbliaDigital com a versão NVI:

```text
https://www.abibliadigital.com.br/api/verses/nvi/{livro}/{capitulo}
```

### 11.2 Bible API

Caso a primeira API falhe ou não retorne dados válidos, a aplicação utiliza a Bible API com a tradução Almeida:

```text
https://bible-api.com/{livro} {capitulo}?translation=almeida
```

O uso de uma segunda fonte funciona como mecanismo de fallback. Caso ambas falhem, uma mensagem informa que o capítulo não pôde ser carregado.

## 12. Interfaces da aplicação

### 12.1 Painel principal

O painel principal contém:

- título da aplicação;
- botão de tutorial;
- pontuação;
- seleção de dificuldade;
- descrição da passagem;
- campo de dica;
- seleção de livro;
- seleção de capítulo;
- campo de versículo;
- botão de resposta;
- feedback do resultado;
- botão para ler o capítulo;
- botão para avançar.

### 12.2 Responsividade

A folha de estilos utiliza unidades relativas e regras de media query para adaptar o jogo a telas menores. Em dispositivos com largura máxima de 540 pixels:

- o conteúdo do jogo recebe espaçamentos menores;
- o cabeçalho adapta o posicionamento dos elementos;
- os botões do tutorial são reorganizados;
- os modais mantêm rolagem vertical quando necessário.

### 12.3 Modais

O projeto possui dois modais:

- **Tutorial:** apresenta as instruções em etapas;
- **Capítulo completo:** exibe o texto bíblico obtido pelas APIs.

Os modais podem ser fechados pelo botão de fechar, por clique externo ou pela tecla `Esc`.

## 13. Testes e validações

Como o projeto utiliza JavaScript no navegador, os testes podem ser realizados manualmente por meio das principais interações.

### 13.1 Casos de teste

| Código | Cenário | Entrada | Resultado esperado |
|---|---|---|---|
| CT01 | Resposta completa correta | Livro, capítulo e versículo corretos | Concede 250 pontos-base multiplicados pela dificuldade |
| CT02 | Livro e capítulo corretos | Referência parcialmente correta | Concede 100 pontos-base multiplicados pela dificuldade |
| CT03 | Apenas livro correto | Livro correto e restante incorreto | Concede 50 pontos-base multiplicados pela dificuldade |
| CT04 | Resposta incorreta | Nenhum campo correto | Concede 0 pontos |
| CT05 | Campos vazios | Campos não preenchidos | Exibe alerta solicitando os dados |
| CT06 | Solicitação de dica | Primeira dica da pergunta | Exibe pista e desconta 15 pontos |
| CT07 | Dica repetida | Segunda solicitação na mesma pergunta | Não permite novo desconto |
| CT08 | Mudança de dificuldade | Selecionar outro nível | Atualiza a lista de passagens |
| CT09 | Próxima pergunta | Após responder | Reativa os campos e carrega outra passagem |
| CT10 | Leitura do capítulo | Após responder | Abre o modal com o capítulo |
| CT11 | API indisponível | Falha nas duas APIs | Exibe mensagem de indisponibilidade |
| CT12 | Tutorial já visto | Segundo acesso ao site | Não exibe o tutorial automaticamente |

### 13.2 Validações realizadas

- validação da existência dos campos obrigatórios;
- conversão dos números de capítulo e versículo;
- confirmação do nível de dificuldade;
- prevenção de respostas duplicadas;
- prevenção de uso duplicado da dica;
- atualização da pontuação;
- fechamento dos modais por diferentes formas;
- carregamento e atualização automática dos capítulos.

## 14. Execução e publicação

### 14.1 Execução local

O projeto pode ser executado por meio de um servidor local:

```bash
python -m http.server 8000
```

Em seguida, acesse:

```text
http://localhost:8000
```

Também é possível usar a extensão Live Server do VS Code.

### 14.2 Publicação no GitHub Pages

O projeto está disponível em:

```text
https://murilosantos22.github.io/jogo-de-adivinhacao/
```

Como o projeto não possui backend ou processo de compilação, os arquivos podem ser publicados diretamente em um serviço de hospedagem de páginas estáticas.

## 15. Limitações

- O projeto não possui cadastro ou autenticação de jogadores;
- a pontuação não é salva permanentemente entre sessões;
- não existe banco de dados;
- não há ranking global;
- não há áudio ou recursos multimídia;
- o conteúdo completo depende da disponibilidade das APIs externas;
- as diferenças de tradução podem interferir na leitura completa;
- o banco interno contém 30 passagens, portanto o conteúdo é limitado;
- não há painel administrativo para inclusão de perguntas.

## 16. Possíveis melhorias

- criar uma base de dados maior de passagens;
- adicionar conta de usuário e histórico de partidas;
- implementar ranking local ou global;
- salvar a pontuação no banco de dados;
- adicionar cronômetro para cada pergunta;
- criar modo cooperativo ou multiplayer;
- permitir traduções bíblicas diferentes;
- adicionar sons e animações;
- implementar testes automatizados com Jest ou Cypress;
- criar painel administrativo para cadastrar novas perguntas;
- adicionar modo offline para o jogo principal;
- melhorar a acessibilidade com navegação por teclado e leitores de tela;
- utilizar um framework front-end para projetos futuros;

## 17. Conclusão

O projeto **Adivinhe a Passagem** demonstra a utilização integrada de HTML, CSS e JavaScript para o desenvolvimento de uma aplicação web interativa.

A aplicação transforma o estudo bíblico em uma experiência de perguntas e respostas, com níveis de dificuldade, pontuação, dicas, tutorial e consulta de capítulos completos.

Apesar de utilizar uma estrutura simples e dados armazenados no próprio JavaScript, o projeto apresenta diferentes responsabilidades organizadas em arquivos separados e mecanismos úteis para a manutenção e expansão, como o banco de passagens, o sistema de dificuldade e o uso de APIs com alternativa de fallback.

Os recursos implementados atendem ao objetivo principal da atividade, proporcionando uma aplicação funcional, educativa e de fácil utilização em navegadores modernos.

---

**Projeto:** Adivinhe a Passagem  
**Desenvolvedor:** Murilo Santos  
**Repositório:** https://github.com/MuriloSantos22/jogo-de-adivinhacao  
