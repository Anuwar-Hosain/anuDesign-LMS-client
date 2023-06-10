const InstructorCard = ({ instructor }) => {
  const { img_url, name, email } = instructor;
  console.log(instructor);
  return (
    <div className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={img_url} alt="Shoes" className="h-52 w-52 rounded-full" />
      </figure>
      <div className="card-body">
        <h2 className="text-center font-bold text-3xl">{name}</h2>
        <p className="text-center text-xl">
          Email: <samp className="text-xl font-semibold">{email}</samp>
        </p>
        <div className="card-actions justify-center">
          <button className="btn bg-[#fbc102] hover:bg-[#fdd349]">
            See Classes
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
