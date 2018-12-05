//til at "åbne serveren"
var app = require('express')();
var http = require('http').Server(app);
bodyParser = require('body-parser');


//HUSK AT BRUGE BODYPARSER TIL POST REQUEST.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var mysql = require('mysql');

//Sender html filen
app.get('/', function(req, res){
    res.sendFile(__dirname + '/login-index.html');
  });

  app.post('/opret', function(req,res){

    
      console.log("Brugernavn: "+req.body.brugernavn);
      console.log("password: "+req.body.password);
      if(req.body.brugernavn=="tsm"&&req.body.password=="win"){
        //den sender dette til this.response
        res.send("you logged in")
        
        
      }
      res.send("didntwork");

  })

//Laver connection til DB 
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234"
  });






  http.listen(8080, function(){
    console.log('listening on *:8080');
  });