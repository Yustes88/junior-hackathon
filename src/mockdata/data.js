function getImagesForDimension(dimension) {
    return Array.from({length: dimension * dimension}, (_, i) => ({
        title: 'One of the image part',
        imgHref: 'https://picsum.photos/' + Math.round(Math.random() * 110),
        imageAlt: 'One of the image part'
    }));
}


export default getImagesForDimension;