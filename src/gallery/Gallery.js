import React from "react";
import GalleryPhoto from "./GalleryPhoto";
import './Gallery.css';
import ImageUploadingCell from "./ImageUploading";

const images = Array.from({length: 5}, (_, i) => ({
    imgHref: 'https://charity.kulikov.uk/api/default/gallery/image?imageid=' + (i + 1)
}))

class Gallery extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadedImages: []
        }
    }

    onCellClick = () => {

    }

    onNewPhoto = (imageId) => {
        let url = 'https://charity.kulikov.uk/api/gallery/image?imageid=' + imageId
        console.log(url)
        this.setState(
            {
                uploadedImages: Array.prototype.concat.call(this.state.uploadedImages, [{
                    imgHref: url,
                }])
            }
        )
    }

    render() {
        return <div className="gallery">
            <ImageUploadingCell onNewPhoto={this.onNewPhoto}/>
            {
                Array.prototype.concat.call(this.state.uploadedImages, images).map((image, i) => (
                    <GalleryPhoto key={i} image={image} index={i} onClick={() => {
                        this.onCellClick(i)
                    }}/>
                ))}
        </div>
    }
}

export default Gallery;