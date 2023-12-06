// component + assset imports
import React from 'react';
import Footer from '../components/footer.js';
import PhotoPost from "../components/PhotoPost";
import ImgDesc from "../components/PhotoPost";
import Profile from "../components/ProfileModalComponent";
import Typewriter from 'react-ts-typewriter';  // package for typewriter effect
import ski_photo_placeholder from "../assets/ski_photo_placeholder.jpg";
import photo_1 from "../assets/jerry-zhang-hkhCV41gOpA-unsplash.jpg";
import photo_2 from "../assets/marek-piwnicki-DgdJ_0us5SE-unsplash.jpg";
import photo_3 from "../assets/daniel-leone-g30P1zcOzXo-unsplash.jpg";

// Bootstrap imports
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function HistoryPage() {
    // random generated place holder text
    const placeholder = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.`;

    return (
        <div className={"container"}>

            {/* this will probably be replaced later idk */}
            <div id={"page-header"}>
                <h1 id={"page-title"}>
                    {/* using an imported typewriter component from npmjs */}
                    <Typewriter loop={true} speed={400} text={"SnapCanvas"} />
                </h1>
                <p id={"page-description"}>"Where technology dances with art, delivering a kaleidoscope of creativity through a curated canvas of
                    licensed stock photos, redefining visual storytelling for the world."</p>
            </div>

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
                         name={"Tia Zheng"} major={"Computer Science"} description={placeholder}/>
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder"
                         name={"Simon Yu"} major={"Advertising"} description={placeholder}/>
                <Profile imageSrc={ski_photo_placeholder} altText="Placeholder"
                         name={"Tyler Best"} major={"Fine Arts"} description={placeholder}/>
            </div>

            {/* beginning of the features section, what features have been implemented when */}
            <div className="row frame first-history">
                <ImgDesc
                    imageSrc={photo_1}
                    altText={"Placeholder"}
                    title={"The Team"}
                    date={"Nov 8, 2023"}
                    description={ "In the bustling corridors of Boston University, an unexpected alliance formed between " +
                        "Tia and Tsz, both computer science enthusiasts, Tyler, a prodigy in fine arts, and Simon, the " +
                        "creative force from advertising."
                    }
                    readmore={" United by their diverse talents and a shared dream of transforming the stock photography " +
                        "sphere, they birthed SnapCanvas in 2015. The quartet envisioned a platform where the marriage " +
                        "of technology and artistry would redefine the stock photo landscape, offering users a unique and " +
                        "expansive collection of licensed images."
                    }
                />
            </div>
            <div className="row frame not-first-history">
                <ImgDesc
                    imageSrc={photo_2}
                    altText={"Placeholder"}
                    title={"Initial Challenges"}
                    date={"Nov 20, 2023"}
                    description={ "As SnapCanvas gained momentum, the founders encountered a host of challenges during " +
                        "the crucial scaling phase. Technical hurdles surfaced as server capacities strained under escalating " +
                        "demand, and obtaining licenses for an ever-expanding image library became a complex puzzle."
                    }
                    readmore={" The team grappled with coding glitches, legal intricacies, and the intricate task of " +
                        "forging partnerships with photographers worldwide. Despite the obstacles, the founders remained " +
                        "steadfast, channeling their collective ingenuity into finding solutions that would propel " +
                        "SnapCanvas forward."}
                />
            </div>
            <div className="row frame not-first-history">
                <ImgDesc
                    imageSrc={photo_3}
                    altText={"Placeholder"}
                    title={"Final Product"}
                    date={"Dec 3, 2023"}
                    description={"After years of dedicated effort and strategic problem-solving, SnapCanvas now stands as " +
                        "a testament to the founders' resilience. The platform boasts an extensive repository of licensed " +
                        "stock photos, offering unparalleled variety. Scalability issues were conquered with cutting-edge " +
                        "server solutions, and strategic collaborations with photographers globally resulted in a diverse " +
                        "library meeting the needs of artists and businesses."
                    }
                    readmore={" SnapCanvas has evolved into the ultimate destination for those seeking a curated " +
                        "collection reflecting the rich tapestry of human creativity. Tia, Tsz, Tyler, and Simon, " +
                        "the BU visionaries, have reshaped the stock photo industry, proving that the fusion of " +
                        "computer science, fine arts, and advertising can redefine our perception and utilization of " +
                        "visual content."}
                />
            </div>

            {/* probably need to add more to features to footer besides the credits */}
            <Footer/>
        </div>
    );
}

export default HistoryPage;
