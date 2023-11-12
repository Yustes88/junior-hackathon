function CellImage({image, index, onClick}) {
    console.log(index)
    if (image === null) {
        return <>
            <div className={`cell-image slot--${index}`}/>
        </>
    }
    return (
        <>
            <img className={`cell-image slot--${index} hover:brightness-150`} src={image.imgHref} alt={image.imageAlt} onClick={onClick}/>
        </>
    )
}


export default CellImage;