# 📜 Adivinhe a Passagem

Jogo bíblico de perguntas e respostas: leia uma descrição, descubra o livro, o capítulo e o versículo, e acumule pontos.

**Criado por Murilo Santos**

---

## ✨ Sobre o projeto

O jogo apresenta histórias e passagens bíblicas em ordem aleatória. O jogador escolhe a referência que acredita ser correta e recebe pontos conforme a resposta e o nível de dificuldade. Depois de responder, também pode consultar o capítulo completo.

O projeto usa somente HTML, CSS e JavaScript — não requer instalação de pacotes nem processo de compilação.

## 🗂️ Arquivos

| Arquivo | Responsabilidade |
| --- | --- |
| [`index.html`](./index.html) | Estrutura da página, controles do jogo, seletor de dificuldade e janela de leitura. Também define o título da aba e o ícone. |
| [`style.css`](./style.css) | Aparência, cores, disposição dos elementos, estados dos botões e estilos do modal de leitura. |
| [`script.js`](./script.js) | Banco de passagens, seleção aleatória, pontuação, validação das respostas e consulta às APIs bíblicas. |

## 🚀 Como executar

1. Abra a pasta do projeto no VS Code.
2. Inicie um servidor local, por exemplo com a extensão **Live Server**, ou pelo terminal:

   ```bash
   python -m http.server 8000
   ```

3. Acesse [`http://localhost:8000`](http://localhost:8000) no navegador.

O jogo não precisa de servidor para as perguntas e respostas, mas servir a página por HTTP costuma ser mais confiável para a consulta do capítulo completo. Essa função depende de conexão com a internet e da disponibilidade das APIs externas; restrições de CORS ou indisponibilidade dos serviços podem impedir o carregamento.

## 🎮 Como jogar

Ao abrir o jogo pela primeira vez, um tutorial completo é exibido em várias etapas: objetivo, níveis de dificuldade, leitura da história, uso da dica, preenchimento da referência, pontuação e continuação do jogo. O tutorial pode ser aberto novamente a qualquer momento pelo botão **❓ Como jogar** no cabeçalho.

1. Escolha **Fácil**, **Médio** ou **Difícil**.
2. Leia a descrição da passagem.
3. Se quiser, peça uma dica. A dica custa 15 pontos e só pode ser usada uma vez por pergunta.
4. Selecione o livro e o capítulo, informe o versículo e clique em **Responder**.
5. Leia o resultado ou consulte o capítulo completo. Clique em **Próxima história** para continuar.

Após responder, os campos e a dica ficam desativados até a próxima pergunta, evitando alterações ou pontuação repetida na mesma rodada.

### Pontuação

| Resultado | Pontos-base |
| --- | ---: |
| Livro, capítulo e versículo corretos | 250 |
| Livro e capítulo corretos | 100 |
| Apenas o livro correto | 50 |
| Resposta incorreta | 0 |

Os pontos-base são multiplicados pela dificuldade: **Fácil ×1**, **Médio ×1,5** e **Difícil ×2**. Usar uma dica desconta 15 pontos, sem deixar o total abaixo de zero.

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

- **Embaralhamento:** `preparePassages()` separa as perguntas do modo selecionado e embaralha sua ordem. A primeira passagem da sessão fica registrada no `localStorage` por dificuldade para evitar começar pela mesma pergunta na próxima visita.
- **Carregamento da pergunta:** `loadQuestion()` mostra a descrição, limpa as respostas anteriores e reativa os controles.
- **Dica:** `showHint()` exibe a dica, aplica o desconto e impede que ela seja usada novamente naquela pergunta.
- **Resposta:** `checkAnswer()` compara livro, capítulo e versículo, calcula os pontos e mostra o feedback.
- **Próxima pergunta:** `nextQuestion()` avança dentro da lista embaralhada do modo atual.
- **Leitura do capítulo:** `openChapterModal()` solicita o capítulo completo e mostra o resultado em uma janela modal. `fetchChapterFromApi()` tenta primeiro a ABíbliaDigital (NVI) e depois a bible-api.com (Almeida).

## 🎨 Personalização

- **Perguntas, dicas, referências e pontuação:** edite `script.js`.
- **Cores, espaçamentos e aparência:** ajuste as variáveis no início de `style.css`, como `--bg-color`, `--gold` e `--card-bg`.
- **Texto e elementos da página:** altere a estrutura em `index.html`.

---

<p align="center">Feito com dedicação por <strong>Murilo Santos</strong> 📖</p>
