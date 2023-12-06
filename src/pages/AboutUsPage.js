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
    <div className="col-4">
        <img src={imageSrc} alt={altText} className="img-fluid" id={id}/>
    </div>
);

// TextColumn component for displaying text
// text will occupy 1/3 of the columns of the grid
const TextColumn = ({ text }) => (
    <div className="col-4">
        {text}
    </div>
);

// TextRow component for displaying text
// text will occupy the entire 12 columns of the grid
const TextRow = ({ text }) => (
    <div className="col-12">
        {text}
    </div>
);

function AboutUsPage() {
    // random generated place holder text
    const placeholder = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.`;

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
                <Profile imageSrc={photo_1} altText="Placeholder" id="first_image" />
                <TextColumn text={placeholder} />
                <TextColumn text={placeholder} />
            </div>

            <div className="row frame not-first no-borders">
                <Profile imageSrc={photo_2} altText="Placeholder" id="second_image" />
                <TextColumn text={placeholder} />
                <TextColumn text={placeholder} />
            </div>

            <div className="row frame not-first no-borders">
                <TextRow text={placeholder} />
            </div>

            <div className="row frame not-first no-borders">
                <Profile imageSrc={photo_3} altText="Placeholder" id="first_image" />
                <Profile imageSrc={photo_4} altText="Placeholder" id="first_image" />
                <Profile imageSrc={photo_5} altText="Placeholder" id="first_image" />
            </div>

            <div className="row frame not-first-history">
                <ImgDesc
                    imageSrc={photo_6}
                    altText={"Placeholder"}
                    title={"Sample Title"}
                    date={"Nov 8, 2023"}
                    description={placeholder}
                />
            </div>

            <Footer/>
        </div>
    );
}

export default AboutUsPage;
