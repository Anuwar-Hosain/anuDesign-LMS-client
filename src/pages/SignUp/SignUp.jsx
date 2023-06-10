import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="w-1/2 m-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              {...register("email", { required: true })}
              className="input input-bordered"
            />
            {errors.email && (
              <span className="text-red-500 my-2">This field is required</span>
            )}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
              placeholder="password"
              className="input input-bordered"
            />
            {errors.password && (
              <span className="text-red-500 my-2">This field is required</span>
            )}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <div className="form-control mt-6">
            <input
              className="btn bg-[#fbc102] hover:bg-[#fdd349]"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <p className="text-center">
          <small>
            New Here?
            <Link className="btn-link" to="/signup">
              Create an account
            </Link>
          </small>
        </p>
        {/* <SocialLogin></SocialLogin> */}
      </div>
    </>
  );
};

export default SignUp;
