import React from "react";

function Person({ person }) {
  return (
    <div>
      <h1>
        {person.id}:- I'am {person.name}, of age {person.age}{" "}
      </h1>
    </div>
  );
}

export default Person;
