const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
const cors = require('cors'); 
const { nanoid } = require('nanoid');
dotenv.config({path: './config.env'})

const app = express(); 
app.use(cors()); 
app.use(express.json())

let todos = [
    {
        id: nanoid(), 
        title: 'todo 1', 
        completed: true, 
    }, 
    {
        id: nanoid(), 
        title: 'todo 2', 
        completed: false
    }, 
    {
        id: nanoid(), 
        title: 'todo 3', 
        completed: false, 
    }, 
    {
        id: nanoid(), 
        title: 'todo 4', 
        completed: true
    }
]

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.post('/todos', (req, res) => {
    const todo = {title: req.body.title, id: nanoid(), completed: false}; 
    todos.push(todo); 
    return res.send(todo); 
})

const PORT = 7000; 

app.listen(PORT, console.log(`Server is running on port ${PORT}`.green.bold))