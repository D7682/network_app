const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());


let people = [
    {firstName: "Daniel"},
    {firstName: "Erika"},
    {firstName: "Christian"}
]

app.get('/people', (req, res) => {
    res.send(people)
})

app.get('/', (req, res) => {
    res.json({
        response: people,
        message: "A GET Request Was Just Made"
    })
})

app.post("/people", (req, res) => {
    people.push({ firstName: req.body.nameTest });
    res.send(people);
})


const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})