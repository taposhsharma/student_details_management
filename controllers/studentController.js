const StudentData = require("../models/studentModel");

const getStudents = async (req, res) => {
  // res.send(`<h1>hey this is student page</h1>`);
  try {
    const allStudents = await StudentData.find();
    res.status(200).json(allStudents);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createStudent = async (req, res) => {
  console.log("hi")
  const student = req.body;
  const newStudent = new StudentData (student)
  StudentData.findOne({regId:student.regId})
  .then(savedUser =>{
      if(savedUser){
        console.log("same")
           res.status(422).json({error:"Id already exists"})
      }
      else{
                  newStudent.save()
                          .then(user =>{
                              res.status(200).json({msg:"Student added successfully"})
                          })
                          .catch(err=>console.log(err))
              
      }
  }
  )
};

const deleteStudent = async (req, res) => {
  const id = req.params.id;

  try { 
    await StudentData.findByIdAndRemove(id).exec();
    res.send("Succesfully deleted");
  }
  catch (err) {
    console.log(err);
  }
};

module.exports = { getStudents, createStudent, deleteStudent };
