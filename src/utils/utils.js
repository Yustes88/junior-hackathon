export const shuffle = (images) => {
    const newArr = new Array(...images)
    return newArr.sort(() => Math.random() - .5)
}

export const moveItem = (images, index, dimension) => {
    let emptyIndex = images.findIndex((image) => image === null);
    let swap = false
    if (index + 1 === emptyIndex && (index === 0 || (index + 1) % dimension !== 0)) {
        swap = true
    } else if (index - 1 === emptyIndex && (emptyIndex === 0 || (emptyIndex + 1) % dimension !== 0)) {
        swap = true
    } else if (index - dimension === emptyIndex) {
        swap = true
    } else if (index + dimension === emptyIndex) {
        swap = true
    }

    if (swap) {
        images[emptyIndex] = images[index]
        images[index] = null
    }
    return images
}


export const arrayWithValues = (images) => new Array(...images).map((image, i) => {
    return {...image, 'value': i}
})
