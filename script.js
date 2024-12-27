// Funzione per inviare dati al server
function sendData(data) {
    fetch('http://tuo-backend-endpoint.com/api/data', {
        method: 'POST', // Metodo HTTP per inviare i dati
        headers: {
            'Content-Type': 'application/json', // Indica che i dati sono in formato JSON
        },
        body: JSON.stringify(data), // Converte l'oggetto in formato JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data); // Mostra la risposta del server
    })
    .catch(error => {
        console.error('Error:', error); // Mostra eventuali errori
    });
}

// Funzione per ottenere dati dal server
function getData() {
    fetch('http://tuo-backend-endpoint.com/api/data', {
        method: 'GET', // Metodo HTTP per ottenere i dati
    })
    .then(response => response.json())
    .then(data => {
        console.log('Data received:', data); // Mostra i dati ricevuti dal server
    })
    .catch(error => {
        console.error('Error:', error); // Mostra eventuali errori
    });
}

// Esempio di invio di dati al server
const sampleData = {
    name: 'John Doe',
    age: 30,
    email: 'john.doe@example.com'
};

sendData(sampleData);

// Esempio di richiesta di dati dal server
getData();
