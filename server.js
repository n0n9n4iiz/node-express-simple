const express = require("express")
const app = express()
const path = require("path")
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname,"public")))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/users',require('./route/api/users'))

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})