const tasks = [
    {
        todo: "Do something nice for someone I care about",
        completed: true,
    },
    {
        todo: "Memorize the fifty states and their capitals",
        completed: false,
    },
    {
        todo: "Watch a classic movie",
        completed: false,
    },
    {
        todo: "Contribute code or a monetary donation to an open-source software project",
        completed: false,
    },
    {
        todo: "Solve a Rubik's cube",
        completed: false,
    },
    {
        todo: "Bake pastries for me and neighbor",
        completed: false,
    },
    {
        todo: "Go see a Broadway production",
        completed: false,
    },
    {
        todo: "Write a thank you letter to an influential person in my life",
        completed: true,
    },
    {
        todo: "Invite some friends over for a game night",
        completed: false,
    },
    {
        todo: "Have a football scrimmage with some friends",
        completed: false,
    },
    {
        todo: "Text a friend I haven't talked to in a long time",
        completed: false,
    },
    {
        todo: "Organize pantry",
        completed: true,
    },
    {
        todo: "Buy a new house decoration",
        completed: false,
    },
    {
        todo: "Plan a vacation I've always wanted to take",
        completed: false,
    },
    {
        todo: "Clean out car",
        completed: false,
    },
    {
        todo: "Draw and color a Mandala",
        completed: true,
    },
    {
        todo: "Create a cookbook with favorite recipes",
        completed: false,
    },
    {
        todo: "Bake a pie with some friends",
        completed: false,
    },
    {
        todo: "Create a compost pile",
        completed: true,
    },
    {
        todo: "Take a hike at a local park",
        completed: true,
    },
    {
        todo: "Take a class at local community center that interests you",
        completed: false,
    },
    {
        todo: "Research a topic interested in",
        completed: false,
    },
    {
        todo: "Plan a trip to another country",
        completed: true,
    },
    {
        todo: "Improve touch typing",
        completed: false,
    },
    {
        todo: "Learn Express.js",
        completed: false,
    },
    {
        todo: "Learn calligraphy",
        completed: false,
    },
    {
        todo: "Have a photo session with some friends",
        completed: false,
    },
    {
        todo: "Go to the gym",
        completed: false,
    },
    {
        todo: "Make own LEGO creation",
        completed: false,
    },
    {
        todo: "Take cat on a walk",
        completed: false,
    }
]

// Funzione per creare gli elementi HTML
function createTaskElement(task) {
    const taskElement = document.createElement('div');
    taskElement.innerText = task.todo;

    if (task.completed) {
        taskElement.style.backgroundColor = 'green';
    } else {
        taskElement.style.backgroundColor = 'red';
    }

    return taskElement.outerHTML; // Ritorna l'HTML dell'elemento invece dell'elemento stesso
}

// Seleziona l'elemento dove aggiungere le tasks
const taskContainer = document.querySelector('#task-container'); 

// Genera l'HTML per gli elementi dei compiti e aggiungilo direttamente al contenuto HTML del container
const tasksHTML = tasks.map(task => createTaskElement(task)).join('');
taskContainer.innerHTML = tasksHTML;




// Filtra le attività non completate dall'array tasks
const incompleteTasks = tasks.filter(task => !task.completed);

// Genera l'HTML per gli elementi dei compiti non completati e aggiungilo direttamente al contenuto HTML del container
const incompleteTasksHTML = incompleteTasks.map(task => createTaskElement(task)).join('');
taskContainer.innerHTML = incompleteTasksHTML;


// Funzione per filtrare le task 
function filterTasks() {
    const keyword = document.querySelector('#keyword').value.trim().toLowerCase();
    // Filtra le task 
    const filteredTasks = tasks.filter(task => task.todo.toLowerCase().includes(keyword));
    // Mostra le task filtrate
    displayTasks(filteredTasks);
}

// Funzione per visualizzare le task filtrate
function displayTasks(filteredTasks) {
    // Crea una stringa HTML per ciascuna task filtrata e unisce tutto in un'unica stringa
    document.querySelector('#taskList').innerHTML = filteredTasks.map(task =>
        `<li style="color: ${task.completed ? 'green' : 'red'};">${task.todo}</li>`
    ).join('');
}

// Mostra inizialmente tutte le task non filtrate
displayTasks(tasks);







                   /* esercizio di recupero

Usando JS, crea un elemento HTML per ognuna delle seguenti task: 
L'elemento deve mostrare il testo della task ed avere un sfondo verde in caso sia completata, rosso se non lo e'. 

ESERCIZIO 2: 

Modificando il codice precedente, assicurati che solo le task NON completate siano mostrate sulla pagina. 

ESERCIZIO 3: 

Aggiungi un input che filtri le task in base alla proprieta' todo
Array di lavoro:*/