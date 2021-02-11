import React, { useState, useEffect } from "react";
import axios from "axios";

function Sample() {
  const [users, setUsers] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);
  const [address, SetAddress] = useState([])
  const [companyDetails, setCompanyDetails] = useState([])

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${idFromButtonClick}`)
      .then((responce) => {
        console.log(responce);
        setUsers(responce.data);
        SetAddress(responce.data.address)
        setCompanyDetails(responce.data.company)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [idFromButtonClick]);

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch User Details
      </button>
      <h2> Name: {users.name} </h2>
      <h2> Email: {users.email} </h2>
      <h3> Address: {address.street}, {address.suite}, {address.city}, {address.zipcode} </h3>
      <h3> Company Name: {companyDetails.name} </h3>
    </div>
  );
}

export default Sample;
