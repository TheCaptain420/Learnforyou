//HUSK AT KØRE NPM INIT
//OG SÅ npm install mysql
var mysql = require('mysql');

/*
    HUSK ALTID AT "USE DB_NAVN" SKAL STÅ I SIN EGEN QUERY

*/


//"åbner" connectionen
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234"
});


//connector her
/*
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});
*/

/*
Inde i connector kan man køre queries
ala.
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
*/

//CONNECTION 
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    
  });
*/

//CREATE DB
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE IF NOT EXISTS mydbFromNode", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });

*/
//CREATE TABLE
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("use mydbFromNode;", function (err, result) {
        if (err) throw err;
        console.log("connected");
      });
    con.query(" CREATE TABLE IF NOT EXISTS testTablenode(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(30))", function (err, result) {
      if (err) throw err;
      console.log("table created or not created;D");
    });
  });
*/

//INSERT I DB
/*
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("use mydbFromNode;", function (err, result) {
        if (err) throw err;
        console.log("connected");
      });
    con.query(" insert into testTablenode (name) VALUES ('Frank')", function (err, result) {
      if (err) throw err;
      console.log("insert created");
    });
  });
*/

//SELECT FROM
//Her henter den f.eks alle brugere.
/* 
con.connect(function(err) {
    if (err) throw err;
    con.query("use mydbFromNode;", function (err, result) {
        if (err) throw err;
        console.log("connected");
      });
    con.query("SELECT * FROM testTablenode", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      //Den returnere en array(med objekter) med listen over all i tablet.
      //gør som nedenunder for at finde ud af hvilken vi vil have.
      //console.log(result[1].name+" hello "+result.length);

    });
  });
*/

//SELECT FROM WHERE
//her henter den specifikke personer, eller ting. 
con.connect(function(err) {
    if (err) throw err;
    con.query("use mydbFromNode;", function (err, result) {
        if (err) throw err;
        console.log("connected");
      });
      //brug "and" hvis du vil bruge flere værdier, f.eks. brugernavn samt password
      //Hvis den ikke kan finde begge returner den "[]".
    con.query("SELECT * FROM testTablenode where name = 'frank' and id = 2", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
  });