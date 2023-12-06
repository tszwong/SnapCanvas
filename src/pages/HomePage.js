import React from 'react';
import Footer from '../components/footer.js';
import  {CarouselAuto}  from '../components/carouselAuto';
import { History }  from '../components/history.js';
import {Overlay} from '../components/overlay.js';
import {ImageGallery} from '../services/PexelHome.js';

import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const images = [image1, image2, image3];

function HomePage() {
    return (
        <div className={"container"}>
            <div className = "carousel-container">
                <Overlay/>
                <CarouselAuto customImages={images}/>
            </div>    
            <History/>
            <ImageGallery/>
            <Footer/>
        </div>
    );
}

export default HomePage;
