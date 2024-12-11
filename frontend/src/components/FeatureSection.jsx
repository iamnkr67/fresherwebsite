import { useEffect, useState } from "react";
import { features } from "../constants";

const FeatureSection = () => {
  const [visibleIndex, setVisibleIndex] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setVisibleIndex((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.5 },
    );

    document.querySelectorAll(".feature-item").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      id="about"
      className="relative mt-20 border-b border-neutral-800 min-h-[800px]"
    >
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm font-medium px-2 py-1 uppercase">
          About
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Fresher's and Farewell Party{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            2025
          </span>
        </h2>
      </div>
      <div className="flex flex-col items-center mt-10 lg:mt-20 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            data-index={index}
            className={`feature-item w-full sm:w-3/4 lg:w-2/3 transition-all duration-[1200ms] ease-in-out ${
              visibleIndex.includes(index)
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-start">
              <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-700 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-6 text-xl">{feature.text}</h5>
                <p className="text-md p-2 mb-4 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
