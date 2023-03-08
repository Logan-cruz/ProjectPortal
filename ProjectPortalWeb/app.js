const ejs = require('ejs')
const express = require('express')
const app = express()
var path = require('path')
const port = 3000
app.set("view engine", "ejs")

app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) => {
    res.render("main")

})

app.get("/game", (req, res) => {
    res.redirect("www/index.html")
})


app.listen(port, () => {
    console.log(`listening on ${port}`)
})