import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import bgvideo from "../assets/videoplayback.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
      >
        <source src={bgvideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Fresher's & Farewell Party 2024
        <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
          {" "}
          for BA English (Hons.)
        </span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        A day of rhythm, movement, and friendship awaits you at the College
        Auditorium-be part of the magic!
      </p>
      <div className="flex justify-center my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-purple-500 to-blue-790 py-3 px-4 mx-3 rounded-md border opacity-100 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Reserve Your Seat
        </a>
        <a
          href="#"
          className="bg-gradient-to-r from-blue-600 to-purple-790 py-3 px-4 mx-3 rounded-md border opacity-100 hover:opacity-100 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Apply for Performance
        </a>
      </div>
      {/* <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
    </div>
  );
};

export default HeroSection;
