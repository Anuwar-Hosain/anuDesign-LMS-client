import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularInstructor from "../PopularInstructor/PopularInstructor";
import SendEmail from "../SendEmail/SendEmail";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <PopularClass></PopularClass>
      <PopularInstructor></PopularInstructor>
      <SendEmail></SendEmail>
    </>
  );
};

export default Home;
