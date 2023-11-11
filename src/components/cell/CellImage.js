function CellImage({image, index, onClick}) {
    console.log(index)
    if (image === null) {
        return <>
            <div className={`cell-image slot--${index}`}/>
        </>
    }
    // console.log(image)
    return (
        <>
            <img className={`cell-image slot--${index}`} src={image.imgHref} alt={image.imageAlt} onClick={onClick}/>
        </>
    )
}


export default CellImage;