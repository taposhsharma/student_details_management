import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(2),
      width: "30ch",
      
      
    },
  },
}));

export default function AddStudent() {
  const classes = useStyles();
  const [errormessage,setErrorMessage]= useState('')
  const [student, setStudent] = useState({
    regId: 0,
    name: "",
    course: "",
    section: "",
  });
  const createStudent = () => {
  
    axios.post("http://localhost:5000/students", student)
    .then((response)=>{
      console.log(response)
      window.location.reload(false);
    }).catch((error) => console.log(error))

  };
  return (
    <>
      <h1>Add Student data</h1>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Reg. Id"
       
          value={student.regId}
          onChange={(event) => {
            setStudent({ ...student, regId: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Name"
          value={student.name}
          onChange={(event) => {
            setStudent({ ...student, name: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Course"
          value={student.course}
          onChange={(event) => {
            setStudent({ ...student, course: event.target.value });
          }}
        />
        <TextField
          id="standard-basic"
          label="Section"
          value={student.section}
          onChange={(event) => {
            setStudent({ ...student, section: event.target.value });
          }}
        />
        <Button variant="contained" color="primary" onClick={createStudent}>
          Submit
        </Button>
      </form>
    </>
  );
}
