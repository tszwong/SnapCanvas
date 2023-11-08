import React from 'react';
import Footer from '../components/footer.js';

import ski_photo_placeholder from '../assets/ski_photo_placeholder.jpg';

// Profile component for displaying an image
const Profile = ({ imageSrc, altText, id }) => (
    <div className="col-4">
        <img src={imageSrc} alt={altText} className="img-fluid" id={id}/>
    </div>
);

// TextColumn component for displaying text
const TextColumn = ({ text }) => (
    <div className="col-4">
        {text}
    </div>
);

// TextRow component for displaying text
const TextRow = ({ text }) => (
    <div className="col-12">
        {text}
    </div>
);

// one third image, two third text component
const ImgDesc = ({ imageSrc, altText, id, text }) => (
    <div className="row">
        <div className="col-4">
            <img src={imageSrc} alt={altText} className="img-fluid" id={id}/>
        </div>
        <div className="col-8">
            {text}
        </div>
    </div>
);

function AboutUsPage() {
    // random generated place holder text
    const placeholder = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum. 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.`;

    return (
        <div className="container">
            <h1>About SnapCanvas</h1>

            <div className="row frame">
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder" id="first_image" />
                <TextColumn text={placeholder} />
                <TextColumn text={placeholder} />
            </div>

            {/* If you have more rows of profiles and text, you can repeat them here */}
            {/* Example of another row: */}
            <div className="row frame not-first">
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder" id="second_image" />
                <TextColumn text={placeholder} />
                <TextColumn text={placeholder} />
            </div>

            <div className="row frame not-first">
                <TextRow text={placeholder} />
            </div>

            <div className="row frame not-first">
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder" id="first_image" />
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder" id="first_image" />
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder" id="first_image" />
            </div>

            <div className="row frame not-first">
                <ImgDesc imageSrc={ski_photo_placeholder} altText="Placeholder" id="first_image" text={placeholder}>
                </ImgDesc>
            </div>

            <Footer/>
        </div>
    );
}

export default AboutUsPage;
