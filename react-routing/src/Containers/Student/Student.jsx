import { useParams } from "react-router-dom";
import students from "../../Services/students";
//useParams (a hook that uses the router context with info
//about URL) allows us to get an object of all the
//parameters that were passed in & the keys of that object
//are going to match the parameter names that I defined in
//the router

const Student = () => {
  //Destructure because useParams is giving an object back
  const { id } = useParams();
  const student = students.find((student) => {
    return student.id === parseInt(id);
  });

  if (!student) {
    return <h1>Student with Id: {id} was not found</h1>;
  }

  return (
    <div>
      <h2>
        {student.firstName}, {student.lastName}
      </h2>
      <p>Brownie Points: {student.browniePoints}</p>
      <p>Student ID: {student.id}</p>
    </div>
  );
};

export default Student;
