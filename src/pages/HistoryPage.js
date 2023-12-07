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
import tyler_img from "../assets/tylerbest.jpg";
import simon_img from "../assets/simonyu.jpg";
import tsz_img from "../assets/tszkitwong.jpg";
import tia_img from "../assets/tiazheng.JPG";

// Bootstrap imports
import Badge from 'react-bootstrap/Badge';
import Stack from 'react-bootstrap/Stack';

function HistoryPage() {
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
                <Profile imageSrc={tsz_img} altText="Tsz Kit Wong"
                         name={"Tsz Kit Wong"} major={"Computer Science"}
                         description={
                            "Hi, my favorite pokemon is Squirtle. My MBTI is ISFJ. I am from Hong Kong and I am a junior majoring in " +
                             "Computer Science. My favorite singer is Jay Chou. I like skiing and spending time with my family, dog," +
                             " and friends. Contact: WeChat = @jackywtk10, LinkedIn + Github = @tszwong, email = wongt@bu.edu."
                         }/>
                <Profile imageSrc={tia_img} altText="Tia Zheng"
                         name={"Tia Zheng"} major={"Computer Science"} 
                         description={"Hi, my name is Tia. I'm a sophomore at Boston University studying computer science. " + 
                            "I'm trying to not be sleep fluid, but it's kind of hard when I stock up on so much deadlines. " +
                            "When I am not studying, I like to explore my many interests. Currently I am trying to self-learn " +
                            "how to play the piano and also hit up the gym more often. " +
                            "(P.S. Although I don't spend much time dwelling on personality tests, I just know I have the better MBTI of INTJ)." 
                            
                         
                         }/>
                <Profile imageSrc={simon_img} altText="Simon Yu"
                         name={"Simon Yu"} major={"Advertising"}
                         description={
                            "I'm Simon Yu, a 21-year-old currently immersed in the world of advertising at Boston University. " +
                             "Alongside my academic pursuits, I find joy in various activities that fuel my creativity" +
                             " and passion. Whether it's delving into the captivating realms of literature, indulging in" +
                             " the magic of cinema, sculpting my physique at the gym, or capturing moments through the" +
                             " lens of my camera, I thrive on the diverse experiences each brings. Beyond the confines" +
                             " of academia, I channel my artistic energy into freelance projects, specializing in" +
                             " short film production and photography. This dynamic blend of academic dedication and" +
                             " creative exploration defines my journey, shaping the narrative of my life."
                         }
                />
                <Profile imageSrc={tyler_img} altText="Tyler Best"
                         name={"Tyler Best"} major={"Fine Arts"}
                         description={
                            "TYLER BEST / BIO" +
                             "Graphic Designer , Creative Director" +
                             "Hey there! I'm Tyler Best, a dedicated graphic designer nestled in Boston, MA. At Boston University, I dive into my studies while bringing my creative spark to life through TB Designs.\n" +
                             "Background & Expertise\n" +
                             "As the Founder and Creative Director of TB Designs, I thrive on crafting digital graphics that evoke emotions and tell compelling stories. I specialize in designing personalized logos for businesses and crafting eye-catching event flyers for various organizations, all while upholding design principles and mastering typography and layout.\n" +
                             "Professional Journey\n" +
                             "My design journey has led me to an internship at Clear Images Design Inc. There, I've honed my skills in curating engaging social media content, managing email communications, and creating impactful business ads for websites.\n" +
                             "Community Engagement\n" +
                             "Beyond design, I'm a passionate advocate and collaborator. As Co-chair of the Black Student Task Force at BU, I amplify Black student voices and spearhead impactful online initiatives. Additionally, I contribute my creative talents to Charcoal, a student-run magazine collective showcasing the academic achievements of Black students.\n" +
                             "Educational Background\n" +
                             "My educational path started with excelling in Graphic Design courses at Piscataway High School. At BU's College of Fine Arts, I've been honored on the Dean's List with Distinction. My research focuses on the role of Black contemporary art in challenging adultification, and my contributions to Piscataway's Permanent Art Collection underscore my commitment to creativity and innovation.\n" +
                             "Let's Collaborate!\n" +
                             "Ready to redefine your brand's narrative through visuals? Let's team up! Reach out to me at tylerbest801@gmail.com, and let's craft something extraordinary together. Follow my creative journey on Instagram: tylers.best.art and explore my evolving portfolio on my current website.\n" +
                             "Let's make something remarkable!\n"
                         }
                />
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
