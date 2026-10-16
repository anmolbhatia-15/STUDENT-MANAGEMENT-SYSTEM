import express from 'express'
import { MongoClient } from 'mongodb'
const app=express()

const dbName="school"
const collectionName="student"
const url="mongodb://localhost:27017"
const client=new MongoClient(url)

const connection=async()=>{
    const connect=await client.connect()
    return await connect.db(dbName)
}
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.use(express.static('public'))
// app.get('/',(req,resp)=>{
//         resp.render('dashboard')
   
// })
app.get('/addstudent',(req,resp)=>{
    resp.render("addstudent")
})
app.post("/addstudent",async(req,resp)=>{
    const db=await connection()
    const collection=await db.collection(collectionName)
    const result=await collection.insertOne(req.body)
    console.log(result);
    if(result){
        resp.redirect("student")
    }else{
        resp.send('error')
    }
    
})
app.get('/student',async(req,resp)=>{
        const db=await connection()
    const collection=await  db.collection(collectionName)
    const result=await collection.find().toArray()
    if(result){
        resp.render("student",{result})
    }else{
        resp.send("error")
    }
})
app.get("/updatestudent",async(req,resp)=>{
    resp.render('update')
})

app.get('/',async(req,resp)=>{
    const db=await connection()
    const all=await db.collection(collectionName).find().toArray()
    let total=all.length
    let active=0
    let inactive=0
    for(let i=0;i<all.length;i++){
        if(all[i].status=='active'){
            active++
        }else{
            inactive++
        }
    }
    resp.render('dashboard',{total,active,inactive,courses:5})

})
app.get('/active',async(req,resp)=>{
    const db=await connection()
    const all=await db.collection(collectionName).find().toArray()
    let result=[]
for(let i=0;i<all.length;i++){
if(all[i].status=='active'){
    result.push(all[i])
}

}
resp.render('filtered',{result,title:'ActiveStudents',type:'active'})
})
app.get('/inactive',async(req,resp)=>{
    const db=await connection()
    const collection=await  db.collection(collectionName).find().toArray()
    let total=[]

    for(let i=0;i<collection.length;i++){
        if(collection[i].status!=="active"){
          total.push(collection[i])
        }
    }
    resp.render('filtered',{total,title:'InactiveStudents',type:'Inactive'})
})
app.listen(3200)