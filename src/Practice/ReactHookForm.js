import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="userName"
          name="userName"
          ref={register({
            required: "username required",
          })}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          ref={register({
            required: "password required",
            minLength: {
              value: 6,
              message: "password requied min 6 characters",
            },
          })}
        />
        {errors.userName && <p>{errors.userName.message} </p>}
        {errors.password && <p>{errors.password.message} </p>}
        <input type="submit" />
      </form>
    </div>
  );
}

export default ReactHookForm;
