import React, { useState, useEffect } from 'react';
import { FaArrowUp } from "react-icons/fa";
import './ScrollUp.css';

const ScrollUp = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {showButton && (
        <div className="scrolltotop" onClick={scrollToTop}>
          <FaArrowUp className="icon" />
        </div>
      )}
    </>
  );
};

export default ScrollUp;
