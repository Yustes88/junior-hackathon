function GalleryPhoto({image, onClick}) {
    console.log(image)
    return (
        <div>
            <img className='gallery-image' src={image.imgHref} alt='Gallery image' onClick={onClick}/>
        </div>
    )
}

export default GalleryPhoto;