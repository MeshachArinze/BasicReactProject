import React, { useState } from "react";
import "./Accordion.css";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderAccordionItem = (index, title, content) => {
    const isActive = index === activeIndex;
    return (
      <div key={index}>
        <button
          className={`accordion ${isActive ? "active" : ""}`}
          onClick={() => handleClick(index)}
        >
          {title}
        </button>
        <div className={`panel ${isActive ? "show" : ""}`}>{content}</div>
      </div>
    );
  };

  return (
    <div>
      {renderAccordionItem(
        0,
        " What is Netflix ",
        "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. <br /> You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the goand without an internet connection. Take Netflix with you anywhere. 1"
      )}
      {renderAccordionItem(
        1,
        "Accordion 2",
        "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime. 2"
      )}
      {renderAccordionItem(
        2,
        "Accordion 3",
        "Netflix has an extensive library of feature films, documentaries, /n TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.3"
      )}
    </div>
  );
};

export default Accordion;
