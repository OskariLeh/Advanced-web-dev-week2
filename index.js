const express = require("express")
const port = 3000
const app = express()
const path = require('path')
let dataList = []

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.get("/hello", (req, res) => {
    res.send(
        {
            msg: "Hello world"
        })
})

app.get("/echo/:id", (req, res) => {
    res.send(
        {
            id: req.params.id
        })
})

app.post("/sum", (req, res) => {
    let sum = 0
    let number_array = req.body.numbers

    number_array.forEach(number => {
        sum += number
    });
    res.send({"sum": sum})
})

app.post("/list", (req, res) => {
    dataList.push(req.body.text)
    res.send({"list": dataList})
})


app.listen(port, () => {
    console.log(`App listening to port ${port}`)
})