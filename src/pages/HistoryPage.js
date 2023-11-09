import React from 'react';
import Footer from '../components/footer.js';
import PhotoPost from "../components/PhotoPost";
import ImgDesc from "../components/PhotoPost";
import ski_photo_placeholder from "../assets/ski_photo_placeholder.jpg";

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
