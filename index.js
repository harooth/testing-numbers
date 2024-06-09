const express = require("express");
const path = require("path")
const fs = require("fs")

const PORT = process.env.PORT || 3001;

let app = express();
app.use(express.json());
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res)=>{
    res.render("index")
})

// function parseTheData(input) {
// 	return JSON.parse(fs.readFileSync(input));
// }

const DATA = JSON.parse(fs.readFileSync("data.json"))

app.get("/:country", (req, res)=>{
    let country = req.params.country;
    if(DATA[country]) {
        let data = DATA[country]

        console.log(data)
        res.render("single", {data});
    } else {
        res.render("404")
    }
    
    // if()
    // let data = {
    //     country : req.params.country
    // }
    
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})