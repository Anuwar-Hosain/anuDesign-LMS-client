import { useEffect, useState } from "react";
import ClassCard from "../../components/ClassCard/ClassCard";

const Classes = () => {
  const [classes, setClasses] = useState();
  useEffect(() => {
    fetch("https://anu-design-server.vercel.app/class")
      .then((res) => res.json())
      .then((result) => {
        setClasses(result);
      });
  }, []);
  return (
    <section className="size">
      <div className="my-14">
        <h1 className="text-5xl font-extrabold text-center">Our Classes:</h1>
        <div className="mt-14 grid grid-cols-3 gap-2">
          {classes?.map((item) => (
            <ClassCard key={item._id} item={item}></ClassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;
