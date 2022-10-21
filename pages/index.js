import Head from "next/head";
import Navbar from "../components/Navbar";
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      {/* make a container that has two divs that take up half a row on the same row, when in mobile view, make them stack on top of eachother */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b-[2px] border-black">
        <div className="bg-[#ff90e8] border-r-[2px] border-black">
          {/* <h1 className="text-7xl  font-bold text-left align-center pt-20 pl-20 xs:text-4xl"> */}
          {/* do the same styling as above but make it reponsive so on mobile screens the text is smaller */}
          <h1 className="text-6xl md:text-7xl md:font-normal  font-bold text-left align-center pt-20 pl-20 xs:text-6xl">
            Go from
            <br /> zero to $1
          </h1>
          {/* <p className="text-2xl text-left align-center pt-10 pl-20 pr-28"> */}
          {/* same styling as above, but when on mobile, make the text center */}
          <p className="text-2xl md:text-left align-center pt-10 pl-20 pr-28 xs:text-center">
            With Gumroad, anyone can earn their first dollar online. Just start
            with what you know, see what sticks, and get paid.
            <br /> It’s that easy.
          </p>

          {/* button that is centered and takes 3/5 of the div */}
          <div className="flex justify-center pt-10 pb-10 ">
            <button
              className="bg-black text-white text-2xl  py-3 px-10 rounded-md w-3/5
           
              
            "
            >
              Start selling
            </button>
          </div>
        </div>

        <div className="bg-[#ffc900]">
          <img
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61942b84ec3d406199f07d78_vegalia.png"
            alt="background"
            className="w-3/5 mx-auto pt-20"
          />
          {/* h1 tag in the bottom left of div */}
          <h1 className="text-2xl md:text-2xl md:font-normal text-left align-center pt-20 pl-1 xs:text-6xl">
            Vegalia sells Procreate brushes
          </h1>
        </div>
      </div>

      <Marquee
        gradient={false}
        speed={20}
        className="bg-black text-7xl text-center pt-10 pb-10 text-white"
      >
        <h1>
          {" "}
          See what sticks • See what sticks • See what sticks • See what sticks
          •
        </h1>
      </Marquee>
    </>
  );
};

export default Home;
