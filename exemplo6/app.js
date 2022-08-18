import express from 'express';
const app = express();

//configurar a view engine com EJS
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const bandas = ['derek', 'dfidelis', 'mdchefe'];
    res.render('paginas/index', {bandas});
});

app.get('/sobre', (req, res) => {
    res.render('paginas/sobre');
})

app.get('/contato', (req, res) => {
    res.render('paginas/contato');
})


// Executando o servidor
app.listen(8080, () => {
    console.log('Servidor express rodando');
});

/* instalando o nodemon -> atualiza o servidor automaticamente
np, install -g nodemon */

// Preparar para receber arquivos html
// instalação do ejs - npm install ejs


