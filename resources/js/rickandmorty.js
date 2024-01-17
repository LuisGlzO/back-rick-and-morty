document.addEventListener('DOMContentLoaded', function () {
    // Manejar eventos o realizar inicializaciones si es necesario

    // Ejemplo de solicitud HTTP usando fetch
    document.getElementById('search').addEventListener('click', function () {
        fetch('/tu-ruta-http', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Puedes incluir más encabezados según tus necesidades
            },
            // Puedes incluir más opciones según tus necesidades
        })
        .then(response => response.json())
        .then(data => {
            // Manejar la respuesta de la petición
            console.log(data);
        })
        .catch(error => {
            // Manejar errores
            console.error('Error:', error);
        });
    });
});