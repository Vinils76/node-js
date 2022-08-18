import fetch from 'node-fetch';

const url = 'https://jsonplaceholder.typicode.com/posts/51'; // POSTS
//const url = 'https://viacep.com.br/ws/01001000/json/'; VIACEP

/* Conectando com o endpoint (url) da API */
/* fetch(url) */

/* Retornando a resposta como JSON */
/* .then(resposta => resposta.json()) */

/* Exibindo a resposta (obtida na API )no console */
/* .then(dados => console.log(dados)); */

// Comando inteiro 
fetch(url).then(resposta => resposta.json())
.then(dados => console.log(dados));