const   express = require('express')
const app = express();

const path = require('path');
const logger = require('./middleware/logger');
// const { json } = require('body-parser');
const member2 = require('./member2')
// const route = require('./routes/api/members')




app.use(logger)


app.use(express.static(path.join(__dirname,'static')))



app.use('/api/member',require('./routes/api/members'))




// app.get('/api/member/:userid',(req,res)=>{

//     res.json(member.filter(member=>member.userid===parseInt(req.params.userid)))
// })

// app.get('/api/member2/:id',(req,res)=>{
//     res.json(member2.filter(member2=>member2.id==parseInt(req.params.id)))
// })
// app.get('/api/member2',(req,res)=> res.json(member2))

app.listen(4000,() => console.log('server up on 4000'))