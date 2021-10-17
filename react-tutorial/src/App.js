import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
// JSX expressions must have 1 parent element
const App = () => {
  //By keeping this in the upper level component
  //App.js we can use them elsewhere 
  const [tasks] = useState([
    //State is immutable so can't use .push, for example
    //Instead use setTasks and new object, for example & change in other ways
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2.30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1.30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2.30pm",
      reminder: false,
    },
  ]);
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
