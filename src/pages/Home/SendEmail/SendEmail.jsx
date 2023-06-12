const SendEmail = () => {
  return (
    <section className="size">
      <div className="form-control w-full my-28 h-72 rounded-2xl bg-[#253c56]">
        <div className="input-group justify-center my-auto !items-center">
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
          />
          <button className="btn bg-[#fbc102] px-4">Email</button>
        </div>
      </div>
    </section>
  );
};

export default SendEmail;
