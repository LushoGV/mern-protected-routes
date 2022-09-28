import Task from '../models/Task.js'

export const getTask = async (req, res) =>{
    const {idTask} = req.params
    const tasks = await Task.findOne({_id: idTask})
    res.json(tasks)
}

export const getTasks = async (req, res) =>{
    const {id} = req.userId
    const tasks = await Task.find({creator: id})
    res.json(tasks)
}

export const createTask = async (req, res) =>{
    const {title, description} = req.body
    const {id} = req.userId

    const newTask = await Task.create({title: title, description: description, creator: id})
    await newTask.save()
    
    res.json('created task')
}

export const updateTask = async (req, res) =>{
    const {id} = req.userId
    const {idTask} = req.params
    const {title, description, status} = req.body
    const task = await Task.findOneAndUpdate({creator: id, _id: idTask}, {title, description, status})
    await task.save()
    
    res.json('updated task')

}

export const removeTask = async (req, res) =>{
    const {id} = req.userId
    const {idTask} = req.params
    await Task.findByIdAndDelete({creator: id, _id: idTask})
    
    res.json('deleted task')
}