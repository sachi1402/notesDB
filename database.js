import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config()
const pool =mysql.createPool(
    {
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    }
).promise()
export async function getNotes(){
    const [res]= await pool.query('SELECT * FROM notes;') //[[data],[metadata]]
    return res
}
export async function getNote(id){
  
    const [res]= await pool.query('SELECT * FROM notes WHERE id = ?',[id]) //[[data],[metadata]]
    return res
}
export async function insertNote(title,contant){
  
    const [res]= await pool.query('INSERT into notes (title,content) VALUES (?,?)',[title,contant]) //[[data],[metadata]]
    return getNote(res.insertId)
    
}
export async function deleteNote(id){
    const [res] = await pool.query('DELETE FROM notes WHERE id = ?',[id])
    let re=  getNotes()
    return re
}
export async function updateNote(title,contant,id){
  
    const [res]= await pool.query('UPDATE notes SET title = ?, content= ? WHERE id = ?;',[title,contant,id]) //[[data],[metadata]]
    return getNote(id)
    
}
