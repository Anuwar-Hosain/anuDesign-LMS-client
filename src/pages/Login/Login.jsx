import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <div className="flex justify-center w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="">
          {/* register your input into the hook by invoking the "register" function */}
          <label className="label">Email:</label>
          <input
            placeholder="Enter your email"
            {...register("example", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          {errors.exampleRequired && (
            <span className="text-red-500">This field is required</span>
          )}
          <br />

          {/* include validation with required or other standard HTML validation rules */}
          <label className="label">Password:</label>
          <input
            {...register("exampleRequired", { required: true })}
            className="input input-bordered w-full max-w-xs"
          />
          <br />
          {errors.exampleRequired && (
            <span className="text-red-500">This field is required</span>
          )}
          <br />
          {/* errors will return when field validation fails  */}

          <input className="btn btn-warning" type="submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
