import { useEffect, useState } from "react";
import ClassCard from "../../../components/ClassCard/ClassCard";
const PopularClass = () => {
  const [classes, setClasses] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/class")
      .then((res) => res.json())
      .then((result) => {
        setClasses(result.slice(0, 6));
      });
  }, []);
  return (
    <section className="size">
      <div className="my-14">
        <h1 className="text-5xl font-extrabold">Our Popular Courses</h1>
        <div className="mt-14 grid grid-cols-3 gap-2">
          {classes?.map((item) => (
            <ClassCard key={item._id} item={item}></ClassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularClass;
