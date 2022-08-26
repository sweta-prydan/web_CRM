import React from 'react'
import './bannerImage.css';

const BannerImage = ({ bannerImage, alt }) => {
    return (
        <div>
            <img className="img-fluid bannerImage"
                src={bannerImage}
                alt={alt} />
        </div>
    )
}

export default BannerImage;