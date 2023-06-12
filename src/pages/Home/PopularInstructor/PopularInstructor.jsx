import { useEffect, useState } from "react";
import InstructorCard from "../../../components/InstructorCard/InstructorCard";

const PopularInstructor = () => {
  const [instructors, setInstructors] = useState();
  useEffect(() => {
    fetch("http://localhost:5000/instructors")
      .then((res) => res.json())
      .then((result) => {
        setInstructors(result.slice(0, 6));
      });
  }, []);
  return (
    <section className="size">
      <div className="my-14">
        <h1 className="text-5xl font-extrabold">Our Popular Instructor</h1>
        <div className="mt-14 grid grid-cols-3 gap-2">
          {instructors?.map((instructor) => (
            <InstructorCard
              key={instructor._id}
              instructor={instructor}
            ></InstructorCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructor;
