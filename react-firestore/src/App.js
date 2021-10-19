import "./App.scss";
//https://firebase.google.com/docs/reference/js/v8/firebase.firestore.Firestore
import firestore from "./Services/firestore";
import { useState, useEffect } from "react";

function App() {
  const [students, setStudents] = useState(null);

  useEffect(() => {
    const getStudents = async () => {
      //Specify the collection that I'm accessing ("students")
      //Get all the students
      //https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference
      const colref = firestore.collection("students");
      //https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QuerySnapshot
      const snapshot = await colref.get();
      //https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QueryDocumentSnapshot
      const cleaned = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setStudents(cleaned);
    };
    getStudents();
  }, []);

  return (
    <div className="App">
      {students &&
        students.map((student) => (
          <p key={student.id}>
            {student.id}, {student.firstName}, {student.lastName}
          </p>
        ))}
    </div>
  );
}

export default App;

//Every time we interact with Firestore, it will be with
//async await as it is over the network
