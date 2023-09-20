import React, { useState } from "react";
import "./SlideShow.css";

function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      imageUrl:
        "http://www.ljyo.ca/wp-content/uploads/2023/04/LJYO-SwtS-2023-1200-x-600-px.png",
      imageLink: "https://example.com/image-link1",
      text: "Linkable Text 1",
      textLink: "https://example.com/text-link1",
    },
    {
      imageUrl:
        "http://www.ljyo.ca/wp-content/uploads/2022/04/LJYO-SB-POSTER-1200-x-600-px-1.png",
      imageLink: "https://example.com/image-link2",
      text: "Linkable Text 2",
      textLink: "https://example.com/text-link2",
    },
    {
      imageUrl:
        "http://www.ljyo.ca/wp-content/uploads/2022/10/home-for-the-holidays-rect-pict-2022-B.jpg.png",
      imageLink: "https://example.com/image-link3",
      text: "Linkable Text 3",
      textLink: "https://example.com/text-link3",
    },
    // Add more slide objects with imageURL, imageLink, text, and textLink properties here
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const openTextLinkInPopup = () => {
    const currentSlide = slides[currentIndex];
    window.open(currentSlide.textLink, "_blank", "width=800,height=600");
  };

  return (
    
    <div className="slideshow-container">
      <a
        href={slides[currentIndex].imageLink}
        target="_blank"
        rel="noopener noreferrer">
        <img
          src={slides[currentIndex].imageUrl}
          alt={`Slide ${currentIndex + 1}`}
          className="image-link"
        />
      </a>

      <p
        className="linkable-text"
        onClick={openTextLinkInPopup}
        style={{ cursor: "pointer", textDecoration: "underline" }}>
        {slides[currentIndex].text}
      </p>

      <button onClick={prevSlide} className="prev-button">
        &#10094;
      </button>
      <button onClick={nextSlide} className="next-button">
        &#10095;
      </button>
    </div>
  );
}

export default Slideshow;
