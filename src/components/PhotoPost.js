import React, { useState } from 'react';

// one third image, two third text component
const ImgDesc = ({ imageSrc, altText, id, title, date, description, readmore }) => {
    const [isReadMoreVisible, setReadMoreVisible] = useState(false);

    const toggleReadMore = () => {
        setReadMoreVisible(!isReadMoreVisible);
    };

    return (
        <div className="row">
            <div className="col-4">
                <img src={imageSrc} alt={altText} className="img-fluid" id={id}/>
            </div>
            <div className="col-8">
                <div>
                    <h3><span id="photo-post-title">{title}</span> | <span id="photo-post-date">{date}</span></h3>
                    <hr/>
                </div>
                <div id="photo-post-desc">
                    {description}
                    {isReadMoreVisible && <span className="read-more-text">{readmore}</span>}
                </div>
                <div id="photo-post-btn">
                    <button id={"read-more-btn"} onClick={toggleReadMore}>
                        {isReadMoreVisible ? 'Read Less' : 'Read More'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImgDesc;