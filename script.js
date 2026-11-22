// 66 livros da Bíblia com número exato de capítulos, abreviação e nome em inglês para API
const BIBLE_BOOKS = [
    // Antigo Testamento (39)
    { name: "Gênesis", chapters: 50, abbrev: "gn", enName: "Genesis", testament: "AT" },
    { name: "Êxodo", chapters: 40, abbrev: "ex", enName: "Exodus", testament: "AT" },
    { name: "Levítico", chapters: 27, abbrev: "lv", enName: "Leviticus", testament: "AT" },
    { name: "Números", chapters: 36, abbrev: "nm", enName: "Numbers", testament: "AT" },
    { name: "Deuteronômio", chapters: 34, abbrev: "dt", enName: "Deuteronomy", testament: "AT" },
    { name: "Josué", chapters: 24, abbrev: "js", enName: "Joshua", testament: "AT" },
    { name: "Juízes", chapters: 21, abbrev: "jz", enName: "Judges", testament: "AT" },
    { name: "Rute", chapters: 4, abbrev: "rt", enName: "Ruth", testament: "AT" },
    { name: "1 Samuel", chapters: 31, abbrev: "1sm", enName: "1 Samuel", testament: "AT" },
    { name: "2 Samuel", chapters: 24, abbrev: "2sm", enName: "2 Samuel", testament: "AT" },
    { name: "1 Reis", chapters: 22, abbrev: "1rs", enName: "1 Kings", testament: "AT" },
    { name: "2 Reis", chapters: 25, abbrev: "2rs", enName: "2 Kings", testament: "AT" },
    { name: "1 Crônicas", chapters: 29, abbrev: "1cr", enName: "1 Chronicles", testament: "AT" },
    { name: "2 Crônicas", chapters: 36, abbrev: "2cr", enName: "2 Chronicles", testament: "AT" },
    { name: "Esdras", chapters: 10, abbrev: "ed", enName: "Ezra", testament: "AT" },
    { name: "Neemias", chapters: 13, abbrev: "ne", enName: "Nehemiah", testament: "AT" },
    { name: "Ester", chapters: 10, abbrev: "et", enName: "Esther", testament: "AT" },
    { name: "Jó", chapters: 42, abbrev: "job", enName: "Job", testament: "AT" },
    { name: "Salmos", chapters: 150, abbrev: "sl", enName: "Psalms", testament: "AT" },
    { name: "Provérbios", chapters: 31, abbrev: "pv", enName: "Proverbs", testament: "AT" },
    { name: "Eclesiastes", chapters: 12, abbrev: "ec", enName: "Ecclesiastes", testament: "AT" },
    { name: "Cânticos", chapters: 8, abbrev: "ct", enName: "Song of Solomon", testament: "AT" },
    { name: "Isaías", chapters: 66, abbrev: "is", enName: "Isaiah", testament: "AT" },
    { name: "Jeremias", chapters: 52, abbrev: "jr", enName: "Jeremiah", testament: "AT" },
    { name: "Lamentações", chapters: 5, abbrev: "lm", enName: "Lamentations", testament: "AT" },
    { name: "Ezequiel", chapters: 48, abbrev: "ez", enName: "Ezekiel", testament: "AT" },
    { name: "Daniel", chapters: 12, abbrev: "dn", enName: "Daniel", testament: "AT" },
    { name: "Oséias", chapters: 14, abbrev: "os", enName: "Hosea", testament: "AT" },
    { name: "Joel", chapters: 3, abbrev: "jl", enName: "Joel", testament: "AT" },
    { name: "Amós", chapters: 9, abbrev: "am", enName: "Amos", testament: "AT" },
    { name: "Obadias", chapters: 1, abbrev: "ob", enName: "Obadiah", testament: "AT" },
    { name: "Jonas", chapters: 4, abbrev: "jn", enName: "Jonah", testament: "AT" },
    { name: "Miquéias", chapters: 7, abbrev: "mq", enName: "Micah", testament: "AT" },
    { name: "Naum", chapters: 3, abbrev: "na", enName: "Nahum", testament: "AT" },
    { name: "Habacuque", chapters: 3, abbrev: "hc", enName: "Habakkuk", testament: "AT" },
    { name: "Sofonias", chapters: 3, abbrev: "sf", enName: "Zephaniah", testament: "AT" },
    { name: "Ageu", chapters: 2, abbrev: "ag", enName: "Haggai", testament: "AT" },
    { name: "Zacarias", chapters: 14, abbrev: "zc", enName: "Zechariah", testament: "AT" },
    { name: "Malaquias", chapters: 4, abbrev: "ml", enName: "Malachi", testament: "AT" },

    // Novo Testamento (27)
    { name: "Mateus", chapters: 28, abbrev: "mt", enName: "Matthew", testament: "NT" },
    { name: "Marcos", chapters: 16, abbrev: "mc", enName: "Mark", testament: "NT" },
    { name: "Lucas", chapters: 24, abbrev: "lc", enName: "Luke", testament: "NT" },
    { name: "João", chapters: 21, abbrev: "jo", enName: "John", testament: "NT" },
    { name: "Atos", chapters: 28, abbrev: "atos", enName: "Acts", testament: "NT" },
    { name: "Romanos", chapters: 16, abbrev: "rm", enName: "Romans", testament: "NT" },
    { name: "1 Coríntios", chapters: 16, abbrev: "1co", enName: "1 Corinthians", testament: "NT" },
    { name: "2 Coríntios", chapters: 13, abbrev: "2co", enName: "2 Corinthians", testament: "NT" },
    { name: "Gálatas", chapters: 6, abbrev: "gl", enName: "Galatians", testament: "NT" },
    { name: "Efésios", chapters: 6, abbrev: "ef", enName: "Ephesians", testament: "NT" },
    { name: "Filipenses", chapters: 4, abbrev: "fp", enName: "Philippians", testament: "NT" },
    { name: "Colossenses", chapters: 4, abbrev: "cl", enName: "Colossians", testament: "NT" },
    { name: "1 Tessalonicenses", chapters: 5, abbrev: "1ts", enName: "1 Thessalonians", testament: "NT" },
    { name: "2 Tessalonicenses", chapters: 3, abbrev: "2ts", enName: "2 Thessalonians", testament: "NT" },
    { name: "1 Timóteo", chapters: 6, abbrev: "1tm", enName: "1 Timothy", testament: "NT" },
    { name: "2 Timóteo", chapters: 4, abbrev: "2tm", enName: "2 Timothy", testament: "NT" },
    { name: "Tito", chapters: 3, abbrev: "tt", enName: "Titus", testament: "NT" },
    { name: "Filemom", chapters: 1, abbrev: "fm", enName: "Philemon", testament: "NT" },
    { name: "Hebreus", chapters: 13, abbrev: "hb", enName: "Hebrews", testament: "NT" },
    { name: "Tiago", chapters: 5, abbrev: "tg", enName: "James", testament: "NT" },
    { name: "1 Pedro", chapters: 5, abbrev: "1pe", enName: "1 Peter", testament: "NT" },
    { name: "2 Pedro", chapters: 3, abbrev: "2pe", enName: "2 Peter", testament: "NT" },
    { name: "1 João", chapters: 5, abbrev: "1jo", enName: "1 John", testament: "NT" },
    { name: "2 João", chapters: 1, abbrev: "2jo", enName: "2 John", testament: "NT" },
    { name: "3 João", chapters: 1, abbrev: "3jo", enName: "3 John", testament: "NT" },
    { name: "Judas", chapters: 1, abbrev: "jd", enName: "Jude", testament: "NT" },
    { name: "Apocalipse", chapters: 22, abbrev: "ap", enName: "Revelation", testament: "NT" }
];

const passages = [
    // FÁCIL — Histórias famosas
    {
        difficulty: "facil",
        story: "Um jovem pastor rejeitou a armadura pesada de um rei e enfrentou um guerreiro gigante usando apenas uma funda e cinco pedras lisas tiradas de um riacho.",
        hint: "Antigo Testamento • Aconteceu no Vale de Elá.",
        book: "1 Samuel",
        chapter: 17,
        verse: 40
    },
    {
        difficulty: "facil",
        story: "Durante uma forte tempestade no mar, os discípulos entraram em pânico enquanto Jesus dormia na popa do barco. Ao acordar, Ele repreendeu o vento e o mar se acalmou.",
        hint: "Novo Testamento • O evangelho escrito por um discípulo cobrador de impostos.",
        book: "Mateus",
        chapter: 8,
        verse: 24
    },
    {
        difficulty: "facil",
        story: "No princípio, Deus criou os céus e a terra, que estava sem forma e vazia, e trevas cobriam a face do abismo enquanto o Espírito de Deus pairava sobre as águas.",
        hint: "Antigo Testamento • Primeiro capítulo da Bíblia.",
        book: "Gênesis",
        chapter: 1,
        verse: 2
    },
    {
        difficulty: "facil",
        story: "De dentro da arca, Noé enviou uma ave que voltou com uma folha verde de oliveira, mostrando que as águas haviam baixado sobre a terra.",
        hint: "Antigo Testamento • Noé recebeu um sinal depois do dilúvio.",
        book: "Gênesis",
        chapter: 8,
        verse: 11
    },
    {
        difficulty: "facil",
        story: "Um bebê nasceu em Belém e foi colocado em uma manjedoura, pois não havia lugar para os pais na hospedaria.",
        hint: "Novo Testamento • O nascimento de Jesus.",
        book: "Lucas",
        chapter: 2,
        verse: 7
    },
    {
        difficulty: "facil",
        story: "Maria Madalena encontrou o sepulcro aberto e ouviu um jovem vestido de branco anunciar que Jesus havia ressuscitado.",
        hint: "Novo Testamento • Evangelho escrito por um dos discípulos.",
        book: "Marcos",
        chapter: 16,
        verse: 6
    },
    {
        difficulty: "facil",
        story: "Um homem que havia sido cego contou aos fariseus que Jesus havia colocado barro em seus olhos e que ele passou a enxergar.",
        hint: "Novo Testamento • Jesus realizou esse milagre perto de Jerusalém.",
        book: "João",
        chapter: 9,
        verse: 11
    },
    {
        difficulty: "facil",
        story: "Os discípulos estavam reunidos quando soprou um vento forte e apareceram línguas como de fogo sobre cada um deles.",
        hint: "Novo Testamento • Esse evento aconteceu no Pentecostes.",
        book: "Atos",
        chapter: 2,
        verse: 3
    },
    {
        difficulty: "facil",
        story: "Jesus caminhou sobre o mar durante a noite e os discípulos pensaram que estavam vendo um fantasma.",
        hint: "Novo Testamento • Aconteceu pouco depois da multiplicação dos pães.",
        book: "Mateus",
        chapter: 14,
        verse: 26
    },
    {
        difficulty: "facil",
        story: "Deus falou a Moisés por meio de uma sarça que ardia em chamas, mas não se consumia.",
        hint: "Antigo Testamento • Segundo livro da Bíblia.",
        book: "Êxodo",
        chapter: 3,
        verse: 2
    },

    // MÉDIO — Parábolas e profetas
    {
        difficulty: "medio",
        story: "Por se recusar a adorar uma estátua de ouro, três jovens foram lançados em uma fornalha aquecida sete vezes mais que o normal, mas caminharam ilesos lá dentro.",
        hint: "Antigo Testamento • Livro de um profeta na Babilônia.",
        book: "Daniel",
        chapter: 3,
        verse: 21
    },
    {
        difficulty: "medio",
        story: "Um homem descia de Jerusalém para Jericó quando foi assaltado e espancado; um sacerdote e um levita passaram ao largo, mas um samaritano cuidou dele.",
        hint: "Novo Testamento • Parábola contada por Jesus a um intérprete da Lei.",
        book: "Lucas",
        chapter: 10,
        verse: 30
    },
    {
        difficulty: "medio",
        story: "Enviado para pregar contra a maldade de Nínive, o profeta fugiu de navio para Társis, foi lançado ao mar na tempestade e engolido por um grande peixe.",
        hint: "Antigo Testamento • Livro profético de apenas 4 capítulos.",
        book: "Jonas",
        chapter: 1,
        verse: 17
    },
    {
        difficulty: "medio",
        story: "Jesus contou que um pastor deixou noventa e nove ovelhas no deserto para procurar aquela que havia se perdido.",
        hint: "Novo Testamento • Uma das parábolas do capítulo que começa pela ovelha perdida.",
        book: "Lucas",
        chapter: 15,
        verse: 4
    },
    {
        difficulty: "medio",
        story: "Um filho pediu a herança ao pai, gastou tudo no estrangeiro e depois voltou arrependido, onde recebeu um anel e uma festa.",
        hint: "Novo Testamento • Parábola conhecida como a do filho pródigo.",
        book: "Lucas",
        chapter: 15,
        verse: 20
    },
    {
        difficulty: "medio",
        story: "Elias colocou lenha no altar do Monte Carmelo e orou; então fogo desceu do céu e consumiu a oferta.",
        hint: "Antigo Testamento • Confronto entre Elias e os profetas de Baal.",
        book: "1 Reis",
        chapter: 18,
        verse: 38
    },
    {
        difficulty: "medio",
        story: "Gideão reduziu seu exército a três centenas de homens e venceu o acampamento inimigo com trombetas, jarros e tochas.",
        hint: "Antigo Testamento • Juiz de Israel usado por Deus contra os midianitas.",
        book: "Juízes",
        chapter: 7,
        verse: 20
    },
    {
        difficulty: "medio",
        story: "Uma mulher samaritana encontrou Jesus junto ao poço e recebeu a promessa de uma água que saciaria sua sede para sempre.",
        hint: "Novo Testamento • O encontro aconteceu no sexto capítulo de João.",
        book: "João",
        chapter: 4,
        verse: 14
    },
    {
        difficulty: "medio",
        story: "Uma mulher perdeu uma moeda de prata, acendeu uma lâmpada, varreu a casa e procurou com cuidado até encontrá-la.",
        hint: "Novo Testamento • Parábola contada por Jesus logo após a ovelha perdida.",
        book: "Lucas",
        chapter: 15,
        verse: 8
    },
    {
        difficulty: "medio",
        story: "Pedro recebeu um alimento em uma visão e ouviu a voz ordenar que não considerasse impuro aquilo que Deus havia purificado.",
        hint: "Novo Testamento • A visão preparou Pedro para visitar Cornélio.",
        book: "Atos",
        chapter: 10,
        verse: 15
    },

    // DIFÍCIL — Versículos específicos, genealogias e leis
    {
        difficulty: "dificil",
        story: "Registro genealógico que abre com o livro das gerações de Adão e segue por Sete, Enos, Cainã, Maalalel e Jarede até chegar a Enoque.",
        hint: "Antigo Testamento • Primeiro livro, após o relato de Caim e Abel.",
        book: "Gênesis",
        chapter: 5,
        verse: 1
    },
    {
        difficulty: "dificil",
        story: "Prescrição sobre a oferta de cereal assada no forno, determinando que seja feita de flor de farinha sem fermento, amassada com azeite.",
        hint: "Antigo Testamento • Terceiro livro do Pentateuco.",
        book: "Levítico",
        chapter: 2,
        verse: 4
    },
    {
        difficulty: "dificil",
        story: "Instrução próxima ao fim da carta para que ela seja lida na igreja e também na igreja dos laodicenses, lendo-se igualmente a carta vinda de Laodiceia.",
        hint: "Novo Testamento • Epístola escrita a uma comunidade na Frígia.",
        book: "Colossenses",
        chapter: 4,
        verse: 16
    },
    {
        difficulty: "dificil",
        story: "O salmista declarou que a palavra de Deus é lâmpada para os pés e luz para o caminho.",
        hint: "Antigo Testamento • Um dos maiores salmos, dividido em trechos alfabéticos.",
        book: "Salmos",
        chapter: 119,
        verse: 105
    },
    {
        difficulty: "dificil",
        story: "Isaías descreveu o servo ferido por nossas transgressões e moído pelas nossas iniquidades, dizendo que pela sua ferida fomos curados.",
        hint: "Antigo Testamento • Profecia longa sobre o sofrimento do servo.",
        book: "Isaías",
        chapter: 53,
        verse: 5
    },
    {
        difficulty: "dificil",
        story: "Paulo afirmou que permanecem a fé, a esperança e o amor, sendo o maior deles o amor.",
        hint: "Novo Testamento • Parte do famoso capítulo sobre o amor.",
        book: "1 Coríntios",
        chapter: 13,
        verse: 13
    },
    {
        difficulty: "dificil",
        story: "A lei alimentícia declarou limpo o animal que tem o casco dividido e rumina, mas excluiu aqueles que possuem apenas uma dessas características.",
        hint: "Antigo Testamento • Capítulo com regras sobre animais puros e impuros.",
        book: "Levítico",
        chapter: 11,
        verse: 3
    },
    {
        difficulty: "dificil",
        story: "Na genealogia do Novo Testamento, um rei foi chamado de pai de Salomão e o patriarca Abraão apareceu como antepassado de Davi.",
        hint: "Novo Testamento • Primeiro capítulo do evangelho escrito por Mateus.",
        book: "Mateus",
        chapter: 1,
        verse: 6
    },
    {
        difficulty: "dificil",
        story: "Moabe deu a luz ao pai dos moabitas, enquanto Ben-Ami foi o pai dos amonitas.",
        hint: "Antigo Testamento • Episódio ligado às duas filhas de Ló.",
        book: "Gênesis",
        chapter: 19,
        verse: 38
    },
    {
        difficulty: "dificil",
        story: "No trecho sobre os dons espirituais, um membro do corpo comparou todos os crentes a um único corpo com muitos membros.",
        hint: "Novo Testamento • Outra epístola de Paulo sobre a unidade da igreja.",
        book: "1 Coríntios",
        chapter: 12,
        verse: 12
    },
];

const DIFFICULTY_MULTIPLIER = {
    facil: 1,
    medio: 1.5,
    dificil: 2
};

let activePassages = [];
let currentDifficulty = "facil";
let currentIndex = 0;
let score = 0;
let hintUsed = false;
let answered = false;

const bookSelect = document.getElementById('book-select');
const chapterSelect = document.getElementById('chapter-select');
const verseInput = document.getElementById('verse-input');
const readChapterBtn = document.getElementById('read-chapter-button');
const nextBtn = document.getElementById('next-button');
const chapterModal = document.getElementById('chapter-modal');
const chapterModalTitle = document.getElementById('chapter-modal-title');
const chapterModalBody = document.getElementById('chapter-modal-body');
const tutorialModal = document.getElementById('tutorial-modal');
const tutorialContent = document.getElementById('tutorial-content');
const tutorialTitle = document.getElementById('tutorial-title');
const tutorialPrev = document.getElementById('tutorial-prev');
const tutorialNext = document.getElementById('tutorial-next');
const tutorialStepCount = document.getElementById('tutorial-step-count');
const tutorialProgressBar = document.getElementById('tutorial-progress-bar');

const tutorialSteps = [
    {
        title: "Objetivo do jogo",
        icon: "📜",
        text: "O jogo apresenta um resumo de uma história ou de uma passagem da Bíblia.",
        extra: "Sua tarefa é descobrir de onde esse trecho veio: qual é o <strong>livro</strong>, o <strong>capítulo</strong> e o <strong>versículo</strong>.",
        example: "Exemplo de resposta: <strong>Gênesis 1:2</strong>"
    },
    {
        title: "Escolha o nível",
        icon: "🎚️",
        text: "Antes de começar, escolha <strong>Fácil</strong>, <strong>Médio</strong> ou <strong>Difícil</strong> na parte superior.",
        extra: "Fácil usa histórias conhecidas. Médio usa parábolas e profetas. Difícil usa referências mais específicas, leis e genealogias.",
        example: "O nível dificulta o desafio e também aumenta a pontuação."
    },
    {
        title: "Leia a história",
        icon: "👀",
        text: "Leia com atenção o texto dentro da caixa dourada.",
        extra: "Procure por nomes de pessoas, lugares, acontecimentos e detalhes que podem indicar o livro e o capítulo.",
        example: "Toda resposta é formada por três informações: Livro, capítulo e versículo."
    },
    {
        title: "Use uma dica, se precisar",
        icon: "💡",
        text: "O botão <strong>Dica</strong> revela uma pista sobre o trecho.",
        extra: "A dica pode citar o Antigo ou Novo Testamento, o nome do autor ou uma informação sobre o episódio.",
        example: "Cada dica custa 15 pontos e só pode ser usada uma vez em cada história."
    },
    {
        title: "Preencha a referência",
        icon: "✍️",
        text: "Selecione o <strong>livro</strong>. Depois, escolha o <strong>capítulo</strong> e digite o número do <strong>versículo</strong>.",
        extra: "Os capítulos dependem do livro escolhido. Por exemplo, o capítulo de Gênesis pode ir até 50.",
        example: "Exemplo: Livro <strong>Mateus</strong> • Capítulo <strong>8</strong> • Versículo <strong>24</strong>"
    },
    {
        title: "Confira sua resposta",
        icon: "✅",
        text: "Clique em <strong>Responder</strong>. O jogo mostrará a referência correta e quantos pontos você ganhou.",
        extra: "Resposta exata: 250 pontos-base. Livro e capítulo: 100. Apenas o livro: 50. Resposta diferente: nenhum ponto.",
        example: "Fácil ×1 • Médio ×1,5 • Difícil ×2."
    },
    {
        title: "Continue aprendendo",
        icon: "📖",
        text: "Depois de responder, use <strong>Ler capítulo completo</strong> para conferir o contexto da passagem.",
        extra: "Quando terminar de ler, clique em <strong>Próxima história</strong>. Os controles ficarão disponíveis novamente.",
        example: "Se esqueceu algum passo, o botão “Como jogar” pode abrir este tutorial novamente."
    }
];

let tutorialStep = 0;

function populateBookSelect() {
    const atGroup = document.createElement('optgroup');
    atGroup.label = "Antigo Testamento";

    const ntGroup = document.createElement('optgroup');
    ntGroup.label = "Novo Testamento";

    BIBLE_BOOKS.forEach((book) => {
        const option = document.createElement('option');
        option.value = book.name;
        option.textContent = book.name;
        if (book.testament === "AT") {
            atGroup.appendChild(option);
        } else {
            ntGroup.appendChild(option);
        }
    });

    bookSelect.appendChild(atGroup);
    bookSelect.appendChild(ntGroup);
}

function updateChapterSelect() {
    const selectedBook = BIBLE_BOOKS.find((b) => b.name === bookSelect.value);
    chapterSelect.innerHTML = '<option value="">Cap.</option>';
    verseInput.max = "";

    if (!selectedBook) {
        chapterSelect.disabled = true;
        return;
    }

    for (let cap = 1; cap <= selectedBook.chapters; cap++) {
        const option = document.createElement('option');
        option.value = String(cap);
        option.textContent = `Cap. ${cap}`;
        chapterSelect.appendChild(option);
    }

    chapterSelect.disabled = false;
}

function preparePassages() {
    const filtered = passages.filter((p) => p.difficulty === currentDifficulty);
    activePassages = filtered.length > 0 ? [...filtered] : [...passages];

    for (let index = activePassages.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [activePassages[index], activePassages[randomIndex]] = [activePassages[randomIndex], activePassages[index]];
    }

    const storageKey = `lastStartingPassage_${currentDifficulty}`;
    try {
        const previousStart = localStorage.getItem(storageKey);
        const currentStart = activePassages[0];
        const currentReference = `${currentStart.book} ${currentStart.chapter}:${currentStart.verse}`;

        if (activePassages.length > 1 && currentReference === previousStart) {
            const replacementIndex = Math.floor(Math.random() * (activePassages.length - 1)) + 1;
            [activePassages[0], activePassages[replacementIndex]] = [activePassages[replacementIndex], activePassages[0]];
        }

        const nextStart = activePassages[0];
        localStorage.setItem(storageKey, `${nextStart.book} ${nextStart.chapter}:${nextStart.verse}`);
    } catch (error) {
        console.error('Não foi possível salvar a última história inicial.', error);
    }

    currentIndex = 0;
}

function loadQuestion() {
    const current = activePassages[currentIndex];
    document.getElementById('story-text').innerText = `"${current.story}"`;
    document.getElementById('hint-text').innerText = "";
    bookSelect.value = "";
    chapterSelect.innerHTML = '<option value="">Cap.</option>';
    chapterSelect.disabled = true;
    verseInput.value = "";
    verseInput.max = "";
    document.getElementById('feedback').style.display = "none";
    readChapterBtn.style.display = "none";
    nextBtn.style.display = "none";

    document.querySelectorAll('.inputs-grid input, .actions button').forEach((element) => {
        element.disabled = false;
    });
    bookSelect.disabled = false;

    hintUsed = false;
    answered = false;
}

function showHint() {
    if (hintUsed || answered) return;
    const current = activePassages[currentIndex];
    document.getElementById('hint-text').innerText = `Dica: ${current.hint}`;
    score = Math.max(0, score - 15);
    updateScore();
    hintUsed = true;
}

function checkAnswer() {
    if (answered) return;

    const current = activePassages[currentIndex];
    const book = bookSelect.value;
    const chapter = parseInt(chapterSelect.value, 10);
    const verse = parseInt(verseInput.value, 10);
    const feedback = document.getElementById('feedback');

    if (!book || !chapter || !verse) {
        alert("Por favor, preencha o livro, capítulo e versículo!");
        return;
    }

    const mult = DIFFICULTY_MULTIPLIER[currentDifficulty] || 1;
    let pointsEarned = 0;
    let message = "";

    if (book === current.book && chapter === current.chapter && verse === current.verse) {
        pointsEarned = Math.round(250 * mult);
        message = `🎉 Perfeito! Referência exata: ${current.book} ${current.chapter}:${current.verse} (+${pointsEarned} pts)`;
        feedback.style.background = "rgba(34, 197, 94, 0.2)";
        feedback.style.color = "#4ade80";
    } else if (book === current.book && chapter === current.chapter) {
        pointsEarned = Math.round(100 * mult);
        message = `👏 Muito perto! Você acertou o livro e o capítulo. O versículo exato era ${current.verse}. (+${pointsEarned} pts)`;
        feedback.style.background = "rgba(234, 179, 8, 0.2)";
        feedback.style.color = "#facc15";
    } else if (book === current.book) {
        pointsEarned = Math.round(50 * mult);
        message = `👍 Bom começo! O livro é ${current.book}, mas a passagem está em ${current.chapter}:${current.verse}. (+${pointsEarned} pts)`;
        feedback.style.background = "rgba(234, 179, 8, 0.2)";
        feedback.style.color = "#facc15";
    } else {
        message = `❌ Não foi dessa vez! A resposta correta era ${current.book} ${current.chapter}:${current.verse}.`;
        feedback.style.background = "rgba(239, 68, 68, 0.2)";
        feedback.style.color = "#f87171";
    }

    score += pointsEarned;
    updateScore();
    feedback.innerText = message;
    feedback.style.display = "block";

    answered = true;
    document.querySelectorAll('.inputs-grid input, .inputs-grid select, .actions button').forEach((element) => {
        element.disabled = true;
    });
    readChapterBtn.style.display = "block";
    nextBtn.style.display = "block";
}

async function fetchChapterFromApi(bookName, chapter) {
    const bookObj = BIBLE_BOOKS.find((b) => b.name === bookName);
    const abbrev = bookObj ? bookObj.abbrev : encodeURIComponent(bookName.toLowerCase());
    const enName = bookObj ? bookObj.enName : bookName;

    // 1. Tentativa via ABíbliaDigital
    try {
        const res = await fetch(`https://www.abibliadigital.com.br/api/verses/nvi/${abbrev}/${chapter}`);
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data.verses) && data.verses.length > 0) {
                return {
                    title: `${bookName} ${chapter} — NVI (ABíbliaDigital)`,
                    verses: data.verses.map((v) => ({ num: v.number, text: v.text }))
                };
            }
        }
    } catch (_) {
        // Prossegue para o fallback
    }

    // 2. Fallback via bible-api.com
    const fallbackRes = await fetch(
        `https://bible-api.com/${encodeURIComponent(`${enName} ${chapter}`)}?translation=almeida`
    );
    if (!fallbackRes.ok) {
        throw new Error("Não foi possível carregar o capítulo completo agora.");
    }

    const fallbackData = await fallbackRes.json();
    const verses = Array.isArray(fallbackData.verses)
        ? fallbackData.verses.map((v) => ({ num: v.verse, text: v.text.trim() }))
        : [{ num: "", text: fallbackData.text || "Texto indisponível." }];

    return {
        title: `${bookName} ${chapter} — ${fallbackData.translation_name || "bible-api.com"}`,
        verses
    };
}

async function openChapterModal() {
    const current = activePassages[currentIndex];
    if (!current) return;

    chapterModal.classList.add('open');
    chapterModalTitle.textContent = `${current.book} ${current.chapter}`;
    chapterModalBody.innerHTML = "<p>Carregando capítulo completo...</p>";

    try {
        const result = await fetchChapterFromApi(current.book, current.chapter);
        chapterModalTitle.textContent = result.title;
        chapterModalBody.innerHTML = result.verses
            .map((v) =>
                `<p class="chapter-verse">${v.num ? `<span class="chapter-verse-num">${v.num}</span>` : ""}${v.text}</p>`
            )
            .join("");
    } catch (err) {
        chapterModalBody.innerHTML = `<p>${err.message}</p>`;
    }
}

function closeChapterModal() {
    chapterModal.classList.remove('open');
}

function nextQuestion() {
    if (!answered) return;
    currentIndex = (currentIndex + 1) % activePassages.length;
    loadQuestion();
}

function updateScore() {
    document.getElementById('score').innerText = score;
}

function renderTutorialStep() {
    const step = tutorialSteps[tutorialStep];
    tutorialTitle.textContent = "Como jogar";
    tutorialContent.innerHTML = `
        <div class="tutorial-step-icon" aria-hidden="true">${step.icon}</div>
        <h3>${step.title}</h3>
        <p>${step.text}</p>
        <p>${step.extra}</p>
        <div class="tutorial-example">${step.example}</div>
    `;
    tutorialStepCount.textContent = `Passo ${tutorialStep + 1} de ${tutorialSteps.length}`;
    tutorialProgressBar.style.width = `${((tutorialStep + 1) / tutorialSteps.length) * 100}%`;
    tutorialPrev.disabled = tutorialStep === 0;
    tutorialNext.textContent = tutorialStep === tutorialSteps.length - 1 ? "Começar a jogar ✓" : "Próximo →";
    tutorialContent.focus({ preventScroll: true });
}

function openTutorial() {
    tutorialStep = 0;
    renderTutorialStep();
    tutorialModal.classList.add('open');
    tutorialNext.focus();
}

function closeTutorial(markAsSeen = true) {
    tutorialModal.classList.remove('open');
    if (markAsSeen) {
        try {
            localStorage.setItem('tutorialSeen', 'true');
        } catch (_) {
            // O tutorial continua funcionando mesmo sem armazenamento local.
        }
    }
}

function previousTutorialStep() {
    if (tutorialStep > 0) {
        tutorialStep -= 1;
        renderTutorialStep();
    }
}

function nextTutorialStep() {
    if (tutorialStep < tutorialSteps.length - 1) {
        tutorialStep += 1;
        renderTutorialStep();
        return;
    }
    closeTutorial();
}

tutorialModal.addEventListener('click', (event) => {
    if (event.target === tutorialModal) {
        closeTutorial();
    }
});

bookSelect.addEventListener('change', updateChapterSelect);

chapterModal.addEventListener('click', (event) => {
    if (event.target === chapterModal) {
        closeChapterModal();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    if (tutorialModal.classList.contains('open')) closeTutorial();
    else if (chapterModal.classList.contains('open')) closeChapterModal();
});

document.querySelectorAll('.diff-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.diff-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        currentDifficulty = btn.dataset.difficulty;
        preparePassages();
        loadQuestion();
    });
});

populateBookSelect();
preparePassages();
loadQuestion();

try {
    if (localStorage.getItem('tutorialSeen') !== 'true') {
        openTutorial();
    }
} catch (_) {
    openTutorial();
}