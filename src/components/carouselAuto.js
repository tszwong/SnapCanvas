import { useEffect, useState } from 'react';
import '../App.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

export function CarouselAuto() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const images = [image1, image2, image3];

  const displayImages = () => {
    return images.map((img, i) => (
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

