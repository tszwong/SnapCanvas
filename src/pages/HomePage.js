// react + component imports
import React from 'react';
import Footer from '../components/footer.js';
import  {CarouselAuto}  from '../components/carouselAuto';
import { History }  from '../components/history.js';
import {Overlay} from '../components/overlay.js';
import {ImageGallery} from '../services/PexelHome.js';

// asset imports
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

// array of images that the carousel will rotate through
const images = [image1, image2, image3];

function HomePage() {
    return (
        <div className={"container"}>
            <div className = "carousel-container">
                <Overlay/>

                {/* calling the carousel component and using the images we imported as input */}
                <CarouselAuto customImages={images}/>
            </div>    
            <History/>

            <ImageGallery/>
            <Footer/>
        </div>
    );
}

export default HomePage;
