import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const onClick = () => {
    console.log("Click");
  };
  //Above we destructure the object so that {title}
  //is the same as {props.title}
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
//This can be used to catch errors .i.e. If you
//put a number or a boolean value for header, instead
//of a string, it will throw an error

//CSS in JS//
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
//This default is a fallback only & is overwritten
//when Header element specified in App.js
