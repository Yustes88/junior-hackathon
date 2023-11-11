function CellImage({image, index}){
    console.log(index)
    // console.log(image)
    return (
        <>
            <img className={`cell-image slot--${index}`} src={image.imgHref} alt={image.imgAlt} />
        </>
    )
}


export default CellImage;