const PopularInstructor = () => {
  return (
    <section className="size">
      <div className="my-14">
        <h1 className="text-5xl font-extrabold">Our Popular Instructor</h1>
        <div className="">
          <div className="card  bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularInstructor;
