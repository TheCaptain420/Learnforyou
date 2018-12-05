//til at "åbne serveren"
var app = require('express')();
var http = require('http').Server(app);
bodyParser = require('body-parser');


//HUSK AT BRUGE BODYPARSER TIL POST REQUEST.

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var mysql = require('mysql');


app.get('/',function(req,res){
    res.sendFile(__dirname + '/pare-index.html');

})

//Laver connection til DB 
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234"
  });
app.get('/hent', function(req,res){
    
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("use paretestselv;", function (err, result) {
            if (err) throw err;
            console.log("connected");
          });
        con.query("select * from paretest", function (err, result) {
          if (err) throw err;
          console.log("insert created");
        res.send(result);
        });
      });

})

app.post('/opret', function(req,res){
    /*
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("use paretestselv;", function (err, result) {
        if (err) throw err;
        console.log("connected");
      });
    con.query(" insert into paretest (id,pareOn,stromforbrugNormal,stromforbrugNu,lysstyrke,farve,harwareNR,softwareNR) VALUES (211,1,12.2,10.1,60, 'Green',123,555)", function (err, result) {
      if (err) throw err;
      console.log("insert created");
    });
  });
  */
})


  http.listen(8080, function(){
    console.log('listening on *:8080');
  });