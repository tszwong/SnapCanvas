import React from 'react';

// Component + Asset imports
import Footer from '../components/footer.js';
import PhotoPost from "../components/PhotoPost";
import ImgDesc from "../components/PhotoPost";
import ski_photo_placeholder from '../assets/ski_photo_placeholder.jpg';
import Typewriter from 'react-ts-typewriter';  // package for typewriter effect
import photo_1 from '../assets/oleg-chursin-vaPoJZB9Mzg-unsplash.jpg';
import photo_2 from '../assets/lucian-v_mTgSs6UiY-unsplash.jpg';
import photo_3 from '../assets/marco-pregnolato-ahYX46whD8s-unsplash.jpg';
import photo_4 from '../assets/olivier-miche-OZACaaUskhg-unsplash.jpg';
import photo_5 from '../assets/jerry-zhang-jmjuzMFcUIs-unsplash.jpg';
import photo_6 from '../assets/alessio-soggetti-IuSemNxGS88-unsplash.jpg';

import Badge from 'react-bootstrap/Badge';

// Profile component for displaying an image
const Profile = ({ imageSrc, altText, id }) => (
    <div className="col-4 about-photo">
        <img src={imageSrc} alt={altText} className="img-fluid" id={id}/>
    </div>
);

// TextColumn component for displaying text
// text will occupy 1/3 of the columns of the grid
const TextColumn = ({ text }) => (
    <div className="col-8 about-text">
        {text}
    </div>
);

// TextRow component for displaying text
// text will occupy the entire 12 columns of the grid
const TextRow = ({ text }) => (
    <div className="col-12 about-text">
        {text}
    </div>
);

function AboutUsPage() {
    return (
        <div className="container">

            <div id={"about-us-title"}>
                <h1>
                    <Badge id={"team-badge"} bg={"white"}>About Us</Badge>
                </h1>
            </div>

            <hr/>
            {/* main content section, still need to decide what to put for each */}
            <div className="row frame no-borders">
                <Profile imageSrc={photo_1} altText="mountain" id="first_image" />
                <TextColumn text={
                    "Welcome to SnapCanvas, a platform for photographers and creatives alike. Our " +
                    "platform was born from the collective passion of four college students who wanted to create a vibrant" +
                    "community for people to enjoy photography through open collaboration and free expression. " +
                    "In a world teeming with beauty and an abundance of stories, we set out to create a space that not " +
                    "only showcases stunning visuals but also nurtures the creative spark " +
                    "within each of us. Our journey began in the hallways of academia, where late-night brainstorming sessions and lines of code met " +
                    "with a vision to make high-quality stock photos more accessible to users."
                } />
            </div>

            <div className="row frame not-first no-borders">
                <Profile imageSrc={photo_2} altText="mountain" id="second_image" />
                <TextColumn text={
                    "Leveraging the vast repository of the Pexels API, we've curated a collection that transcends " +
                    "the ordinary. Every photograph in our extensive gallery is more than just a picture; it's a " +
                    "canvas where light, shadow, and perspective converge to narrate a tale. From the raw beauty of " +
                    "nature to the structured chaos of urban landscapes, our diverse range of images is available to " +
                    "you, complete with free licensing that empowers your creativity."
                } />
            </div>

            <div className="row frame not-first-history about-last-row">
                <ImgDesc
                    imageSrc={photo_6}
                    altText={"mountain"}
                    title={"Mission Statement"}
                    date={"Nov 8, 2023"}
                    description={
                        "Our mission is simple : To open the door of high-quality, accessible imagery" +
                        " to everyone, free of charge. As we continue on this voyage of visual discovery, we invite you " +
                        "to dive in, explore, and let your creative ventures be limitless. Whether you're a graphic designer " +
                        "on the quest for the perfect backdrop, a startup looking to bring ideas to life, or simply an enthusiast " +
                        "appreciating the art of photography, SnapCanvas is your go-to destination. Come join us on " +
                        "this extraordinary adventure!"
                    }
                    readmore={
                        "on the quest for the perfect backdrop, a startup looking to bring ideas to life, or simply an enthusiast " +
                        "appreciating the art of photography, SnapCanvas is your go-to destination. Come join us on " +
                        "this extraordinary adventure!"
                    }
                />
            </div>

            <div className="row frame not-first no-borders">
                <Profile imageSrc={photo_3} altText="mountain" id="first_image" />
                <Profile imageSrc={photo_4} altText="mountain" id="first_image" />
                <Profile imageSrc={photo_5} altText="mountain" id="first_image" />
            </div>

            <Footer/>
        </div>
    );
}

export default AboutUsPage;
