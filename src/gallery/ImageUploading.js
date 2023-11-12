import React from "react";
import ReactDOM from "react-dom";
import ImageUploader from 'react-images-upload';


class ImageUploadingCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            is_loading: false
        };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(pictureFiles, pictureDataURLs) {
        if (pictureFiles.length < 1) {
            return
        }
        const formData = new FormData();
        formData.append('image', pictureFiles[0])

        fetch('https://charity.kulikov.uk/api/gallery/image', {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(json => console.log(json));
    }

    render() {
        return (
            <div className='upload-box'>
                <ImageUploader
                    className='upload-button'
                    fileContainerStyle={{
                        padding: 0,
                        'border-radius': 0
                    }}
                    withPreview={false}
                    withLabel={false}
                    withIcon={false}
                    singleImage={true}
                    buttonText='Choose images'
                    onChange={this.onDrop}
                    imgExtension={['.jpg', '.png', '.jpeg']}
                    maxFileSize={5242880}
                />
            </div>
        );
    }
}

export default ImageUploadingCell;