// CustomCarousel.js
import { useEffect, useState } from 'react';
import '../App.css';

export function CarouselAuto({ customImages }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % customImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [customImages]);

  const displayImages = () => {
    return customImages.map((img, i) => (
      <div key={i} style={{ display: i === index ? 'block' : 'none' }}>
        <img src={img} alt={`slide-${i + 1}`} className="carousel" />
      </div>
    ));
  };

  return (
    <section id="slide">
      <div id="container">
        <div id="image-slideshow">{displayImages()}</div>
      </div>
    </section>
  );
}


