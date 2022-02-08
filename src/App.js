import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import react from "react";

function App() {
  //accessing the states of all the inputs + answer
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  const [age, setAge] = useState("");
  const [answer, setAnswer] = useState("");

  //function that changes the name
  const changeInName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  //function that changes the age
  const changeInAge = (e) => {
    setAge(e.target.value);
  };

  //function that changes the gender
  const changeInGender = (e) => {
    setGender(e.target.value);
    console.log(gender);
  };

  //function that changes the answer based on the provided information
  const generateAnswer = (e) => {
    e.preventDefault();
    setGender("male");
    setAge("");
    setName("");

    if (name == "" || age == "") {
      setAnswer("Both name and age must be filled.");
    } else if (gender == "male") {
      setAnswer(`Hello, Mr. ${name}.`);
    } else if (gender == "other") {
      setAnswer(`Hello, ${name}`);
    } else {
      if (age > 30) {
        setAnswer(`Hello, Ms. ${name}.`);
      } else {
        setAnswer(`Hello, Miss ${name}.`);
      }
    }
  };

  return (
    <>
      {answer === "" ? (
        <h1>Please provide the information</h1>
      ) : (
        <h1>{answer}</h1>
      )}
      <form onSubmit={generateAnswer}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={changeInName}
        ></input>
        <input
          type="number"
          value={age}
          placeholder="age"
          onChange={changeInAge}
        ></input>
        <select value={gender} onChange={changeInGender}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <button>Send data</button>
      </form>
    </>
  );
}

export default App;
