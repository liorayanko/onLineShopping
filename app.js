// var nodemailer = require('nodemailer');

// const fs = require('fs')
// const util = require('util')
// const read = util.promisify(fs.readFile)
const express = require('express')
const app = express()
// var jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config()
const mongoose=require('mongoose')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
// const userController=require('./controller/user')
// const productController=require('./controller/product')
// const adminController=require('./controller/admin')
// const Items = require("./model/item")

const router=require('./router/api.js')//ייבוא של קובץ הניתוב

app.use('/',router)// -מידלוואר--על כל פניה תלך לראוטר

const connectionParams = {   //הגדרות חיבור לפני חיבור למונגו
     useNewUrlParser: true,
     useCreateIndex: true,
     useUnifiedTopology: true,
     useFindAndModify: false}

     mongoose.connect(process.env.DB_CONNECT, connectionParams).then(() => {
          console.log('connected')
          }).catch(err => { console.log(err) })

// // app.get('/sign/:name/:password', (req, res) => {//הצפנת הנתונים
// //      const token = jwt.sign({ name: req.params.name, password: req.params.password },
// //           process.env.SECRET)
// //      res.send(token)
// // })
//  app.get('/verify/:token',(req,res)=>{//פיענוח ההצפנה
//           const user=jwt.verify(req.params.token,process.env.SECRET)
//           res.send(user)
//           })
// app.get('/checkToken/:name/:password', (req, res) => { //בדיקה האם הטוקן תואם 
//      console.log("checkToken function work !!!")
//      const user = jwt.verify(req.headers['authorization'], process.env.SECRET)
//      console.log(user.name)
//      console.log(user.password)
//      if (user.name == req.params.name && user.password == req.params.password)
//           res.send('succ')
// })

// app.use('/', bodyParser.json())

// let userList = [{ id: '1', name: 'Moshe' }, { id: '2', name: 'Avi' }, { id: '3', name: 'Yossi' }]

// app.get('/', (req, res) => {
//      res.send('Hellow Express')
// })
// app.get('/getAllUsers', (req, res) => {
//      res.send(userList)
// })
// // app.post('/addUser', (req, res) => {
// //      let user = req.body
// //      userList.push(user)
// //      res.send(userList)
// // })
// app.post('/addUser',userController.addUser)

// app.put('/updateUser/:id', (req, res) => {
//      for (let i = 0; i < userList.length; i++) {
//           if (userList[i].id == req.params.id) {
//                userList[i] = req.body
//           }
//      }
//      res.send({ newUserList: userList })//יחזיר אובייקט
//      //res.send(userList)// או אפשר גם שיחזיר את המערך החדש כרגיל
// })
// app.patch('/updateUserName/:id', (req, res) => {
//      for (let i = 0; i < userList.length; i++) {
//           if (userList[i].id == req.params.id) {
//                userList[i].name = req.body.name
//           }
//      }
//      res.send({ newUserList: userList })
// })

// app.delete('/deleteUser/:id', (req, res) => {
//      userList = userList.filter((user) => {return user.id!= req.params.id})//אם האיבר אליו הגעת שונה מהאיבר בבקשה אז תכניס אותו למערך החדש //
//      res.send(userList)                              //בפילטר-אם עונה על התנאי הוא נכנס אם לא עונה אז לא נכנס
// })
// app.get('/findUser',(req,res)=>{
//      let currentUser
//      if (req.query.name) 
//           userList.forEach((item,index) =>  {
//              if (item.name==req.query.name)
//                 currentUser=item
//      })
//           if (currentUser)
//           res.send(currentUser)//או res.jeson({currentUser:currentUser}) ואז יחזיר לי אובייקט של ג'ייסון
//           else res.send('not found')
//      })



app.listen(3000, () => { console.log('listen...') })


