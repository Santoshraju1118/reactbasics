import React from "react";
import Person from "./Person";

function NameList() {
  const personsList = ["Bruno", "Caroline", "Damon", "Bruno" ];
  const persons = [
    {
      id: 1,
      name: "Alex",
      age: 21,
    },
    {
      id: 2,
      name: "Brunoo",
      age: 20,
    },
    {
      id: 3,
      name: "Bruce",
      age: 24,
    },
  ];

  const personList = persons.map((person) => (
    <Person key={person.id} person={person} />
  ));
  const person = personsList.map((name, index) => <h1 key={index} > {index} {name} </h1>);
  return (
    <div>
      {personList} {person}
    </div>
  );
}

export default NameList;
