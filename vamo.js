const express = require("express")
const server = express()
server.use(express.json)

let users = []
let products = []

//===---------------------------------------- Usuarios

server.get('/users', (req, res) => { //Busca todos os usuários cadastrados. 
    res.json(req.body)
})

server.post('/users', (req, res) => { //Cria um usuário.
    const id = req.body.Codigo
    const name = req.body.Nome
    const cpf = req.body.cpf
    const email = req.body.email 

    server.push(req.json)
    res.status(200).json("Produto cadastrado com sucesso")
})

server.get('/users/:id', (req, res) => { //Busca o usuário por ID. 
    const users = users.find(p => p.id === parseInt(req.params.id) );
    if (users) {
        res.json(req.body);
    } else {
        res.status(404).json("Usuario não encontrado");
    }
});

server.put('/users/:id', (req, res) => { //Atualizar o usuário por ID.
    const users = users.find(p => p.id === parseInt(req.params.id) );

})

server.delete('/users/:id', (req, res) => { //Remover o usuário por ID
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.delete(index, 1);
        res.status(200).send("Usuário removido com sucesso");
    } else {
        res.status(404).send("Usuário não encontrado");
    }
});

//===---------------------------------------- Produtos

server.get('/products', (req, res) =>{ //Mostra todos produtos.
    res.json(req.body)
})

server.post('/products', (req, res) => { //Cria um produto.
    const id = req.body.Codigo
    const name = req.body.Nome
    const price = req.body.price

    server.push(req.json)
    res.status(200).json(req.body)
})

server.get('/products/:id', (req, res) => { //Busca o produto por ID. 
    const products = products.find(p => p.id === parseInt(req.params.id) );
    if (products) {
        res.json(req.body);
    } else {
        res.status(404).json("Produto não encontrado");
    }
});

server.put('/products/:id', (req, res) => { //Atualizar o produto por ID.
    const products = products.find(p => p.id === parseInt(req.params.id) );

})

server.delete('/products/:id', (req, res) => { //Remover o produto por ID
    const id = parseInt(req.params.id);
    const index = products.findIndex(user => user.id === id);
    if (index !== -1) {
        products.delete(index, 1);
        res.json(products);
        res.status(200).send("Produto removido com sucesso");
    } else {
        res.status(404).send("Produto não encontrado");
    }
});

server.listen(3000, () => { 
    console.log("Servidor rodando na porta 3000");
});
