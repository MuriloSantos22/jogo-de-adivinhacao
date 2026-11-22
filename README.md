# 📜 Adivinhe a Passagem

Jogo bíblico de perguntas e respostas: leia uma descrição, descubra o livro, o capítulo e o versículo, e acumule pontos.

**Criado por Murilo Santos**

---

## ✨ Sobre o projeto

O jogo apresenta histórias e passagens bíblicas em ordem aleatória. O jogador escolhe a referência que acredita ser correta e recebe pontos conforme a resposta e o nível de dificuldade.

Na primeira visita, um tutorial em várias etapas explica a mecânica do jogo. Depois, ele pode ser aberto novamente a qualquer momento pelo botão **❓ Como jogar**. A partida também permite consultar o capítulo completo da passagem em uma janela de leitura.

O projeto usa somente HTML, CSS e JavaScript — não requer instalação de pacotes nem processo de compilação.

## 🗂️ Arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| [`index.html`](./index.html) | Estrutura da página, controles do jogo, seletor de dificuldade, tutorial e janela de leitura do capítulo. Também define o título da aba e o ícone. |
| [`style.css`](./style.css) | Aparência, cores, disposição dos elementos, estados dos botões e estilos dos modais de tutorial e leitura. |
| [`script.js`](./script.js) | Banco de passagens, seleção aleatória, tutorial, pontuação, validação das respostas e consulta às APIs bíblicas. |

## 🚀 Como executar

1. Abra a pasta do projeto no VS Code.
2. Inicie um servidor local, por exemplo com a extensão **Live Server**, ou pelo terminal:

   ```bash
   python -m http.server 8000
   ```

3. Acesse [`http://localhost:8000`](http://localhost:8000) no navegador.

O jogo não precisa de servidor para as perguntas e respostas, mas servir a página por HTTP costuma ser mais confiável para consultar o capítulo completo. Essa função depende de conexão com a internet e pode usar duas APIs bíblicas.

## 🎮 Tutorial de como jogar

Ao abrir o jogo pela primeira vez, o **tutorial completo** é exibido em 7 etapas. Ele pode ser fechado ou retomado a qualquer momento pelo botão **Como jogar**, localizado no cabeçalho.

### 1. Conheça o objetivo

Leia o resumo de uma história ou passagem da Bíblia e descubra:

- o livro;
- o capítulo;
- o versículo.

Exemplo de resposta: **Gênesis 1:2**.

### 2. Escolha a dificuldade

Antes de começar, selecione **Fácil**, **Médio** ou **Difícil**:

- **Fácil:** histórias conhecidas;
- **Médio:** parábolas e profetas;
- **Difícil:** referências específicas, leis e genealogias.

O nível escolhido também altera a quantidade de pontos ganhos.

### 3. Leia a história

Leia com atenção o texto apresentado na caixa dourada. Observe nomes de pessoas, lugares, acontecimentos e detalhes que possam indicar a resposta correta.

### 4. Use uma dica, se precisar

Clique em **💡 Dica (-15 pts)** para revelar uma pista sobre o trecho.

- O desconto é de 15 pontos;
- a dica só pode ser usada uma vez por pergunta;
- o total nunca fica abaixo de zero;
- depois de responder, ela fica desativada até a próxima história.

### 5. Preencha a referência

1. Selecione o **livro**;
2. escolha o **capítulo**;
3. digite o número do **versículo**;
4. clique em **Responder**.

Os capítulos disponíveis são definidos automaticamente pelo livro escolhido. Por exemplo, Gênesis oferece opções de 1 até 50.

### 6. Confira o resultado

O jogo mostra a resposta correta e a pontuação recebida:

| Resultado | Pontos-base |
| --- | ---: |
| Livro, capítulo e versículo corretos | 250 |
| Livro e capítulo corretos | 100 |
| Apenas o livro correto | 50 |
| Resposta incorreta | 0 |

Os pontos-base são multiplicados pela dificuldade:

- **Fácil:** ×1;
- **Médio:** ×1,5;
- **Difícil:** ×2.

Exemplo: uma resposta exata no modo Difícil vale 500 pontos-base multiplicados pela dificuldade, ou seja, 500 pontos.

Após responder, os campos de livro, capítulo e versículo e os dois botões de ação são desativados para evitar alterações ou pontuação repetida na mesma pergunta.

### 7. Continue aprendendo

Use **📖 Ler capítulo completo** para consultar o contexto da passagem em uma janela modal. Feche essa janela com o botão **✕**, clicando fora dela ou pressionando **Esc**.

Quando terminar, clique em **Próxima história** para avançar. Os controles são reativados automaticamente.

## 📚 Banco de passagens

O array `passages`, em `script.js`, guarda as perguntas. Cada item contém:

| Campo | Descrição |
| --- | --- |
| `difficulty` | Modo da pergunta: `facil`, `medio` ou `dificil`. |
| `story` | Descrição apresentada ao jogador. |
| `hint` | Texto mostrado ao pedir uma dica. |
| `book` | Livro que corresponde à resposta. |
| `chapter` | Capítulo correto. |
| `verse` | Versículo correto. |

Há **30 passagens**, distribuídas igualmente: 10 por dificuldade. Para acrescentar uma, inclua outro objeto no array, preenchendo todos os campos e usando um livro presente em `BIBLE_BOOKS`.

`BIBLE_BOOKS` contém os 66 livros, seus números de capítulos, abreviações e nomes em inglês. O código usa esses dados para preencher o seletor de livros e montar as opções de capítulo.

## ⚙️ Lógica principal

- **Embaralhamento:** `preparePassages()` separa as perguntas do modo selecionado e embaralha sua ordem. A primeira passagem da sessão é registrada no `localStorage` por dificuldade para evitar repetições consecutivas.
- **Carregamento da pergunta:** `loadQuestion()` mostra a descrição, limpa as respostas anteriores e reativa os controles.
- **Tutorial:** `tutorialSteps` contém as 7 etapas exibidas pelos modais de orientação. `openTutorial()` inicia a apresentação e `closeTutorial()` registra que o jogador já viu o tutorial.
- **Dica:** `showHint()` exibe a dica, aplica o desconto e impede que ela seja usada novamente naquela pergunta.
- **Resposta:** `checkAnswer()` compara livro, capítulo e versículo, calcula os pontos e mostra o feedback.
- **Próxima pergunta:** `nextQuestion()` avança dentro da lista embaralhada do modo atual.
- **Leitura do capítulo:** `openChapterModal()` solicita o capítulo completo e mostra o resultado em uma janela modal. `fetchChapterFromApi()` tenta primeiro a ABíbliaDigital (NVI) e depois usa a Bible API com Almeida como alternativa.

## 🎨 Personalização

- **Perguntas, dicas, referências, tutorial e pontuação:** edite `script.js`.
- **Cores, espaçamentos e aparência dos modais:** ajuste as variáveis e os estilos em `style.css`, como `--bg-color`, `--gold` e `--card-bg`.
- **Texto e elementos da página:** altere a estrutura em `index.html`.

---

<p align="center">Feito com dedicação por <strong>Murilo Santos</strong> 📖</p>
