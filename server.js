const express = require ("express");
const app = (express());
const mysql = require ("mysql");
const cors = require ("cors");
const bodyParser = require("body-parser");

const db = mysql.createConnection({
    user: "root",
    host: "127.0.0.1",
    port: 3307,
    password: "",
    database: "fogado"
    }
)


app.get("/", (req, res) => {
    res.send("mukodik");
})

app.get("/asd", (req, res) => {
    const sql = `SELECT * FROM foglalasok`;
    db.query(sql,(err,result) => {
        if (err) return res.json(err);
        return res.json(result);
    })
})

app.listen(3000, () =>{
    console.log("A szerver fut");
});