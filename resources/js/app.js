import './bootstrap';
console.log("hola mundo");

var characters = [];

document.getElementById('search').addEventListener('click', function () {
    let id = document.getElementById('location_id').value;
    fetch('https://rickandmortyapi.com/api/location/' + id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
    .then(data => {
        var residents = ""
        data.residents.length <= 3 ? residents = data.residents : residents = data.residents.slice(0,3);
        residents.forEach(element => {
            get_data_characters(element)
            console.log(characters);
            send_data(characters);

        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function get_data_characters(url){
    fetch(url, {
        method: 'GET',
        credentials: "same-origin",
        headers: {
            'Content-Type': 'application/json',
            
        },
        
    })
    .then(response => response.json())
    .then(data => {
        characters.push(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function send_data(characters){
    fetch('http://127.0.0.1:8000/rickandmorty', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: characters
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.error('Error:', error);
    });
}