import React, { useState } from 'react';

// component to make crediting the photos easier
const ImgDesc = ({ CreatorName, CreatorLink, ImgLink, Desc, PageLink, PageName }) => {
    return (
        <div className="row">
            <p id="">
                The image of
                <a href={ImgLink}> {Desc} </a>
                in the
                <a href={PageLink}> {PageName} </a>
                page
                is provided by photographer
                <a href={CreatorLink}> {CreatorName} </a>
                under
                <a href="https://creativecommons.org/licenses/by-nd/2.0/"> Creative Common Licenses </a>
            </p>
        </div>
    );
};

export default ImgDesc;