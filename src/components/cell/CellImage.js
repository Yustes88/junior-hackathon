function CellImage(image){
    console.log(image)
    return (
        <>
            <img className='cell-image' src={image.image.imgHref} alt={image.imgAlt} />
        </>
    )
}


export default CellImage;