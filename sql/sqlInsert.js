const mysql = require('mysql');
const fs = require('fs');
const { resolve } = require('path');
const { rejects } = require('assert');

var user = new String;
var passWord = new String;
var dataBase = new String;

function RetrieveUser() {
    return new Promise( (resolve, reject) =>
    {
        fs.readFile('./user.txt', 'utf8', (err, data) =>
        {
            if(err) {
                console.error(err);
                reject();
            }
            resolve(data);
        });
    });
}

function RetrievePassword() {
    return new Promise( (resolve, reject) =>
    {
        fs.readFile('./password.txt', 'utf8', (err, data) =>
        {
            if(err) {
                console.error(err);
                reject();
            }
            resolve(data);
        });
    });
}

function RetrieveDataBase() {
    return new Promise( (resolve, reject) =>
    {
        fs.readFile('./database.txt', 'utf8', (err, data) =>
        {
            if(err) {
                console.error(err);
                reject();
            }
            resolve(data);
        });
    });
}

function PopulateAssets()
{
    var connection = mysql.createConnection
    ({
    host     : '127.0.0.1',
    user     : user,
    password : passWord,
    database : dataBase
    });

    connection.connect( err =>
    {
        if (err) {
            throw err;
        }
        console.log("Connected!");

        fs.readFile('./tickerList.txt', 'utf8', (err, data) =>
        {
            if(err) {
                console.error(err);
                return;
            }

            // const tickers = data.split('\n');
            
            // var index = 0;
            // tickers.forEach(item =>
            // {
            //     var sql = "INSERT INTO `<DATABASE>`.`<TABLE>` (`<COLUMN1>`, <COLUMN2>) VALUES(" + index + ", '" + item + "')";
            //     index++;
                // var sql = "INSERT INTO `<DATABASE>`.<TABLE> (<COLUMN1>) VALUES('" + item + "')";

            //     connection.query(sql, (err, result) => {
            //         if (err) throw err;
            //         console.log("1 record inserted");
            //     });
            // });

            connection.end();
        });
    });
}

Promise.all( [RetrieveUser(), RetrievePassword(), RetrieveDataBase()] )
.then(values =>
{
    user = values[0];
    passWord = values[1];
    dataBase = values[2];
})
.then( () => PopulateAssets() );
