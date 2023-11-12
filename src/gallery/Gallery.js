import React from "react";
import GalleryPhoto from "./GalleryPhoto";
import './Gallery.css';

const images = Array.from({length: 50}, (_, i) => ({
    title: 'Gallery\'s image',
    imgHref: 'https://picsum.photos/' + Math.round(Math.random() * 110),
    imageAlt: 'Image for puzzle'
}))

class Gallery extends React.Component {

    onCellClick = () => {

    }

    render() {
        return <div className="gallery">
            {images.map((image, i) => (
                <GalleryPhoto key={i} image={image} index={i} onClick={() => {
                    this.onCellClick(i)
                }}/>
            ))}
        </div>
    }
}

export default Gallery;