import img from "../../public/not.png";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="size">
      <h1>NotFound</h1>
      <div className="flex justify-center h-[80vh] items-center">
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={img} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title justify-center">Not Found Page!</h2>
            <div className="card-actions justify-end">
              <Link to="/" className="btn btn-primary">
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
