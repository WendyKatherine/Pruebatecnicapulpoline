import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

const Adminlayout = () => {
  return (
    <>
      <div className="relative float-right sm:w-[100%] md:w-[100%] lg:w-[calc(100%-8rem)] xl:w-[calc(100%-8rem)]">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  );
};

export default Adminlayout;
