import React from "react";

function Login(props) {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [name,setName] = React.useState(props.Name)

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
      setIsLoggedIn(false)
  }

  const nameHandler = (e) => {
      setName(e.target.value)
  }

  return isLoggedIn ? (
    <div>
      <div>
        <h1>welcome {name}..! </h1>
      </div>
      <button onClick={logoutHandler} >Logout</button>
    </div>
  ) : (
    <div>
      <div>
        <h1>Welcome Guest..!</h1> 
      </div>
      <input onChange={nameHandler} name="name" type="text" />
      <button onClick={loginHandler} >Login</button>
    </div>
  );
}

export default Login;
