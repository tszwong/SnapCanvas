import React from 'react';
import Footer from '../components/footer.js';
import  {CarouselAuto}  from '../components/carouselAuto';
import { History }  from '../components/history.js';
import {Overlay} from '../components/overlay.js';
import {ImageGallery} from '../services/PexelHome.js';

function HomePage() {
    return (
        <div className={"container"}>
            <div className = "carousel-container">
                <Overlay/>
                <CarouselAuto/>
            </div>    
            <History/>
            <ImageGallery/>
            

            <Footer/>
        </div>
    );
}

export default HomePage;
