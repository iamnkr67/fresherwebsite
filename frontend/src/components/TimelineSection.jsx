import React, { useEffect, useRef } from "react";
import "./TimelineSection.scss";

const timelineData = [
  {
    year: "2015",
    title: "Event One",
    description: "Description for Event One.",
    icon: "📩",
  },
  {
    year: "2016",
    title: "Event Two",
    description: "Description for Event Two.",
    icon: "🔍",
  },
  {
    year: "2017",
    title: "Event Three",
    description: "Description for Event Three.",
    icon: "📘",
  },
  {
    year: "2018",
    title: "Event Four",
    description: "Description for Event Four.",
    icon: "📈",
  },
  {
    year: "2019",
    title: "Event Five",
    description: "Description for Event Five.",
    icon: "💡",
  },
];

const InteractiveTimeline = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const timelineItems = document.querySelectorAll(".timeline-item");
    const options = {
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate"); // Remove class when out of view
        }
      });
    }, options);

    timelineItems.forEach((item) => observer.observe(item));

    // Cleanup observer on component unmount
    return () => observer.disconnect();
  }, []);

  return (
    <div id="timeline" className="timeline-container" ref={timelineRef}>
      <div className="text-center">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            Event Timeline
          </span>
        </h2>
      </div>
      <div className="timeline">
        <div className="timeline-line"></div>
        {timelineData.map((item, index) => (
          <div
            className="timeline-item"
            key={index}
            style={{ "--animation-index": index }}
          >
            <div className="timeline-content">
              <div className="timeline-icon">{item.icon}</div>
              <h2 className="timeline-year">{item.year}</h2>
              <h3 className="timeline-event">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveTimeline;
