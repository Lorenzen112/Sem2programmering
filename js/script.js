// Data struktur: Et array af objekter, der repræsenterer hver scene i spillet
const scenes = [
    {
        id: 1,
        title: "Indbakke: Vigtig besked!",
        text: "Du sidder på biblioteket og tjekker din studie-mail. Du har modtaget en mail fra 'IBA IT-Support'. Der står: 'Din adgang til Canvas lukkes om 2 timer, hvis du ikke opdaterer dit password via dette link.'. Hvad gør du?",
        choices: [
            { text: "Klik på linket med det samme", nextId: 2 },
            { text: "Undersøg mailen nærmere", nextId: 3 }
        ]
    },
    {
        id: 2,
        title: "Falsk Login",
        text: "Du klikker på linket. Siden ligner Canvas fuldstændig, men hvis du kigger på URL'en står der 'www.iba-update.ru'. Du har allerede tastet dit password ind.",
        choices: [
            { text: "Tryk 'Log ind'", nextId: 4 }
        ]
    },
    {
        id: 3,
        title: "Sikker adfærd",
        text: "Godt tænkt! Du holder musen over linket uden at klikke (hover) og ser, at linket fører til en ukendt russisk server. Det er et klassisk phishing-forsøg.",
        choices: [
            { text: "Slet mailen og advar IT", nextId: 5 }
        ]
    },
    {
        id: 4,
        title: "Hacket! (Dårlig slutning)",
        text: "Dine oplysninger er nu stjålet! Hackerne har adgang til dine afleveringer, personlige data og kan sende spam fra din konto. Husk altid at tjekke URL'en før du logger ind!",
        choices: [
            { text: "Prøv igen", nextId: 1 }
        ]
    },
    {
        id: 5,
        title: "Succes! (God slutning)",
        text: "Du undgik fælden! Ved at være kritisk og tjekke links, beskytter du både dine egne og skolens data mod cyberkriminelle.",
        choices: [
            { text: "Spil igen", nextId: 1 }
        ]
    }
];

// Variabel til at gribe fat i HTML-containeren via DOM-manipulation
const appContainer = document.getElementById('app-container');

// Funktion til at bygge og vise en scene dynamisk
function renderScene(sceneId) {
    // Betinget logik: Find den korrekte scene i vores array
    const scene = scenes.find(s => s.id === sceneId);

    // Fejlhåndtering, hvis scenen ikke findes
    if (!scene) {
        console.error("Scenen findes ikke!");
        return;
    }

    // Ryd HTML-containeren for det gamle indhold
    appContainer.innerHTML = '';

    // Opret HTML elementer
    const titleElement = document.createElement('h1');
    titleElement.textContent = scene.title;

    const textElement = document.createElement('p');
    textElement.textContent = scene.text;

    const btnContainer = document.createElement('div');
    btnContainer.className = 'btn-container';

    // Gennemgå valgmuligheder og opret en knap for hver
    scene.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;

        // Event listener, der lytter efter klik og går til den næste scene
        button.addEventListener('click', () => {
            renderScene(choice.nextId);
        });

        // Tilføj knappen til knap-containeren
        btnContainer.appendChild(button);
    });

    // Tilføj alle de nye elementer til DOM'en
    appContainer.appendChild(titleElement);
    appContainer.appendChild(textElement);
    appContainer.appendChild(btnContainer);
}

// Start scenariet ved at kalde funktionen med ID 1
renderScene(1);