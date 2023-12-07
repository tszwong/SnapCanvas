import React from 'react';
import Footer from '../components/footer.js';
import Badge from 'react-bootstrap/Badge';
import PhotoCredit from '../components/PhotoCredit';

function HomePage() {
    return (
        <div className={"container"}>
            <div>
                <h1>
                    <Badge id={"team-badge"} bg={"dark"}>Credits</Badge>
                </h1>
            </div>

            <div className="row frame first">
                <h4>Gallery photos seen in home page and search results are provided by
                    <a href={"https://www.pexels.com/"}> Pexels.</a>
                </h4>
            </div>

            {/*  UNCOMMENT COMPONENT TEMPLATE FOR CREDIT COPY AND USE  */}
            {/*<PhotoCredit*/}
            {/*    CreatorName={""}*/}
            {/*    CreatorLink={""}*/}
            {/*    ImgLink={""}*/}
            {/*    Desc={""}*/}
            {/*    PageLink={""}*/}
            {/*    PageName={""}*/}
            {/*/>*/}

            {/* About us page photo credits */}
            <div className={"row frame not-first-history"}>
                <div>
                    <h2 id={"page-title"}>About Us Page Photo Credits</h2>
                </div>
                <PhotoCredit
                    CreatorName={"Oleg Chursin"}
                    CreatorLink={"https://unsplash.com/@olegchursin_photo"}
                    ImgLink={"https://unsplash.com/photos/mountains-during-golden-hour-vaPoJZB9Mzg"}
                    Desc={"Mountain 1"}
                    PageLink={"/about-us"}
                    PageName={"about us"}
                />
                <PhotoCredit
                    CreatorName={"Lucian"}
                    CreatorLink={"https://unsplash.com/@luciandachman"}
                    ImgLink={"https://unsplash.com/photos/snow-covered-mountain-during-daytime-v_mTgSs6UiY"}
                    Desc={"Mountain 2"}
                    PageLink={"/about-us"}
                    PageName={"about us"}
                />
                <PhotoCredit
                    CreatorName={"Alessio Soggetti"}
                    CreatorLink={"https://unsplash.com/@asoggetti"}
                    ImgLink={"https://unsplash.com/photos/snow-covered-mountains-under-clear-sky-during-daytime-IuSemNxGS88"}
                    Desc={"Mountain 3"}
                    PageLink={"/about-us"}
                    PageName={"about us"}
                />
                <PhotoCredit
                    CreatorName={"Marco Pregnolato"}
                    CreatorLink={"https://unsplash.com/@marco_pregnolato"}
                    ImgLink={"https://unsplash.com/photos/snow-covered-mountain-under-blue-sky-during-daytime-ahYX46whD8s"}
                    Desc={"Mountain 4"}
                    PageLink={"/about-us"}
                    PageName={"about us"}
                />
                <PhotoCredit
                    CreatorName={"Olivier Miche"}
                    CreatorLink={"https://unsplash.com/@oliviermiche"}
                    ImgLink={"https://unsplash.com/photos/aerial-view-photography-of-trees-and-mountains-OZACaaUskhg"}
                    Desc={"Mountain 5"}
                    PageLink={"/about-us"}
                    PageName={"about us"}
                />
                <PhotoCredit
                    CreatorName={"Jerry Zhang"}
                    CreatorLink={"https://unsplash.com/@z734923105"}
                    ImgLink={"https://unsplash.com/photos/snow-covered-mountain-during-daytime-jmjuzMFcUIs"}
                    Desc={"Mountain 6"}
                    PageLink={"/about-us"}
                    PageName={"about us"}
                />
            </div>

            {/* History page photos credits */}
            <div className={"row frame not-first-history"}>
                <div>
                    <h2 id={"page-title"}>History Page Photo Credits</h2>
                </div>
                <PhotoCredit
                    CreatorName={"Jerry Zhang"}
                    CreatorLink={"https://unsplash.com/@z734923105"}
                    ImgLink={"https://unsplash.com/photos/brown-mountains-under-white-sky-hkhCV41gOpA"}
                    Desc={"Mountain 1"}
                    PageLink={"/history"}
                    PageName={"history"}
                />
                <PhotoCredit
                    CreatorName={"Marek Piwnicki"}
                    CreatorLink={"https://unsplash.com/@marekpiwnicki"}
                    ImgLink={"https://unsplash.com/photos/snow-covered-mountain-under-blue-sky-during-daytime-DgdJ_0us5SE"}
                    Desc={"Mountain 2"}
                    PageLink={"/history"}
                    PageName={"history"}
                />
                <PhotoCredit
                    CreatorName={"Daniel Leone"}
                    CreatorLink={"https://unsplash.com/@danielleone"}
                    ImgLink={"https://unsplash.com/photos/snowy-mountain-g30P1zcOzXo"}
                    Desc={"Mountain 3"}
                    PageLink={"/history"}
                    PageName={"history"}
                />
            </div>

            {/* probably need to add more to features to footer besides the credits */}
            <Footer/>
        </div>
    );
}

export default HomePage;
