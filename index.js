const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Servir arquivos estáticos no diretório src
app.use(express.static(path.join(__dirname, 'src')));

// Rota para o arquivo index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor iniciado em http://localhost:${port}`);
});
