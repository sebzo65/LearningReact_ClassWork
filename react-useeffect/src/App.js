import styles from "./App.module.scss";
import { useState } from "react";
import { useEffect } from "react";

//Initial value changes -> count -> updates
//onClick -> count -> updates

const Counter = ({ initialValue }) => {
  const [count, setCount] = useState(initialValue);
  //update state has direct dependency on count state. Every time
  //the count state changes we need a way to update the update state
  const [updates, setUpdates] = useState(-1);

  //useEffect function takes in 2 args - function (which contains code
  //that you want to run at a particular point in the lifecycle.ie.When this
  //happens, run this) & the state that we're watching (i.e.the updates where
  //we want this function to run)
  useEffect(() => {
    console.log("Component is mounting");

    return () => {
      //When component is ready to unmount, it will run this
      console.log("component is unmounting");
    };
    //useEffect allows us to watch particular props or state that are
    //coming in, & allows us to run a function when those bits of state update
  }, []);
  //In a mounting function, we don't want it to watch anything because we
  //just want it to run once when the component mounts & never again,
  //so we use empty list as 2nd arg. When we want to update changes, then
  //we populate the empty list

  // 2.useEffect watching count state, is run
  useEffect(() => {
    //On update
    console.log("The count has been changed");
    console.log("Current value of count", count);
    // 3.Updates is updated based on changes to count
    setUpdates(updates + 1);

    return () => {
      console.log("(Before update) Current Value of count", count);
    };
  }, [count]);

  useEffect(() => {
    setCount(initialValue);
  }, [initialValue]);

  useEffect(() => {
    console.log("count or updates has updated");
    //You can also watch multiple state changes at once
  }, [count, updates]);

  //Before update
  return (
    <div>
      {/* 1.Count state is updated */}
      <button onClick={() => setCount(count + 1)}>Add 1</button>
      <span>{count}</span>
      {/* This will be no. of updates that have happened to the count state (i.e.No.
      of times button has been clicked) */}
      <p>State Updates: {updates}</p>
    </div>
  );
};

const Quantity = ({ initialValue, onChange }) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => setCount(count - 1);

  const decrement = (n) => () => setCount(count - n);
  const increment = (n) => () => setCount(count + n);

  useEffect(() => onChange(count), [count]);
  //Here, regardless of where count change is coming from, it's always
  //going to propagate & call onChange

  return (
    <div className="Quantity_Buttons">
      <button onClick={handleDecrement}>-</button>
      <span>{count}</span>
      <button onClick={handleIncrement}>+</button>
      {/* No. in brackets is variable n */}
      <button onClick={decrement(10)}>-10</button>
      <button onClick={increment(10)}>+10</button>
      <button onClick={increment(100)}>+100</button>
      <button onClick={increment(1000)}>+1000</button>
    </div>
  );
};

const Form = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [updates, setUpdates] = useState(-1);

  useEffect(
    () => {
      setUpdates(updates + 1);
    },
    input1,
    input2,
    input3
  );

  console.log(input1, input2, input3);
  return (
    <>
      <p>Number of Updates: {updates}</p>
      <input
        type="text"
        value={input1}
        onChange={(event) => setInput1(event.target.value)}
      />
      <input
        type="text"
        value={input2}
        onChange={(event) => setInput2(event.target.value)}
      />
      <input
        type="text"
        value={input3}
        onChange={(event) => setInput3(event.target.value)}
      />
    </>
  );
};

const RandomWord = () => {
  const [words, setWords] = useState([
    "dictionary",
    "ham",
    "sandwich",
    "initial",
  ]);

  const [word, setWord] = useState("ham");

  //When component mounts, we are starting an interval
  //that sets a random word to state every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const random = Math.floor(Math.random() * words.length);
      // console.log("Random", random, "Word:", words[random]);
      setWord(words[random]);
    }, 1000);

    //When component unmounts, we are removing the interval such that the
    //interval does run after component is unmounted
    //
    //Tip: See what happens if you remove this return
    return () => {
      clearInterval(intervalId); //Unmount function to clear the interval on the page
    };
  }, []);

  return <h3>{word}</h3>;
};

const Breeds = () => {
  //Some state to store data from Breeds API
  //1.Breeds state initialised as null
  const [breeds, setBreeds] = useState(null);
  //null because when component renders can't guarantee we will have the data
  useEffect(() => {
    //Perform request
    //Get data
    //setBreeds(data)
    //When it mounts, calling this function
    const getBreeds = async () => {
      const response = await fetch("https://catfact.ninja/breeds");
      const json = await response.json();
      const data = json.data;
      //When we get response from API, it will then set Breeds data
      //4.When we get a response, set breeds state to some data
      setBreeds(data);
    };
    //2.Timeout is initialised
    setTimeout(() => {
      //3.Once timeout has elapsed, request is performed
      getBreeds();
    }, 1500);
    getBreeds();
  }, []);
  return (
    //And then it will render the breeds to the page
    <div>
      {/* 5.When breeds is not null, we map & render the breeds */}
      {!breeds ? (
        <p>We have no breeds to show you</p>
      ) : (
        breeds
          .slice(0, 10)
          .map((breed, index) => <p key={index}>{breed.breed}</p>)
      )}
    </div>
  );
};
const App = () => {
  const [toggleCount, setToggleCount] = useState(true);
  const [toggleRandWord, setToggleRandWord] = useState(true);
  const [count, setCount] = useState(5);
  const [qty, setQty] = useState(7);
  return (
    <div className={styles.App}>
      <div className={styles.Counter}>
        <h1> Counter Code-Along</h1>
        {/* Lazy evaluation.If 1st expression true then 2nd holds true */}
        <div>
          {toggleCount && <Counter initialValue={count} />}
          {/* Here, every time we press toggle and mount the component, import PropTypes from 'prop-types'
      will go back to its mounting state(initialValue) All of its
      states will be destroyed in React runtime*/}
          <button onClick={() => setToggleCount(!toggleCount)}>
            Toggle Counter
          </button>
          <button onClick={() => setCount(count + 1)}>App Count Add</button>
          <p>App Count is: {count}</p>
        </div>
      </div>
      <div className={styles.Quantity}>
        <Quantity initialValue={qty} onChange={setQty} />
        <p>The Current Quantity is: {qty}</p>
      </div>
      <div className={styles.Form}>
        <h1>useEffect watching multiple states</h1>
        <Form />
      </div>
      <div className={styles.RandomWord}>
        <h1>Random Word Component</h1>
        <RandomWord />
        <div>
          <button onClick={() => setToggleRandWord(!toggleRandWord)}>
            Toggle Random Word
          </button>
        </div>
        {toggleRandWord && <RandomWord />}
      </div>
      <div className={styles.apiContainer}>
        <h2>Using Mount for API Calls</h2>
        <Breeds />
      </div>
    </div>
  );
};

export default App;
