import React from 'react';

// one third image, two third text component
const ImgDesc = ({ imageSrc, altText, id, title, date, description }) => (
    <div className="row">
        <div className="col-4">
            <img src={imageSrc} alt={altText} className="img-fluid" id={id}/>
        </div>
        <div className="col-8">
            <div>
                <h3>{title} {date}</h3>
            </div>
            <div>{description}</div>
        </div>
    </div>
);

export default ImgDesc;