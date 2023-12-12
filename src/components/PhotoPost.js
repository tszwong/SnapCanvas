import React, { useState } from 'react';

// one third image, two third text component
const ImgDesc = ({ imageSrc, altText, id, title, date, description, readmore }) => {
    const [isReadMoreVisible, setReadMoreVisible] = useState(false);  // state for visibility of the extra content
    const toggleReadMore = () => {  // function to change the state
        setReadMoreVisible(!isReadMoreVisible);  // update to opposite state
    };

    return (
        <div className="row">
            <div className="col-4 post-photo">
                <img src={imageSrc} alt={altText} className="img-fluid" id={id}/>
            </div>
            <div className="col-8 post-text">
                <div>
                    <h3><span id="photo-post-title">{title}</span> | <span id="photo-post-date">{date}</span></h3>
                    <hr/>
                </div>
                <div id="photo-post-desc">
                    {/* content that is always visible */}
                    {description}
                    {/* extra cotent initially hidden */}
                    {isReadMoreVisible && <span className="read-more-text">{readmore}</span>}
                </div>

                {/* button for read more */}
                <div id="photo-post-btn">
                    <button id={"read-more-btn"} onClick={toggleReadMore}>
                        {/* the text in btn will change depending if the extra content is displayed */}
                        {/* extra content that is initially hidden will appear or display when clicked */}
                        {isReadMoreVisible ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImgDesc;