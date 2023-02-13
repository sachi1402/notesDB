import express from 'express';
import cors from 'cors';
const app= express()
app.use(cors());
app.use(express.json())

import {getNotes,getNote,insertNote,deleteNote,updateNote} from './database.js';
app.get('/Notes',async (req,res)=>{
    const data = await getNotes()
    res.status(200).send(data)
    
})
app.get('/Notes/:id', async (req,res)=>{
    let id = req.params.id
    const data = await getNote(id)
    res.status(200).send(data)
})
app.post('/Notes', async (req,res)=>{
   let {title,contant} = req.body;
   console.log(title,contant);
   const note= await insertNote(title,contant)
   res.status(201).send(note)
})
app.delete('/Notes', async (req,res)=>{
    let {id} =  req.body;
    console.log(id,req.body);
    const data = await deleteNote(id)
    res.status(202).send(data)
})
app.put('/Notes/',async (req,res)=>{
    let {title,contant,id} = req.body;
    console.log(title,contant);
    const note= await updateNote(title,contant,id)
    res.status(201).send(note)})

app.listen(3000)