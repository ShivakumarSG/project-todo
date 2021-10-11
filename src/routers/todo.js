const express = require('express');
const Todo = require('../models/todo');
const router = new express.Router();

// API for getting all the docs
router.get('/todos', async (req,res)=>{
    try{
        const todos = await Todo.find({});
        res.status(201).send(todos);
    }catch(e){
        res.status(500).send();
    }
})

//API for creating the new docs
router.post('/todos', async (req, res)=>{
    try{
        const todos = await Todo.create(req.body);
        res.status(201).send(todos)
    }catch(e){
        res.status(500);
    }
})

//API to update
router.patch('/todos/:id', async(req,res)=>{
    try{
        const todos = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!todos){
            return res.status(404).send()
        }
        res.send(todos);
    }catch(e){
        res.status(400).send(e);
    }
})

//API to delete the document
router.delete('/todos/:id', async(req,res)=>{
    try{
        await Todo.findByIdAndRemove(req.params.id)
        res.status(200).send('todo deleted');
    }catch(e){
        res.status(400).send(e);
    }
})

module.exports = router;