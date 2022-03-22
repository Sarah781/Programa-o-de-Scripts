/*const express = require("express")
const app = express ();
const PORT = 3001;
app.listen (PORT, () => console.log(`Rodando ${PORT}`) );
app.get("/",(req, res)=>{
    res.send("oie")
})


app.get("/cadastro/:nome/:idade", (req, res)=>{
    const{nome,idade} = req.params;
    res.send(nome + idade)
})*/

const express = require("express");
const app = express ();
const um = require("./exemplo1");
const dois = require("./exemplo2");
require ("dotenv").config();

//const PORT = process.env.PORT;

app.listen (process.env.PORT);
app.use("/um",um);
app.use("/dois",dois);

/*app.listen (PORT, () => {
    console.log(`Rodando ${PORT}`) });
    app.use("/sp",exer);

    app.use((_,res) =>{res.send("erro")})*/