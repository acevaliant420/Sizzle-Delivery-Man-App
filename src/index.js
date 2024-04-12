const express = require("express")
const path = require("path")
const app = express()
// const hbs = require("hbs")
const LogInCollection = require("./mongo")
const port = process.env.PORT || 3000
app.use(express.json())

app.use(express.urlencoded({ extended: false }))

const tempelatePath = path.join(__dirname, '../tempelates')
const publicPath = path.join(__dirname, '../public')
console.log(publicPath);

app.set('view engine', 'hbs')
app.set('views', tempelatePath)
app.use(express.static(publicPath))


// hbs.registerPartials(partialPath)

app.use("/images", express.static(path.join(__dirname, "/tempelates/img")));
app.get('/signup', (req, res) => {
    res.render('signup')
})
app.get('/', (req, res) => {
    res.render('login')
})
app.get('/home', (req, res) => {
    res.render('home')
})
app.get('/earnings', (req, res) => {
    res.render('earnings')
})

app.get('/past', (req, res) => {
    res.render('past')
})
app.get('/upcoming', (req, res) => {
    res.render('upcoming')
})


// app.get('/home', (req, res) => {
//     res.render('home')
// })

app.post('/signup', async (req, res) => {

    const checking = await LogInCollection.findOne({ name: req.body.name })

   try{
    if (checking === null) {
        const data = new LogInCollection({
            name: req.body.name,
            password: req.body.password
        })
        await LogInCollection.insertMany([data])
        
    }
    else{
        res.send("user details already exists")
        return
    }
   }
   catch{
    res.send("wrong inputs")
    return
   }

   

    res.status(201).render("home")
})


app.post('/login', async (req, res) => {

    try {
        const check = await LogInCollection.findOne({ name: req.body.name })

        if (check.password === req.body.password) {
            res.status(201).render("home")
        }

        else {
            res.send("incorrect password")
        }


    } 
    
    catch (e) {

        res.send("wrong details")
        

    }


})



app.listen(port, () => {
    console.log('port connected');
})