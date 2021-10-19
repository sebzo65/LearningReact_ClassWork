import students from "../../Services/students";
import styles from "./Students.module.scss";
import { Link, useLocation } from "react-router-dom";
//In this directory 2 components because there's no point
//creating a separate directory. This is because the component
//will not be reused and is coupled to another component
//Here, StudentCard is a presentational component only used once

const useQuery = () => {
  const location = useLocation();
  return new URLSearchParams(location.search);
};

const StudentCard = ({ student }) => {
  return (
    <div className={styles.StudentCard}>
      <p>ID: {student.id}</p>
      <p>
        {student.firstName} - {student.lastName}
      </p>
      <p>
        <Link to={`/students/${student.id}`}>Go to</Link>
      </p>
    </div>
  );
};

const Students = () => {
  const query = useQuery();
  const name = query.get("name") ?? "";
  const limit = query.get("limit") ? parseInt(query.get("limit")) : 10;

  const filteredStudents = students
    .filter((student) => {
      return `${student.firstName} ${student.lastName}`.includes(name);
    })
    //Can also do a sort here by Id/Alphabetical
    .slice(0, limit);

  return (
    <div className={styles.Students}>
      {filteredStudents.map((student, index) => (
        <StudentCard student={student} key={index} />
      ))}
    </div>
  );
};

export default Students;
