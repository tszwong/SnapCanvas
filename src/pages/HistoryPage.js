// component + assset imports
import React from 'react';
import Footer from '../components/footer.js';
import PhotoPost from "../components/PhotoPost";
import ImgDesc from "../components/PhotoPost";
import ski_photo_placeholder from "../assets/ski_photo_placeholder.jpg";

// Bootstrap imports
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

const Profile = ({ imageSrc, altText, id, name, year, major }) => (
    <div className="col-3 polaroid">
        <img src={imageSrc} alt={altText} className="img-fluid" id={id}/>
        <p id={"profile-photo-caption"}>{name}, {major}</p>
    </div>
);

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
            <h1>SnapCanvas History</h1>

            <div>
                <h1>
                    <Badge id={"team-badge"} bg={"dark"}>Meet Our Team</Badge>
                </h1>
            </div>
            <div className="row frame">
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder" id="first_image"
                         name={"Tsz Kit Wong"} major={"Computer Science"}/>
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder" id="first_image"
                         name={"Tia Zheng"} major={"Computer Science + Math"}/>
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder" id="first_image"
                         name={"Simon Yu"} major={"Placeholder"}/>
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder" id="first_image"
                         name={"Tyler"} major={"Placeholder"}/>
            </div>

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
            <Footer/>
        </div>
    );
}

export default HistoryPage;
