var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
let texto=[];
let lista = [];
let listaSalvar = ["log-00h","log-01h","log-02h","log-03h","log-04h","log-05h","log-06h","log-07h","log-08h","log-09h","log-10h","log-11h","log-12h","log-13h","log-14h","log-15h","log-16h","log-17h","log-18h","log-19h","log-20h","log-21h","log-22h","log-23h"];
	
var mysql = require('mysql2');
// Configuração da conexão com o banco de dados
var db = mysql.createConnection({
  host: '172.31.11.252', // Host do banco de dados
  user: 'Patara', // Nome de usuário do banco de dados
  password: '123', // Senha do banco de dados
  database: 'BackupApp' // Nome do banco de dados
});



router.get('/', function(req, res, next) {
  
  		res.render('index')
});

router.get('/baixar', (req, res) => {
	  
});

router.post('/salvar',(req,res)=>{

console.log(req.body)
let json = req.body
let qry = 'UPDATE BackupApp SET NOME = "'+json.nome+'", COMENTARIO = "oi", HORARIO ="'+json.horario+'" WHERE ID = '+json.log;
console.log(qry);
db.query(qry,(Err,result)=>{
    if(Err){
      console.log("Erro ao cadastrar: "+Err);
    }else{
      console.log("Cadastrado no banco!");
    }
});
  
});

module.exports = router;
