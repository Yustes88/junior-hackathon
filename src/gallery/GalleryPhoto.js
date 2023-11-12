function GalleryPhoto({image, onClick}) {
    return (
        <div>
            <img className='gallery-image' src={image.imgHref} alt={image.imageAlt} onClick={onClick}/>
        </div>
    )
}

export default GalleryPhoto;