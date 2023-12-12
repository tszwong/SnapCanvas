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
                    <a href={"https://www.pexels.com/"}> Pexels </a>
                    in compliance with 
                    <br></br>
                    <a href="https://www.pexels.com/license/">Pexels Copyright Policy.</a>
                </h4>
            </div>

            {/*  UNCOMMENT COMPONENT TEMPLATE FOR CREDIT COPY AND USE  */}
            {/* <PhotoCredit
               CreatorName={""}
               CreatorLink={""}
               ImgLink={""}
               Desc={""}
               PageLink={""}
               PageName={""}
            /> */}

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

                        {/* Home page photo credits */}
            <div className={"row frame not-first-history"}>
                <div>
                    <h2 id={"page-title"}>Home Page Photo Credits</h2>
                </div>
                <PhotoCredit
                    CreatorName={"Bailey Zindel"}
                    CreatorLink={"https://unsplash.com/@baileyzindel"}
                    ImgLink={"https://unsplash.com/photos/body-of-water-surrounded-by-trees-NRQV-hBF10M"}
                    Desc={"Carousel 1"}
                    PageLink={"/home"}
                    PageName={"home"}
                />
                 <PhotoCredit
                    CreatorName={"Karina Vorozheeva"}
                    CreatorLink={"https://unsplash.com/@_k_arinn"}
                    ImgLink={"https://unsplash.com/photos/snow-covered-mountains-under-clear-sky-during-daytime-IuSemNxGS88"}
                    Desc={"Carousel 2"}
                    PageLink={"/home"}
                    PageName={"home"}
                />
                <PhotoCredit
                    CreatorName={"Kobby Mendez"}
                    CreatorLink={"https://unsplash.com/@kobbymendez"}
                    ImgLink={"https://unsplash.com/photos/white-ice-cream-on-brown-cookie-idTwDKt2j2o"}
                    Desc={"Carousel 3"}
                    PageLink={"/home"}
                    PageName={"home"}
                />
            </div>


            
                        {/* Membership page photo credits */}
            <div className={"row frame not-first-history"}>
                <div>
                    <h2 id={"page-title"}>Membership Page Photo Credits</h2>
                </div>
                <PhotoCredit
                    CreatorName={"Edgar"}
                    CreatorLink={"https://unsplash.com/@ymoran"}
                    ImgLink={"https://unsplash.com/photos/looking-up-at-tall-buildings-from-the-ground-lqePWrktz3Y"}
                    Desc={"Premium Carousel 1"}
                    PageLink={"/membership"}
                    PageName={"membership"}
                />
                <PhotoCredit
                    CreatorName={"Luise and Nic"}
                    CreatorLink={"https://unsplash.com/@luiseandnic"}
                    ImgLink={"https://unsplash.com/photos/a-person-standing-on-a-beach-next-to-the-ocean-MLPMulhNjj4"}
                    Desc={"Premium Carousel 2"}
                    PageLink={"/membership"}
                    PageName={"membership"}
                />
                <PhotoCredit
                    CreatorName={"Martijn Baudoin"}
                    CreatorLink={"https://unsplash.com/@martijnbaudoin"}
                    ImgLink={"https://unsplash.com/photos/a-long-exposure-of-a-flower-on-a-black-background-w2FJpng8Ouk"}
                    Desc={"Premium Carousel 3"}
                    PageLink={"/membership"}
                    PageName={"membership"}
                />
                <PhotoCredit
                    CreatorName={"Martin de Arriba"}
                    CreatorLink={"https://unsplash.com/@martindearriba"}
                    ImgLink={"https://unsplash.com/photos/a-white-wall-with-various-items-hanging-on-it-zWo_nlo_-R4"}
                    Desc={"Premium Carousel 4"}
                    PageLink={"/membership"}
                    PageName={"membership"}
                />
                <PhotoCredit
                    CreatorName={"Stefano Campana"}
                    CreatorLink={"https://unsplash.com/@stefanocampana__"}
                    ImgLink={"https://unsplash.com/photos/a-woman-standing-in-a-doorway-of-a-house-s_GHC_pTUZ8"}
                    Desc={"Premium Carousel 5"}
                    PageLink={"/membership"}
                    PageName={"membership"}
                />

                <PhotoCredit
                    CreatorName={"Stefano Campana"}
                    CreatorLink={"https://unsplash.com/@stefanocampana__"}
                    ImgLink={"https://unsplash.com/photos/a-woman-standing-in-a-doorway-of-a-house-s_GHC_pTUZ8"}
                    Desc={"Premium Carousel 5"}
                    PageLink={"/membership"}
                    PageName={"membership"}
                />
                <PhotoCredit
                    CreatorName={"Patrick Langwallner"}
                    CreatorLink={"https://unsplash.com/@patresinger"}
                    ImgLink={"https://unsplash.com/photos/a-white-vase-filled-with-lots-of-flowers-on-top-of-a-wooden-table-iLPQdrqRH_s"}
                    Desc={"Premium Photo 1"}
                    PageLink={"/membership"}
                    PageName={"membership"}
                />
                <PhotoCredit
                    CreatorName={"Quang Nguyen Vinh"}
                    CreatorLink={"https://unsplash.com/@quangpraha"}
                    ImgLink={"https://unsplash.com/photos/a-small-hut-on-a-small-island-in-the-middle-of-a-lake-kECnaq8g-Xk"}
                    Desc={"Premium Photo 2"}
                    PageLink={"/membership"}
                    PageName={"membership"}
                />
                <PhotoCredit
                    CreatorName={"Mohsen Karimi"}
                    CreatorLink={"https://unsplash.com/@mohsen_karimi"}
                    ImgLink={"https://unsplash.com/photos/a-woman-with-a-serious-look-on-her-face-QfMreQGQ9zc"}
                    Desc={"Premium Photo 3"}
                    PageLink={"/membership"}
                    PageName={"membership"}
                />
                <PhotoCredit
                    CreatorName={"mos design"}
                    CreatorLink={"https://unsplash.com/@mosdesign"}
                    ImgLink={"https://unsplash.com/photos/a-city-street-at-night-filled-with-neon-signs-zWPa-JluXGo"}
                    Desc={"Premium Photo 4"}
                    PageLink={"/membership"}
                    PageName={"membership"}
                />
                <PhotoCredit
                    CreatorName={"Luke Thornton"}
                    CreatorLink={"https://unsplash.com/@lukethornton"}
                    ImgLink={"https://unsplash.com/photos/a-car-driving-down-a-snow-covered-road-efNEuvFqw_o"}
                    Desc={"Premium Photo 5"}
                    PageLink={"/membership"}
                    PageName={"membership"}
                />

            </div>

            {/* probably need to add more to features to footer besides the credits */}
            <Footer/>
        </div>
    );
}

export default HomePage;
