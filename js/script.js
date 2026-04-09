// Data struktur: Et array af objekter, der repræsenterer hver scene i spillet
const scenes = [
    {
        id: 1,
        title: "Indbakke: Deadline for aflevering nærmer sig!",
        text: "Du sidder på biblioteket og tjekker din studie-mail. Du har modtaget en mail fra 'Wiseflow'. Der står: 'Din deadline nærmer sig! Wiseflow lukker for afleveringer om 1 time, tryk her for at gå til wiseflow'. Hvad gør du?",
        choices: [
            { text: "Klik på linket", nextId: 2 },
            { text: "Undersøg mailen nærmere", nextId: 3 }
        ]
    },
    {
        id: 2,
        title: "åh nej! (Dårlig beslutning)",
        text: "Du klikker på linket. Siden ligner Wiseflow fuldstændig, men hvis du kigger på URL'en står der 'www.wiseflow.indianscammer.com'. Du har allerede tastet dit password ind.",
        choices: [
            { text: "Tryk 'Log ind'", nextId: 5 },
            { text: "Luk siden og skift password", nextId: 4 }
        ]
    },
    {
        id: 3,
        title: "Sikker adfærd",
        text: "Godt tænkt! Du holder musen over linket uden at klikke (hover) og ser, at linket fører til en ukendt indisk server. Det er et klassisk phishing-forsøg.",
        choices: [
            { text: "Slet mailen og advar IT", nextId: 7 },
            { text: "Klik på linket", nextId: 6 }
        ]
    },
    {
        id: 4,
        title: "Succes! (God slutning)",
        text: "Du lukker siden og skifter dit password. Det er en god beslutning, da du har undgået at blive hacket. Husk altid at være kritisk over for links i mails, især når de haster!",
        choices: [
            { text: "Prøv igen", nextId: 1 }
        ]
    },
    {
        id: 5,
        title: "Hacket! (Dårlig slutning)",
        text: "Dine oplysninger er nu stjålet! Hackerne har adgang til dine afleveringer, personlige data og kan sende spam fra din konto. Husk altid at tjekke URL'en før du logger ind!",
        choices: [
            { text: "Prøv igen", nextId: 1 }
        ]
    },
    {
        id: 6,
        title: "Du sover i timen! (Dårlig slutning)",
        text: "Du kan tydeligt se, at siden ikke er Wiseflow, men du klikker alligevel. Du er da vidst helt væk! Nu er du hacket og har givet dine oplysninger til cyberkriminelle. Husk altid at være kritisk og tjekke links, før du klikker!",
        choices: [
            { text: "Prøv igen", nextId: 1 }
        ]
    },
    {
        id: 7,
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