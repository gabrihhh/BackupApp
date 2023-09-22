var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('BackupApp', 'Patara', '123', {
  host: '172.31.11.252',
  dialect: 'mysql', // Altere para o seu banco de dados específico
});

recriarTabelas();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


// async function recriarTabelas() {
//   try {
//     // Sincronize o Sequelize com o banco de dados, forçando a recriação das tabelas
//     await sequelize.sync({ force: true });
//     console.log('Tabelas recriadas com sucesso.');

//     // Inicialize sua aplicação Node.js aqui após as tabelas serem criadas/recriadas
//     startYourApp();
//   } catch (error) {
//     console.error('Erro ao recriar tabelas:', error);
//   }
// }

// function startYourApp() {
//   // Coloque o código para iniciar sua aplicação Node.js aqui
//   console.log('Aplicação iniciada...');
// }

module.exports = app ;
