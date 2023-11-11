// component + assset imports
import React from 'react';
import Footer from '../components/footer.js';
import PhotoPost from "../components/PhotoPost";
import ImgDesc from "../components/PhotoPost";
import Profile from "../components/ProfileModalComponent"
import ski_photo_placeholder from "../assets/ski_photo_placeholder.jpg";

// Bootstrap imports
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function HistoryPage() {
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
        <div className={"container"}>

            {/* this will probably be replaced later idk */}
            <h1>SnapCanvas History</h1>

            <div>
                <h1>
                    <Badge id={"team-badge"} bg={"dark"}>Meet Our Team</Badge>
                </h1>
            </div>
            {/* members profiles section, will need portraits of each memeber + a short description about
                themselves and whatever else you want
             */}
            <div className="row frame">
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder"
                         name={"Tsz Kit Wong"} major={"Computer Science"} description={placeholder}/>
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder"
                         name={"阿姨 Zheng"} major={"Computer Science + Math"} description={placeholder}/>
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder"
                         name={"Simon Yu"} major={"Placeholder"} description={placeholder}/>
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder"
                         name={"Tyler"} major={"Placeholder"} description={placeholder}/>
            </div>

            {/* beginning of the features section, what features have been implemented when */}
            <div className="row frame first">
                <ImgDesc
                    imageSrc={ski_photo_placeholder}
                    altText={"Placeholder"}
                    title={"Sample Title"}
                    date={"Nov 8, 2023"}
                    description={placeholder}
                />
            </div>
            <div className="row frame not-first">
                <ImgDesc
                    imageSrc={ski_photo_placeholder}
                    altText={"Placeholder"}
                    title={"Sample Title"}
                    date={"Nov 8, 2023"}
                    description={placeholder}
                />
            </div>
            <div className="row frame not-first">
                <ImgDesc
                    imageSrc={ski_photo_placeholder}
                    altText={"Placeholder"}
                    title={"Sample Title"}
                    date={"Nov 8, 2023"}
                    description={placeholder}
                />
            </div>
            <div className="row frame not-first">
                <ImgDesc
                    imageSrc={ski_photo_placeholder}
                    altText={"Placeholder"}
                    title={"Sample Title"}
                    date={"Nov 8, 2023"}
                    description={placeholder}
                />
            </div>

            {/* probably need to add more to features to footer besides the credits */}
            <Footer/>
        </div>
    );
}

export default HistoryPage;
