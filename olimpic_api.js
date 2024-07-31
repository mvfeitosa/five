// URL da API que você deseja chamar
const apiUrl = 'https://api.exemplo.com/dados';

// Fazendo a requisição GET
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro na resposta da rede');
        }
        return response.json();
    })
    .then(data => {
        // Manipulando os dados recebidos
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
