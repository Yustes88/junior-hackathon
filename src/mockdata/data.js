function getImagesForDimension(dimension) {
    return Array.from({length: dimension * dimension}, (_, i) => ({
        title: 'One of the image part',
        imgHref: 'https://minecraft.glitchless.ru/tmp/junhack/row-' + (Math.floor(i / dimension) +1) + '-column-' + (i % dimension + 1) + '.png',
        imageAlt: 'One of the image part'
    }));
}


export default getImagesForDimension;