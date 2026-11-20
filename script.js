// Banco de dados inicial (futuramente pode ir para um arquivo JSON separado)
const passages = [
    {
        story: "Um jovem pastor rejeitou a armadura pesada de um rei e enfrentou um guerreiro gigante usando apenas uma funda e cinco pedras lisas tiradas de um riacho.",
        hint: "Antigo Testamento • Aconteceu no Vale de Elá.",
        book: "1 Samuel",
        chapter: 17,
        verse: 40
    },
    {
        story: "Durante uma forte tempestade no mar, os discípulos entraram em pânico enquanto Jesus dormia na popa do barco. Ao acordar, Ele repreendeu o vento e o mar se acalmou.",
        hint: "Novo Testamento • O evangelho escrito por um discípulo cobrador de impostos.",
        book: "Mateus",
        chapter: 8,
        verse: 24
    },
    {
        story: "Por se recusar a adorar uma estátua de ouro, três jovens foram lançados em uma fornalha aquecida sete vezes mais que o normal, mas caminharam ilesos lá dentro.",
        hint: "Antigo Testamento • Livro de um profeta na Babilônia.",
        book: "Daniel",
        chapter: 3,
        verse: 21
    }
];

function preparePassages() {
    for (let index = passages.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [passages[index], passages[randomIndex]] = [passages[randomIndex], passages[index]];
    }

    const storageKey = 'lastStartingPassage';
    try {
        const previousStart = localStorage.getItem(storageKey);
        const currentStart = passages[0];
        const currentReference = `${currentStart.book} ${currentStart.chapter}:${currentStart.verse}`;

        if (passages.length > 1 && currentReference === previousStart) {
            const replacementIndex = Math.floor(Math.random() * (passages.length - 1)) + 1;
            [passages[0], passages[replacementIndex]] = [passages[replacementIndex], passages[0]];
        }

        const nextStart = passages[0];
        localStorage.setItem(storageKey, `${nextStart.book} ${nextStart.chapter}:${nextStart.verse}`);
    } catch (error) {
        console.error('Não foi possível salvar a última história inicial.', error);
    }
}

let currentIndex = 0;
let score = 0;
let hintUsed = false;
let answered = false;

function loadQuestion() {
    const current = passages[currentIndex];
    document.getElementById('story-text').innerText = `"${current.story}"`;
    document.getElementById('hint-text').innerText = "";
    document.getElementById('book-select').value = "";
    document.getElementById('chapter-input').value = "";
    document.getElementById('verse-input').value = "";
    document.getElementById('feedback').style.display = "none";
    document.getElementById('next-button').style.display = "none";
    document.querySelectorAll('.inputs-grid input, .inputs-grid select, .actions button').forEach(element => {
        element.disabled = false;
    });
    hintUsed = false;
    answered = false;
}

function showHint() {
    if (hintUsed || answered) return;
    const current = passages[currentIndex];
    document.getElementById('hint-text').innerText = `Dica: ${current.hint}`;
    score = Math.max(0, score - 15);
    updateScore();
    hintUsed = true;
}

function checkAnswer() {
    if (answered) return;

    const current = passages[currentIndex];
    const book = document.getElementById('book-select').value;
    const chapter = parseInt(document.getElementById('chapter-input').value);
    const verse = parseInt(document.getElementById('verse-input').value);
    const feedback = document.getElementById('feedback');

    if (!book || !chapter || !verse) {
        alert("Por favor, preencha o livro, capítulo e versículo!");
        return;
    }

    let pointsEarned = 0;
    let message = "";

    if (book === current.book && chapter === current.chapter && verse === current.verse) {
        pointsEarned = 250;
        message = `🎉 Perfeito! Referência exata: ${current.book} ${current.chapter}:${current.verse} (+250 pts)`;
        feedback.style.background = "rgba(34, 197, 94, 0.2)";
        feedback.style.color = "#4ade80";
    } else if (book === current.book && chapter === current.chapter) {
        pointsEarned = 100;
        message = `👏 Muito perto! Você acertou o livro e o capítulo. O versículo exato era ${current.verse}. (+100 pts)`;
        feedback.style.background = "rgba(234, 179, 8, 0.2)";
        feedback.style.color = "#facc15";
    } else if (book === current.book) {
        pointsEarned = 50;
        message = `👍 Bom começo! O livro é ${current.book}, mas a passagem está em ${current.chapter}:${current.verse}. (+50 pts)`;
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
    document.querySelectorAll('.inputs-grid input, .inputs-grid select, .actions button').forEach(element => {
        element.disabled = true;
    });
    document.getElementById('next-button').style.display = "block";
}

function nextQuestion() {
    if (!answered) return;
    currentIndex = (currentIndex + 1) % passages.length;
    loadQuestion();
}

function updateScore() {
    document.getElementById('score').innerText = score;
}

preparePassages();
loadQuestion();