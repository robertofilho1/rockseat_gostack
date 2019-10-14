const  express = require ('express');

const server = express();

//Parametriza express

server.use(express.json());

//localhost:3000/teste

// Query params= ?teste=1 - Enviados com ponto de interrogação na url
// Route params= /users/1 - Enviados com ID na url
// Request body= {"name:" "Diego"} - Enviados dentro do post/put com as infos do usuario

//CRUD - Create,Read,Update,Delete

const users= ['Lauda','Prost','Mansell','Piquet','Senna','Schumacher'];

//Rotina para listar usuario
server.get('/users',(req,res)=>{
    return res.json(users);
})

//Rotina para chamar usuario
server.get('/users/:index',(req,res)=>{
    const {index} = req.params;
    return res.json(users[index]);
})

//Rotina para criar um novo usuario via request body
server.post('/users',(req,res)=>{
    const {name}= req.body;

    users.push(name);
    return res.json(users);

})

//Rotina para editar usuario
server.put('/users/index',(req,res)=>{
    const {index} = req.params;
    const {name} = req.body;

    users[index]=name;

    return res.json(users);

})

//Rotina para exclusão
server.delete('/users',(req,res)=>{
    const {index} = req.params;

    users.splice(index,1);
    return res.json(users);
})


server.listen(3000);
