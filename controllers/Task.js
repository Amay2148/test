const db = require("../models");

const path = require("path");

const Task = db.task;

const addTask = async (req, res, next) => {
  let info = {
    title: req.body.title,
    dueDate: req.body.dueDate,
    attachment: req.file.path,
  };

  const task = await Task.create(info);

  res.status(200).send(task);
};

const getAllTasks = async (req, res, next) => {
  let tasks = await Task.findAll({});
  res.status(200).send(tasks);
};

const updateTask = async (req, res) => {
  let id = req.params.id;
  const task = await Task.update(req.body, { where: { id: id } });
  res.status(200).send(task);
};

const deleteTask = async (req, res) => {
  let id = req.params.id;

  await Task.destroy({ where: { id: id } });

  res.status(200).send("Task is deleted !");
};

module.exports = {
  addTask,
  getAllTasks,
  updateTask,
  deleteTask,
};
