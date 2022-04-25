const taskController = require("../controllers/Task.js");

const Image = require("../middleware/fileUploads");
const checkAuth = require("../middleware/checkAuth");

const router = require("express").Router();

router.post("/addTask", checkAuth, Image.upload, taskController.addTask);
router.get("/getTask", checkAuth, taskController.getAllTasks);

router.put("/update/:id", checkAuth, taskController.updateTask);

router.delete("/:id", checkAuth, taskController.deleteTask);

module.exports = router;
