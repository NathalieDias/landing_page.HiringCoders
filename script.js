const form = document.getElementById('content');

form.addEventListener('submit', () => {
   
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;

    let dados = {
        nome,
        email,
    }

    let convertDados = JSON.stringify(dados);
    localStorage.setItem('lead', convertDados);

})
